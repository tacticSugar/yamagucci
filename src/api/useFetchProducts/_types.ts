import { paths as schema } from '@/src/types/schema'

import { QUERY_KEY_FETCH_PRODUCTS } from './useFetchProducts'

export type FetchProductsOriginalResult = schema['/api/admin/products/schema']['get']['responses']['200']['content']['application/json']

/** тип ключа */
export type FetchProductsQueryKeyType = [typeof QUERY_KEY_FETCH_PRODUCTS];
