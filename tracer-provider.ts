import { Tracer, TracerOptions } from "./tracer.ts";

/**
 * The interface for a TracerProvider is quite simple; the complexity comes in the implementation, which
 * will be found in the Trace SDK
 */
export interface TracerProviderAPI {
  getTracer(name: string, options?: TracerOptions): Tracer;
}
