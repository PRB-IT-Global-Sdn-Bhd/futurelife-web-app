import { createLogger } from "./logger";

/**
 * Server-side audit events (persisted by Node.js in production).
 * Portal code emits the same shape so modules stay consistent before the API exists.
 */
export type AuditActorType = "vendor_user" | "staff_user" | "system";

export type AuditAction =
  | "auth.sign_in"
  | "auth.sign_out"
  | "verification.decide"
  | "moderation.decide"
  | "billing.checkout_started"
  | "billing.webhook_received"
  | "candidate_data.viewed"
  | "applicant_data.viewed"
  | "admin.role_changed"
  | string;

export interface AuditEvent {
  /** ISO-8601 */
  occurredAt: string;
  action: AuditAction;
  actorType: AuditActorType;
  /** Opaque actor ID — never email or name in logs */
  actorId: string;
  /** Target resource, e.g. vendor org, listing, job */
  resourceType?: string;
  resourceId?: string;
  /** Non-PII metadata for investigations */
  metadata?: Record<string, string | number | boolean | null>;
  /** Correlation with request tracing */
  requestId?: string;
}

const auditLog = createLogger("audit");

export function buildAuditEvent(
  partial: Omit<AuditEvent, "occurredAt"> & { occurredAt?: string },
): AuditEvent {
  return {
    occurredAt: partial.occurredAt ?? new Date().toISOString(),
    ...partial,
  };
}

/** Phase 0: log locally; Phase 0+ will POST to Node.js `/admin/audit-events` */
export function recordAuditEvent(event: AuditEvent): void {
  auditLog.info(event.action, {
    actorType: event.actorType,
    actorId: event.actorId,
    resourceType: event.resourceType,
    resourceId: event.resourceId,
    requestId: event.requestId,
    ...event.metadata,
  });
}