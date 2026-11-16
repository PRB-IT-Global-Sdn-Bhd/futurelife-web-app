export type LogLevel = "debug" | "info" | "warn" | "error";

export type LogContext = Record<string, string | number | boolean | null | undefined>;

const PII_KEY_PATTERN =
  /(?:email|password|token|phone|address|ssn|nric|passport|cv|resume|applicant|candidate)/i;

function sanitizeContext(context?: LogContext): LogContext | undefined {
  if (!context) return undefined;
  const safe: LogContext = {};
  for (const [key, value] of Object.entries(context)) {
    if (PII_KEY_PATTERN.test(key)) {
      safe[key] = "[redacted]";
    } else if (typeof value === "string" && value.includes("@")) {
      safe[key] = "[redacted]";
    } else {
      safe[key] = value;
    }
  }
  return safe;
}

export type LogEntry = {
  level: LogLevel;
  message: string;
  timestamp: string;
  context?: LogContext;
  requestId?: string;
};

function emit(entry: LogEntry): void {
  const payload = {
  ...entry,
    context: sanitizeContext(entry.context),
  };
  const line = JSON.stringify(payload);
  switch (entry.level) {
    case "error":
      console.error(line);
      break;
    case "warn":
      console.warn(line);
      break;
    case "debug":
      console.debug(line);
      break;
    default:
      console.info(line);
  }
}

export function createLogger(scope: string) {
  return {
    debug(message: string, context?: LogContext) {
      emit({
        level: "debug",
        message: `[${scope}] ${message}`,
        timestamp: new Date().toISOString(),
        context,
      });
    },
    info(message: string, context?: LogContext) {
      emit({
        level: "info",
        message: `[${scope}] ${message}`,
        timestamp: new Date().toISOString(),
        context,
      });
    },
    warn(message: string, context?: LogContext) {
      emit({
        level: "warn",
        message: `[${scope}] ${message}`,
        timestamp: new Date().toISOString(),
        context,
      });
    },
    error(message: string, context?: LogContext) {
      emit({
        level: "error",
        message: `[${scope}] ${message}`,
        timestamp: new Date().toISOString(),
        context,
      });
    },
  };
}