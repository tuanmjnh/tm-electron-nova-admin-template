import { $t } from '@/utils'
/** Aixos configuration for the default instance */
export const DEFAULT_ALOVA_OPTIONS = {
  // Request timeout, default 15 seconds
  timeout: 15 * 1000,
}

/** Backend field configuration for the default instance */
export const DEFAULT_BACKEND_OPTIONS = {
  codeKey: 'code',
  dataKey: 'data',
  msgKey: 'message',
  successCode: 200,
}

/** Request failed various status errors */
export const ERROR_STATUS = {
  default: $t('http.defaultTip'),
  400: $t('http.400'),
  401: $t('http.401'),
  403: $t('http.403'),
  404: $t('http.404'),
  405: $t('http.405'),
  408: $t('http.408'),
  500: $t('http.500'),
  501: $t('http.501'),
  502: $t('http.502'),
  503: $t('http.503'),
  504: $t('http.504'),
  505: $t('http.505'),
}

/** No error code */
export const ERROR_NO_TIP_STATUS = [10000]
