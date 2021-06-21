interface ISuccessResponse {
  success: boolean;
  data: any;
  extra?: object | null;
}

export function success<T>(params: T, extra: any = null): ISuccessResponse {
  return {
    success: true,
    data: params,
    extra
  }
}
