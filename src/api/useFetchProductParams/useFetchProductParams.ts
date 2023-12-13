import { useQuery, UseQueryResult } from '@tanstack/react-query'

import { axiosBearerGet } from '@/src/api/axiosInstances'
import { PRODUCT_PARAMS_API } from '@/src/constants/constants'
import parseJSON from '@/src/lib/parseJSON'

import { FetchProductParamsQueryKeyType, FetchProductParamsResult } from './_types'

/** ключ под которым записываем */
export const QUERY_KEY_FETCH_PRODUCT_PARAMS = 'productParams'

/** функция запроса продуктов */
export const getProductParams = async (): Promise<FetchProductParamsResult> => {
  /** дата продуктов */
  const { data } = await axiosBearerGet.get<FetchProductParamsResult>(PRODUCT_PARAMS_API, {
    transformResponse: (response) => {
      /** распаршенные данные */
      const parsedData = parseJSON(response)
      /** значения */
      const values = parsedData?.data?.map((option) => ({ name: option?.value }))
      /** параметры */
      const parameters = parsedData?.data?.map((option) => ({ name: option?.parameter }))
      /** фильтры */
      const filters = parsedData?.data?.map((option) => ({ name: option?.filter }))

      return {
        filters,
        parameters,
        values
      }
    }
  })

  return data
}

/** хук запроса списка продуктов */
const useFetchProductParams = (): UseQueryResult<FetchProductParamsResult, Error> => useQuery<FetchProductParamsResult, Error, FetchProductParamsResult, FetchProductParamsQueryKeyType>({
  queryFn: getProductParams,
  queryKey: [QUERY_KEY_FETCH_PRODUCT_PARAMS]
})

export default useFetchProductParams
