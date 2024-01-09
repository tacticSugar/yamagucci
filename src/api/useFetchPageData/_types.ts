import { paths as schema } from '@/src/types/schema'

import { QUERY_KEY_FETCH_PAGE_DATA } from './useFetchPageData'

export type FetchPageDataParams = {
  /** слаг страницы */
  slug: string[] | string
}

export type FetchPageDataOriginalResult = schema['/api/shop/page_data']['post']['responses']['200']['content']['application/json']

/** тип ключа */
export type FetchPageDataQueryKeyType = [typeof QUERY_KEY_FETCH_PAGE_DATA, FetchPageDataParams];
