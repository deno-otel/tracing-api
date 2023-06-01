import { AttributeCollection } from "./deps.ts";
import { Timestamp } from "./types.ts";

export class EventAttributes extends AttributeCollection {}

/**
 * This is the interface of a SpanEvent as described at https://opentelemetry.io/docs/specs/otel/trace/api/#add-events
 */
export interface SpanEvent {
  name: string;
  eventTime: Timestamp;
  attributes: EventAttributes;
}
