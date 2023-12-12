import { paths as schema } from '@/src/types/schema'

import { QUERY_KEY_FETCH_RENT_TYPES } from './useFetchRentTypes'

export type ResultRentTypes = schema['/api/admin/rent_types']['get']['responses']['200']['content']['application/json']

/** тип ключа */
export type QueryKeyType = [
  typeof QUERY_KEY_FETCH_RENT_TYPES,
  {
    /** mockVariant */
    mockVariant?:string
  }
  ];

export type FetchRentParams = {
  /** mockVariant */
  mockVariant?:string
  /** имя поля в форме */
  name?: 'rent' | 'size'
}
