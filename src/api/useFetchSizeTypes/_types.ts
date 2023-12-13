import { paths as schema } from '@/src/types/schema'

import { QUERY_KEY_FETCH_SIZE_TYPES } from './useFetchSizeTypes'

export type FetchSizeTypesOriginalResult = schema['/api/admin/sizes']['get']['responses']['200']['content']['application/json']

/** тип ключа */
export type FetchSizeTypesQueryKeyType = [typeof QUERY_KEY_FETCH_SIZE_TYPES,
  {
    /** mockVariant */
    mockVariant?:string
  }];

export type FetchSizeTypesParams = {
  /** mockVariant */
  mockVariant?:string
  /** имя поля в форме */
  name?: 'rent' | 'size'
}
