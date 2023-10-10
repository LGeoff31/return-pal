import { Toaster } from '@/components/ui/toaster'
import { Nunito } from 'next/font/google'
import { type ReactElement, type ReactNode } from 'react'
import { type NextPage } from 'next'
import { type AppProps } from 'next/app'
import { type AppType } from 'next/dist/shared/lib/utils'
import { ApolloProvider } from '@apollo/client'
import { apolloClient } from '@/lib/graphql'

import Head from 'next/head'
import Header from '@/components/Header/Header'
import '@/styles/globals.css'

const nunito = Nunito({
  weight: ['400', '500', '700', '900'],
  subsets: ['latin'],
})

export type NextPageWithLayout<P = object, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

const MyApp: AppType = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page)
  const layout = getLayout(<Component {...pageProps} />)
  return (
    <ApolloProvider client={apolloClient}>
      <main className={nunito.className}>
        <Head>
          <title>Reture-Pal</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header></Header>
        {layout}
        <Toaster />
      </main>
    </ApolloProvider>
  )
}

export default MyApp
