import { AxiosRequestConfig } from 'axios';

export type HttpMethod = 'get' | 'post' | 'put' | 'delete';

export interface HttpGetRequestConfig<P = any, D = any>
  extends Omit<AxiosRequestConfig<D>, 'params'> {
  params?: P;
}

export interface HttpPostRequestConfig<D = any>
  extends Omit<AxiosRequestConfig<D>, 'params' | 'data'> {}

export interface HttpPutRequestConfig<D = any>
  extends Omit<AxiosRequestConfig<D>, 'params' | 'data'> {}

export interface HttpPatchRequestConfig<D = any>
  extends Omit<AxiosRequestConfig<D>, 'params' | 'data'> {}

export interface HttpDeleteRequestConfig<D = any>
  extends Omit<AxiosRequestConfig<D>, 'params' | 'data'> {}
