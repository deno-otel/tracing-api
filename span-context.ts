import { TraceContext } from "./deps.ts";

/**
 * This is the interface of the SpanContext as defined at https://opentelemetry.io/docs/specs/otel/trace/api/#spancontext
 */
export interface SpanContext extends Omit<Readonly<TraceContext>, "parentId"> {
  readonly spanId: TraceContext["parentId"];
  readonly isValid: boolean;
  readonly isRemote: boolean;
  getTraceId(format: "hex" | "bin"): string;
  getSpanId(format: "hex" | "bin"): string;
}
