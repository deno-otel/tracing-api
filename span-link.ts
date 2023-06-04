import { Attributes } from "./deps.ts";
import { SpanContextAPI } from "./span-context.ts";

export class LinkAttributes extends Attributes {}

/**
 * This is the interface for a Span Link, as described at https://opentelemetry.io/docs/specs/otel/trace/api/#specifying-links and https://opentelemetry.io/docs/specs/otel/overview/#links-between-spans
 */
export type SpanLink = {
  spanContext: SpanContextAPI;
  attributes: LinkAttributes;
};
