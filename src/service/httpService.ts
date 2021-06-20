import axios from 'axios'
import HttpInspectors from './httpInspectors'
import {Message} from 'element-ui'
import qs from 'qs'

import { Error, Options } from './interface'

HttpInspectors.setCallback('httpError', (error: any) => {
  return (Message as any).error({ type: 'error', content: error.errorMessage })
})

const http = (
  method: string | undefined,
  url: string,
  queryParams: object | undefined,
  data: object | undefined,
  options: Options
) => {
  const headers = HttpInspectors.setConfig(options)
  const obj: any = {
    headers,
    method,
    url,
    params: queryParams,
    data,
    paramsSerializer: (params: any) => {
      return qs.stringify(params, { indices: false })
    },
    responseType: options.responseType || undefined
  }
  if (options && options.responseType) {
    obj.responseType = options.responseType
  }
  const promise = axios(obj)
  return new Promise((resolve, reject) => {
    return promise.then(
      (response: any) => {
        options.handleResponse ?
          HttpInspectors.handleResponseV2(response, resolve, reject) :
            HttpInspectors.handleResponse(response, resolve, reject)
      },
      (error: any) => {
        HttpInspectors.handleError(error, reject)
      }
    )
  })
}

const httpService = {
  get(options: Options) {
    return http('get', options.url, options.queryParams, options.data, options)
  },
  post(options: Options) {
    return http('post', options.url, options.queryParams, options.data, options)
  },
  put(options: Options) {
    return http('put', options.url, options.queryParams, options.data, options)
  },
  delete(options: Options) {
    return http(
      'delete',
      options.url,
      options.queryParams,
      options.data,
      options
    )
  },
  create(options: Options) {
    return http(
      options.method,
      options.url,
      options.queryParams,
      options.data,
      options
    )
  }
}

export default httpService
