export interface Error {
  errorStatus: number | string
  errorMessage: string
}

export interface Options {
  method?: string
  url: string
  header?: any
  queryParams?: object
  data?: any
  responseType?: any,
  handleResponse?: boolean,
}

interface ResponceData {
  result?: boolean
  status?: number | string
  statusCode: number | string
}
export interface Responce {
  data: ResponceData
  headers?: any
  status?: any
}

export interface PopTips {
  title: string
  cls: string
  arrowCls?: string
  content: string
  stepProgress?: string
  btnTxt: string,
  cb?: () => any
}
