/**
 * This code represents the status of a span
 */
export enum StatusCode {
  /**
   * The default status.
   */
  UNSET = 0,
  /**
   * The operation has been validated by an Application developer or Operator to have completed successfully.
   */
  OK = 1,
  /**
   * The operation contains an error.
   */
  ERROR = 2,
}

/**
 * This represents the status of a Span as described at https://opentelemetry.io/docs/specs/otel/trace/api/#set-status
 */
export type SpanStatus = {
  code: StatusCode;
  description?: string;
};
