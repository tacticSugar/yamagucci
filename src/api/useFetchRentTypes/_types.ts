import { paths as schema } from '@/src/types/schema'

import { QUERY_KEY_FETCH_RENT_TYPES } from './useFetchRentTypes'

export type FetchRentTypesOriginalResult = schema['/api/admin/rent_types']['get']['responses']['200']['content']['application/json']

/** тип ключа */
export type FetchRentTypesQueryKeyType = [
  typeof QUERY_KEY_FETCH_RENT_TYPES,
  {
    /** mockVariant */
    mockVariant?:string
  }
  ];

export type FetchRentTypesParams = {
  /** mockVariant */
  mockVariant?:string
}
