import { QUERY_KEY_FETCH_OPTIONS } from './useFetchOptions'

export type FetchOptionsParams = {
  /** на какие опции делать запрос */
  optionsApi: string
}

/** тип ключа */
export type FetchOptionsQueryKeyType = [typeof QUERY_KEY_FETCH_OPTIONS, FetchOptionsParams];
