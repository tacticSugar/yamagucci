import { useQuery, UseQueryResult } from '@tanstack/react-query'

import { axiosBearerGet } from '@/src/api/axiosInstances'
import { CATEGORIES_SCHEMA_API } from '@/src/constants/constants'

import { FetchCategoriesOriginalResult, FetchCategoriesQueryKeyType } from './_types'

/** ключ под которым записываем */
export const QUERY_KEY_FETCH_CATEGORIES = 'categories'

/** функция запроса продуктов */
export const getCategories = async (): Promise<FetchCategoriesOriginalResult> => {
  /** дата продуктов */
  const { data } = await axiosBearerGet.get<FetchCategoriesOriginalResult>(CATEGORIES_SCHEMA_API)

  return data
}

/** хук запроса списка продуктов */
const useFetchCategories = (): UseQueryResult<FetchCategoriesOriginalResult, Error> => useQuery<FetchCategoriesOriginalResult, Error, FetchCategoriesOriginalResult, FetchCategoriesQueryKeyType>({
  queryFn: getCategories,
  queryKey: [QUERY_KEY_FETCH_CATEGORIES]
})

export default useFetchCategories
