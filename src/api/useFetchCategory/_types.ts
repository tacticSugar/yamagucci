import { paths as schema } from '@/src/types/schema'

import { QUERY_KEY_FETCH_CATEGORY } from './useFetchCategory'

export type FetchCategoryParams = {
  /** id продукта */
  categoryId: string
}

export type FetchCategoryQueryKeyType = [typeof QUERY_KEY_FETCH_CATEGORY, FetchCategoryParams];

export type FetchCategoryOriginalResult = schema['/api/admin/categories/{category}']['get']['responses']['200']['content']['application/json']
