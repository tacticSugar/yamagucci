import { Head, Html, Main, NextScript } from 'next/document'
import { FC } from 'react'

/** документ */
const Document: FC = () => (
  <Html lang='ru'>
    <Head>
      <meta
        content='nositelinkssearchbox'
        key='sitelinks'
        name='google'
      />
      <meta
        content='notranslate'
        key='notranslate'
        name='google'
      />
      <meta
        content='noindex,nofollow'
        name='googlebot'
      />
      <meta
        content='noindex,nofollow'
        name='robots'
      />
    </Head>
    <body >
      <Main />
      <NextScript />
    </body>
  </Html>
)

// ts-prune-ignore-next
export default Document
