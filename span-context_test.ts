import { getEmptyTraceState, TraceFlags } from "./deps.ts";
import { assertEquals, assertExists, describe, it } from "./dev_deps.ts";
import { createSpanContext } from "./span-context.ts";

describe("createSpanContext", () => {
  it("should create a span context", () => {
    const spanContext = createSpanContext({
      traceId: new Uint8Array(16),
      spanId: new Uint8Array(8),
      traceFlags: TraceFlags.NONE,
      traceState: getEmptyTraceState(),
      isRemote: false,
    });
    assertExists(spanContext);
    assertEquals(spanContext.isValid, false);
    assertEquals(spanContext.isRemote, false);
    assertEquals(spanContext.traceFlags, TraceFlags.NONE);
    assertEquals(
      spanContext.getTraceId("hex"),
      "00000000000000000000000000000000",
    );
    assertEquals(spanContext.getSpanId("hex"), "0000000000000000");
  });
});
