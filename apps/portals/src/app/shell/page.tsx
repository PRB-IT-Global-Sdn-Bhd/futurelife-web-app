import { VendorPortalShell } from "@/components/ui/VendorPortalShell";
import { recordAuditEvent, buildAuditEvent } from "@/lib/observability/audit-event";
import { createLogger } from "@/lib/observability/logger";

const logger = createLogger("shell");

export const metadata = {
  title: "FutureLife — UI shell preview",
  description:
    "Phase 0 vendor portal shell (1440×900 and 390×844 checks). Static prototypes remain on GitHub Pages.",
};

export default function ShellPreviewPage() {
  logger.info("shell_preview_rendered", { viewport: "responsive" });
  recordAuditEvent(
    buildAuditEvent({
      action: "system.preview",
      actorType: "system",
      actorId: "phase-0-shell",
      resourceType: "page",
      resourceId: "shell",
      metadata: { module: "foundation" },
    }),
  );

  return (
    <VendorPortalShell
      portalName="Marketplace Vendor"
      portalTitle="Vendor Portal"
      accountLabel="Kampus Essentials"
      accountHint="Vendor account"
      monogram="KE"
      navItems={[
        { href: "/shell", label: "Dashboard", active: true },
        { href: "#listings", label: "Listings" },
        { href: "#orders", label: "Orders" },
        { href: "#payouts", label: "Payouts" },
        {
          href: "#messages",
          label: "Messages",
          badge: "3",
        },
        { href: "#profile", label: "Profile" },
      ]}
    >
      <p className="mb-1 text-[10px] font-bold text-fl-green-dark">
        Marketplace vendor
      </p>
      <h1 className="m-0 text-[23px] font-normal tracking-tight text-fl-ink">
        Dashboard (shell preview)
      </h1>
      <p className="mt-1.5 text-[11px] leading-snug text-fl-muted">
        Phase 0 layout proof. Billing uses two pages only: Plans &amp;
        Subscriptions and <strong>Sponsored</strong> Listings (never
        &quot;Featured&quot;). Hamburger navigation appears below 960px.
      </p>

      <section
        className="mt-5 grid gap-3 max-[960px]:grid-cols-2 min-[961px]:grid-cols-4"
        aria-label="Layout checkpoints"
      >
        {[
          {
            label: "Desktop shell",
            value: "1440×900",
            note: "Fixed sidebar + top bar",
          },
          {
            label: "Mobile shell",
            value: "390×844",
            note: "Hamburger drawer only",
          },
          {
            label: "Tokens",
            value: "Lime / white",
            note: "Square corners",
          },
          {
            label: "Data",
            value: "Preview",
            note: "No live Node.js auth",
          },
        ].map((card) => (
          <article
            key={card.label}
            className="min-h-32 border border-fl-line bg-fl-white p-4"
          >
            <span className="mb-4 block text-[10px] font-bold text-[#6e7177]">
              {card.label}
            </span>
            <strong className="block text-[31px] font-normal leading-none tracking-tight text-[#25282e]">
              {card.value}
            </strong>
            <span className="mt-2 block text-[9px] leading-snug text-[#7b7e84]">
              {card.note}
            </span>
          </article>
        ))}
      </section>

      <aside
        className="mt-6 border border-fl-line border-l-4 border-l-fl-green bg-fl-pale-green p-3 text-[9.5px] leading-snug text-[#56634d]"
        role="note"
      >
        Static HTML prototypes under{" "}
        <code className="text-[9px]">FutureLife-*-Vendor-Portal/</code> and{" "}
        <code className="text-[9px]">index.html</code> at the repo root are
        unchanged for GitHub Pages. This Next.js app lives in{" "}
        <code className="text-[9px]">apps/portals/</code> and deploys on Vercel
        per pull request.
      </aside>
    </VendorPortalShell>
  );
}