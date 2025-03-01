import type { AppProps } from 'next/app'
import type { LayoutProps } from '@vercel/examples-ui/layout'

import { getLayout } from '@vercel/examples-ui'

import '@vercel/examples-ui/globals.css'

function App({ Component, pageProps }: AppProps) {
  const Layout = getLayout<LayoutProps>(Component)

  return (
    <Layout title="Rewrite on the edge" path="edge-functions/rewrites-upstash">
      <Component {...pageProps} />
    </Layout>
  )
}

export default App
