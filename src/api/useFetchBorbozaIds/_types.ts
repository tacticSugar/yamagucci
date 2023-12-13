import { paths as schema } from '@/src/types/schema'

import { QUERY_KEY_FETCH_BORBOZA_IDS } from './useFetchBorbozaIds'

export type FetchBorbozaIdsOriginalResult = schema['/api/admin/borboza_products/schema']['get']['responses']['200']['content']['application/json']

export type FetchBorbozaIdsQueryKeyType = [typeof QUERY_KEY_FETCH_BORBOZA_IDS];
