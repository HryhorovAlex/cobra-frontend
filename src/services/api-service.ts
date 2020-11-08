import Axios, {
  AxiosInstance,
  AxiosResponse,
} from "axios";
import { IApiService, IRequestMethodParams, IRequestParamsWithMethod } from "./i-api-service";



export class ApiService implements IApiService {
  protected readonly axios: AxiosInstance;
  protected readonly push: Function;
  protected readonly token: string;

  constructor(baseURL: string) {
    this.axios = Axios.create({ baseURL });
    this.push = () => {};
    this.token = '';
    this.axios.interceptors.response.use((response) => {
      return response
    },
    (error) => {
      const {response: {data: {errors}, status}} = error;
      if(status === 401) {
        this.push('/')
      }
      return Promise.reject({errors, status})
    })
  }

  async get<T>(requestParams: IRequestMethodParams<undefined>): Promise<T> {
    return this.request<undefined, T>({ method: "get", ...requestParams });
  }

  async post<P, T>(requestParams: IRequestMethodParams<P>): Promise<T> {
    return this.request<P, T>({ method: "post", ...requestParams });
  }

  async put<P, T>(requestParams: IRequestMethodParams<P>): Promise<T> {
    return this.request<P, T>({ method: "put", ...requestParams });
  }

  async patch<P, T>(requestParams: IRequestMethodParams<P>): Promise<T> {
    return this.request<P, T>({ method: "patch", ...requestParams });
  }

  async delete<T>(requestParams: IRequestMethodParams<undefined>): Promise<T> {
    return this.request<undefined, T>({ method: "delete", ...requestParams });
  }

  private async request<P, T>(
    requestParams: IRequestParamsWithMethod<P>
  ): Promise<T> {
    const { 
      data,
      headers = {
        "Content-Type": "application/json",
        Accept:  "application/json",
        "Authorization": "Bearer " + this.token,
      },
      method,
      params,
      url,
      responseType
    } = requestParams;
    const response: AxiosResponse = await this.axios.request({
      data,
      headers,
      method,
      params,
      url,
      responseType,
    });
    // this.axios.interceptors.request.eject(interceptor);
    return response.data as T;
  }
}

export const apiService = new ApiService('192.168.0.107:3001');
