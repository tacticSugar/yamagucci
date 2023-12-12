import '@/styles/globals.css'
import '@/styles/tabsUnderline.css'
import '@/styles/table.css'
import 'react-tooltip/dist/react-tooltip.css'
import '@/styles/modalWrapper.scss'
import '@/styles/datePicker.css'

import { Montserrat } from '@next/font/google'
import { HydrationBoundary, QueryClient, QueryClientProvider } from '@tanstack/react-query'
import type { AppProps } from 'next/app'
import { FC, useState } from 'react'

import DynamicLayout from '@/src/components/DynamicLayout/DynamicLayout'
import ErrorBoundary from '@/src/lib/ErrorBoundary'

/** основной шрифт сайта */
const monserrat = Montserrat({
  subsets: ['cyrillic'],
  weight: ['400', '500', '700']
})

/** app */
const App: FC<AppProps> = ({ Component, pageProps }) => {
  /** queryClient */
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
            retry: false,
            staleTime: Infinity
          }
        }
      })
  )

  return (
    <QueryClientProvider client={queryClient}>
      <HydrationBoundary state={pageProps.dehydratedState}>
        <style
          // eslint-disable-next-line react/no-unknown-property
          global
          // eslint-disable-next-line react/no-unknown-property
          jsx
        >
          {`
        html {
          font-family: ${monserrat.style.fontFamily};
        }
      `}
        </style>
        <ErrorBoundary>
          <DynamicLayout>
            <main>
              <Component {...pageProps} />
            </main>
          </DynamicLayout>
        </ErrorBoundary>
        <div id='modals' />
      </HydrationBoundary>
    </QueryClientProvider>
  )
}

// ts-prune-ignore-next
export default App
