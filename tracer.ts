import { AttributeCollection, ContextAPI } from "./deps.ts";
import { SpanKind } from "./span-kind.ts";
import { SpanLink } from "./span-link.ts";
import { SpanAPI, SpanAttributes } from "./span-api.ts";
import { Timestamp } from "./types.ts";

export interface SpanCreationParams {
  kind?: SpanKind;
  attributes?: SpanAttributes;
  links?: SpanLink[];
  startTime?: Timestamp;
}

export interface TracerOptions {
  version?: string;
  schema_url?: string;
  attributes?: AttributeCollection;
}

export interface TracerAPI {
  readonly name: string;
  createSpan(spanName: string, parentContext: ContextAPI | null): SpanAPI;
}
