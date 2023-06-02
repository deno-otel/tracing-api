import { TraceContext } from "./deps.ts";

/**
 * This is the interface of the SpanContext as defined at https://opentelemetry.io/docs/specs/otel/trace/api/#spancontext
 */
export interface SpanContextAPI
  extends Omit<Readonly<TraceContext>, "parentId"> {
  readonly spanId: TraceContext["parentId"];
  readonly isValid: boolean;
  readonly isRemote: boolean;
  getTraceId(format: "hex"): string;
  getTraceId(format: "bin"): Uint8Array;
  getTraceId(): string;
  getTraceId(format: "hex" | "bin"): Uint8Array | string;
  getSpanId(format: "hex"): string;
  getSpanId(format: "bin"): Uint8Array;
  getSpanId(): string;
  getSpanId(format: "hex" | "bin"): Uint8Array | string;
}
