import { ContextAPI } from "./deps.ts";
import { SpanAPI } from "./span-api.ts";

/**
 * An interface that defines how a Span is injected into and extracted from a Context
 */
export interface ContextSpanAccessAPI {
  extractSpan(context: ContextAPI): SpanAPI | null;
  injectSpan(context: ContextAPI, span: SpanAPI): ContextAPI;
}
