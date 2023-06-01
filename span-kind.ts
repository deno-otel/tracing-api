/**
 * A SpanKind is described at https://opentelemetry.io/docs/specs/otel/trace/api/#spankind
 */
export enum SpanKind {
  /**
   * Default value. Indicates that the span represents an internal operation within an application, as opposed to an operations with remote parents or children.
   */
  INTERNAL = 0,
  /**
   * Indicates that the span covers server-side handling of a synchronous RPC or other remote request. This span is often the child of a remote CLIENT span that was expected to wait for a response.
   */
  SERVER = 1,
  /**
   * Indicates that the span describes a request to some remote service. This span is usually the parent of a remote SERVER span and does not end until the response is received.
   */
  CLIENT = 2,
  /**
   * Indicates that the span describes the initiators of an asynchronous request. This parent span will often end before the corresponding child CONSUMER span, possibly even before the child span starts. In messaging scenarios with batching, tracing individual messages requires a new PRODUCER span per message to be created.
   */
  PRODUCER = 3,
  /**
   * Indicates that the span describes a child of an asynchronous PRODUCER request.
   */
  CONSUMER = 4,
}
