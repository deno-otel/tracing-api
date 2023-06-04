import { Attributes, ContextAPI } from "./deps.ts";
import { SpanAPI } from "./span-api.ts";

export interface TracerOptions {
  version?: string;
  schema_url?: string;
  attributes?: Attributes;
}

export interface TracerAPI {
  readonly name: string;
  createSpan(spanName: string, parentContext: ContextAPI | null): SpanAPI;
}
