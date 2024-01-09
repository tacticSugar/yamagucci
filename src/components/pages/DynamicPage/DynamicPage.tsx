import { useRouter } from 'next/router'
import type { FC } from 'react'

import useFetchPageData from '@/src/api/useFetchPageData/useFetchPageData'
import PublicProductPage from '@/src/components/pages/PublicProductPage/PublicProductPage'

/** динамическая страница */
const DynamicPage: FC = () => {
  /** роутер */
  const { query: { slug } } = useRouter()

  /** получение данных */
  const { data } = useFetchPageData({ slug })

  /** рендер страницы */
  const renderPage = () => {
    switch (data?.data?.page_type) {
      case 'product':
        return <PublicProductPage data={data?.data} />
      default:
        return '<NotFoundPage />'
    }
  }

  return renderPage()
}

export default DynamicPage
