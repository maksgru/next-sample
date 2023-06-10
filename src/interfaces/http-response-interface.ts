export interface IHttpResponse<T = unknown> {
  readonly meta: { readonly count: number; readonly total: number; };
  readonly data: T;
}
