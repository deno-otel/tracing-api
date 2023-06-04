import { TraceContext, TraceFlags, TraceState } from "./deps.ts";
import { SpanAPI } from "./span-api.ts";
import { getHexstring } from "./util.ts";

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

const isSpanContext = (sp: SpanAPI | SpanContextAPI): sp is SpanContextAPI =>
  "spanId" in sp;

export const getSpanContext = (sp: SpanAPI | SpanContext): SpanContextAPI => {
  if (isSpanContext(sp)) {
    return sp;
  }
  return sp.getSpanContext();
};

export const createSpanContext = (props: {
  traceId: Uint8Array;
  spanId: Uint8Array;
  traceFlags: TraceFlags;
  traceState: TraceState;
  isRemote: boolean;
}): SpanContextAPI => {
  return new SpanContext(props);
};

class SpanContext implements SpanContextAPI {
  public readonly traceId: Uint8Array;
  public readonly spanId: Uint8Array;
  public readonly traceFlags: TraceFlags;
  public readonly traceState: TraceState;
  public readonly isRemote: boolean;

  constructor(props: {
    traceId: Uint8Array;
    spanId: Uint8Array;
    traceFlags: TraceFlags;
    traceState: TraceState;
    isRemote: boolean;
  }) {
    this.traceId = props.traceId;
    this.spanId = props.spanId;
    this.traceFlags = props.traceFlags;
    this.traceState = props.traceState;
    this.isRemote = props.isRemote;
  }

  getTraceId(format: "hex"): string;
  getTraceId(format: "bin"): Uint8Array;
  getTraceId(): string;
  getTraceId(format: "hex" | "bin" = "hex"): Uint8Array | string {
    const { traceId } = this;

    return format === "bin" ? new Uint8Array(traceId) : getHexstring(traceId);
  }
  getSpanId(format: "hex"): string;
  getSpanId(format: "bin"): Uint8Array;
  getSpanId(): string;
  getSpanId(format: "hex" | "bin" = "hex"): Uint8Array | string {
    const { spanId } = this;

    return format === "bin" ? new Uint8Array(spanId) : getHexstring(spanId);
  }

  get isValid(): boolean {
    const traceId = this.getTraceId("bin");
    const spanId = this.getSpanId("bin");
    return (
      spanId.length === 8 &&
      spanId.some((byte) => byte !== 0) &&
      traceId.length === 16 &&
      traceId.some((byte) => byte !== 0)
    );
  }
}
