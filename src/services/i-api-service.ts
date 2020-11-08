import { Method, ResponseType } from "axios";

export interface IApiService {
  get<T>(requestParams: IRequestMethodParams<undefined>): Promise<T>;
  post<P, T>(requestParams: IRequestMethodParams<P>): Promise<T>;
  put<P, T>(requestParams: IRequestMethodParams<P>): Promise<T>;
  patch<P, T>(requestParams: IRequestMethodParams<P>): Promise<T>;
  delete<T>(requestParams: IRequestMethodParams<undefined>): Promise<T>;
};

export interface IRequestMethodParams<P> {
  url: string;
  params?: object;
  data?: P;
  headers?: object;
  responseType?: ResponseType;
}

// {
//   "Content-Type": "application/json",
//   Accept:  "application/json",
//   "Authorization": "Bearer " + this.token,
// }

export interface IRequestParamsWithMethod<P> extends IRequestMethodParams<P> {
  method: Method;
}