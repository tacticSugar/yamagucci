import { useQuery, UseQueryResult } from '@tanstack/react-query'

import { axiosBearerPost } from '@/src/api/axiosInstances'
import { PAGE_DATA_API } from '@/src/constants/constants'

import { FetchPageDataOriginalResult, FetchPageDataParams, FetchPageDataQueryKeyType } from './_types'

/** ключ под которым записываем */
export const QUERY_KEY_FETCH_PAGE_DATA = 'pageData'

/** функция запроса продуктов */
export const getPageData = async ({ slug }: FetchPageDataParams): Promise<FetchPageDataOriginalResult> => {
  /** дата продуктов */
  const { data } = await axiosBearerPost.post<FetchPageDataOriginalResult>(PAGE_DATA_API,
    {
      urn: slug?.length === 1 ? slug[0] : `${slug[0]}/${slug[1]}`
    })

  return data
}

/** хук запроса списка продуктов */
const useFetchPageData = ({ slug }: FetchPageDataParams): UseQueryResult<FetchPageDataOriginalResult, Error> => useQuery<FetchPageDataOriginalResult, Error, FetchPageDataOriginalResult, FetchPageDataQueryKeyType>({
  queryFn: () => getPageData({ slug }),
  queryKey: [QUERY_KEY_FETCH_PAGE_DATA, { slug }]
})

export default useFetchPageData
