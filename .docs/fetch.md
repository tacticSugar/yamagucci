# Загрузка данных

## Axios
Загрузку данных производим с помощью axios.
Данная библиотека работает как fetch, но заметно упрощает жизнь.

Для каждой апи у нас заведены отдельные instance в axios:
* **axiosAPI** - базовый инстанс, используется в большинстве случаем, подходит для работы с апи
* **axiosBearer** - методы для работы с личным кабинетом, используют авторизацию

## React-query
Для загрузки данных мы используем библиотеку [react-query](https://tanstack.com/query/v5/docs/react/overview)
Все хуки для загрузки данных помещаются в директорию `src/api`.
Каждый хук должен быть максимально расширяем и переиспользуем.

## Transformresponse
Вся бизнес-логика в идеале должна находиться в фетче.
Например, нам нужно загрузить данные и немного изменить их.
Для того чтобы не нагружать компонент, все процедуры по изменению
данных происходят внутри фетча с помощью transformResponse.
Таким образом наши данные загружаются, изменяются,
сохраняются в сторе react-query.
Как итог мы можем в любом момент достать из react-query уже измененные данные

## На практике
Разберем создание конкретного фетча на примере хука,
который загружает контент новости:

- Создаем **базовый хук** useFetchBanners
- **функцию загрузки данных** getBanners
- функцию **трансформирования данных** transformResponse
- выносим **ключ хука в переменную** QUERY_KEY_FETCH_BANNERS,
- Описываем **типы**:
  - **принимаемых параметров** FetchBannersParams
  - **возвращаемых данных** FetchBannersResult
  - **тип ключа** FetchBannersQueryKeyType

```tsx

import { useQuery, UseQueryResult } from '@tanstack/react-query'

import { axiosBearerGet } from '@/src/api/axiosInstances'
import { BANNERS_API, ENV_IS_STORYBOOK } from '@/src/constants/constants'
import parseJSON from '@/src/lib/parseJSON'

import { FetchBannersParams, QueryKeyType, ResultBannersTypes } from './_types'

/** ключ под которым записываем */
export const QUERY_KEY_FETCH_BANNERS = 'banners'

/** функция запроса продуктов */
export const getBanners = async ({ mockVariant }: FetchBannersParams): Promise<ResultBannersTypes> => {
  /** дата продуктов */
  const { data } = await axiosBearerGet.get<ResultBannersTypes>(BANNERS_API,
    {
      params: {
        ...Object.assign(
          {},
          ENV_IS_STORYBOOK && { mockVariant }
        )
      },
      transformResponse: (response) => {
        /** распаршенные данные */
        const parsedData = parseJSON(response)
        /** текущие баннеры */
        const currentBanners = parsedData?.data?.filter((banner) => banner?.status === 1)
        /** архивные баннеры */
        const archivedBanners = parsedData?.data?.filter((banner) => banner?.status === 0)

        return {
          archivedBanners,
          currentBanners
        }
      }
    }
  )

  return data
}

/** хук запроса списка продуктов */
const useFetchBanners = ({ mockVariant }: FetchBannersParams): UseQueryResult<ResultBannersTypes, Error> => useQuery<ResultBannersTypes, Error, ResultBannersTypes, QueryKeyType>({
  queryFn: () => getBanners({ mockVariant }),
  queryKey: [QUERY_KEY_FETCH_BANNERS, { mockVariant }]
})

export default useFetchBanners
```


Далее [тестируем наш фетч](./fetchTests.md)
