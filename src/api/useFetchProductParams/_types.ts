import { paths as schema } from '@/src/types/schema'

import { QUERY_KEY_FETCH_PRODUCT_PARAMS } from './useFetchProductParams'

export type FetchProductParamsOriginalResult = schema['/api/admin/product_params']['get']['responses']['200']['content']['application/json']

type Filter = FetchProductParamsOriginalResult['data'][number]['filter']
type Parameter = FetchProductParamsOriginalResult['data'][number]['parameter']
type Value = FetchProductParamsOriginalResult['data'][number]['value']

export type FetchProductParamsResult = {
  /** фильтры */
  filters: Filter[]
  /** параметры */
  parameters: Parameter[]
  /** значения */
  values: Value[]
}
/** тип ключа */
export type FetchProductParamsQueryKeyType = [typeof QUERY_KEY_FETCH_PRODUCT_PARAMS];
