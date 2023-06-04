import { Attribute, Attributes } from "./deps.ts";
import { SpanContextAPI } from "./span-context.ts";
import { SpanEvent } from "./span-event.ts";
import { SpanLink } from "./span-link.ts";
import { SpanStatus } from "./span-status.ts";
import { Timestamp } from "./types.ts";

export class SpanAttributes extends Attributes {}

/**
 * A Span represents a single operation within a Trace.
 * This is described at https://opentelemetry.io/docs/specs/otel/trace/api/#span
 */
export interface SpanAPI {
  getSpanContext(): SpanContextAPI;
  isRecording(): boolean;

  setAttribute(key: string, value: unknown): void;
  setAttributes(attributes: Attribute[]): void;
  addLink(
    spanContext: SpanContextAPI,
    attributes?: SpanLink["attributes"],
  ): void;
  addEvent(
    name: string,
    time: Timestamp,
    attributes?: SpanEvent["attributes"],
  ): void;
  recordException(exception: Error, attributes?: SpanEvent["attributes"]): void;
  setStatus(
    code: SpanStatus["code"],
    message?: SpanStatus["description"],
  ): void;
  updateName(name: string): void;
  endSpan(endTime?: Timestamp): void;
}
