import { paths as schema } from '@/src/types/schema'

import { QUERY_KEY_FETCH_CATEGORIES } from './useFetchCategories'

export type FetchCategoriesOriginalResult = schema['/api/admin/categories/schema']['get']['responses']['200']['content']['application/json']

export type FetchCategoriesQueryKeyType = [typeof QUERY_KEY_FETCH_CATEGORIES];
