import qs from 'qs';
import axios from 'axios';

export function get(url, params = {}) {
  return request('get', url, params);
}

export function post(url, data = {}) {
  return request('post', url, data);
}

async function request(method, url, data = {}) {
  let headers = {
    Accept: 'application/json',
  };
  
  let config = {
    baseURL: 'http://www.omdbapi.com/?apikey=cc118d30',
    url,
    method,
    timeout: 9000,
    crossDomain: true,
    headers,
  };

  if (method.toLowerCase() === 'get') {
    config.params = data;
    config.paramsSerializer = params =>
      qs.stringify(params, {arrayFormat: 'brackets'});
  }

  if (method.toLowerCase() === 'post') {
    config.data = data;
  }

  return axios(config).then(
    response => {
      return response;
    },
    error => {
      return Promise.reject(error);
    },
  );
}
