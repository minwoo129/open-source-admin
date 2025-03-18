import Axios from 'axios';
import {
  HttpDeleteRequestConfig,
  HttpGetRequestConfig,
  HttpPatchRequestConfig,
  HttpPostRequestConfig,
  HttpPutRequestConfig,
} from './types';

const axios = Axios.create({});

export const http = {
  addHeaderProperty: (key: string, value: string) => {
    axios.defaults.headers.common[key] = value;
  },
  deleteHeaderProperty: (key: string) => {
    delete axios.defaults.headers.common[key];
  },
  get: async <Response, Params = any, Data = any>({
    url,
    options,
  }: {
    url: string;
    options: HttpGetRequestConfig<Params, Data>;
  }) => {
    try {
      return await axios.get<Response>(url, options);
    } catch (e) {
      throw e;
    }
  },
  post: async <Request = any, Response = unknown>({
    url,
    data,
    config = {},
  }: {
    url: string;
    data?: Request;
    config?: HttpPostRequestConfig<Request>;
  }) => {
    try {
      return await axios.post<Response>(url, data, { ...config });
    } catch (e) {
      throw e;
    }
  },
  put: async <Request = any, Response = unknown>({
    url,
    data,
    config = {},
  }: {
    url: string;
    data?: Request;
    config?: HttpPutRequestConfig<Request>;
  }) => {
    try {
      return await axios.put<Response>(url, data, { ...config });
    } catch (e) {
      throw e;
    }
  },
  patch: async <Request = any, Response = unknown>({
    url,
    data,
    config = {},
  }: {
    url: string;
    data?: Request;
    config?: HttpPatchRequestConfig<Request>;
  }) => {
    try {
      return await axios.patch<Response>(url, data, { ...config });
    } catch (e) {
      throw e;
    }
  },
  delete: async <Request = any, Response = any>({
    url,
    config = {},
  }: {
    url: string;
    config?: HttpDeleteRequestConfig<Request>;
  }) => {
    try {
      return await axios.delete<Response>(url, { ...config });
    } catch (e) {
      throw e;
    }
  },
};
