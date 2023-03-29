import axios, {AxiosRequestConfig, Method} from 'axios';

const baseApi =
  (method: Method) =>
  async <R = unknown>(
    path: string,
    {headers, ...config}: AxiosRequestConfig = {},
  ) => {
    return await axios<R>(`${import.meta.env.MANGO_URL}/${path}`, {
      ...config,
      headers: {...headers, 'Access-Control-Allow-Origin': '*'},
      method,
    });
  };

export const get = baseApi('GET');
export const post = baseApi('POST');
export const patch = baseApi('PATCH');
export const delet = baseApi('DELETE');
