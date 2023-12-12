import { paths as schema } from '@/src/types/schema'

import { QUERY_KEY_FETCH_BANNERS } from './useFetchBanners'

type FetchBannersOriginalResult = schema['/api/admin/banners']['get']['responses']['200']['content']['application/json']

export type Banner = FetchBannersOriginalResult['data'][number]

export type FetchBannersResult = {
  /** архивные баннеры */
  archivedBanners: Banner[]
  /** текущие баннеры */
  currentBanners: Banner[]
}

/** тип ключа */
export type FetchBannersQueryKeyType = [
  typeof QUERY_KEY_FETCH_BANNERS,
  {
    /** mockVariant */
    mockVariant?:string
  }
  ];

export type FetchBannersParams = {
  /** mockVariant */
  mockVariant?:string
}
