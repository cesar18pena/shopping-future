interface IErrorResponse {
  success: boolean;
  error: any;
  extra?: object | null;
}

export function error<T>(params: T, extra: any = null): IErrorResponse {
  return {
    success: false,
    error: params,
    extra
  }
}
