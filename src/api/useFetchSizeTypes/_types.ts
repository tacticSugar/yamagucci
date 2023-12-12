import { paths as schema } from '@/src/types/schema'

import { QUERY_KEY_FETCH_SIZE_TYPES } from './useFetchSizeTypes'

export type ResultRentTypes = schema['/api/admin/sizes']['get']['responses']['200']['content']['application/json']

/** тип ключа */
export type QueryKeyType = [typeof QUERY_KEY_FETCH_SIZE_TYPES,
  {
    /** mockVariant */
    mockVariant?:string
  }];

export type FetchSizeParams = {
  /** mockVariant */
  mockVariant?:string
  /** имя поля в форме */
  name?: 'rent' | 'size'
}
