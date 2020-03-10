import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { get } from 'lodash';
import qs from 'qs';

export const baseURL = '/';

const paramsSerializer = (params: { [key: string]: any }) =>
  qs.stringify(params, { arrayFormat: 'repeat' });

const instanceConfig: { [prop: string]: any } = {
  baseURL,
  paramsSerializer,
  headers: {
    post: { 'Content-Type': 'application/json' },
    put: { 'Content-Type': 'application/json' },
  },
};

const clientInstance = axios.create(instanceConfig);

const checkStatus = (response: AxiosResponse) => {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.statusText);
  throw error;
};

async function request(options: AxiosRequestConfig) {
  try {
    const response = await clientInstance(options);
    checkStatus(response);
    const data = response;

    return data;
  } catch (error) {
    // if exist auth
    // if (get(error, 'request.status') === 401) {
    //   localStorage.removeItem('token');
    //   localStorage.removeItem('token_type');
    // }
    const errorMessage = get(error, 'response.statusText', error.message);
    const userMessage = get(error, 'response.data.userMessage', error.message);
    throw new Error(userMessage || errorMessage);
  }
}

export default request;
