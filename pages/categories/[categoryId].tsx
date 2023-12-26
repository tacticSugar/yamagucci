import { memo } from 'react'

import PublicCategoryPage from '@/src/components/pages/PublicCategoryPage/PublicCategoryPage'

export const getStaticPaths = async (): Promise<any> => ({
  fallback: 'blocking',
  paths: []
})
// ts-prune-ignore-next
export default memo(PublicCategoryPage)
