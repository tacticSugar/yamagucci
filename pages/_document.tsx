import { Head, Html, Main, NextScript } from 'next/document'
import { FC } from 'react'

/** документ */
const Document: FC = () => (
  <Html lang='ru'>
    <Head />
    <body >
      <Main />
      <NextScript />
    </body>
  </Html>
)

// ts-prune-ignore-next
export default Document
