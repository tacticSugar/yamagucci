import { paths as schema } from '@/src/types/schema'

import { QUERY_KEY_FETCH_PRODUCT } from './useFetchProduct'

export type FetchProductParams = {
  /** id продукта */
  productId: string
}

export type FetchProductOriginalResult = schema['/api/admin/products/{product}']['get']['responses']['200']['content']['application/json']

/** тип ключа */
export type FetchProductQueryKeyType = [typeof QUERY_KEY_FETCH_PRODUCT, FetchProductParams];
