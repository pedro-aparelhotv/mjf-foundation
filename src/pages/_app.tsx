import App from 'next/app'
import { ReactElement } from 'react'

import { UserPreferencesProvider } from 'contexts/UserPreferencesContext'

import { getDefaults } from 'services/prismic'

import BrushCanvas from 'components/BrushCanvas'
import Header from 'components/Header'

import 'styles/index.scss'

function MyApp({ Component, pageProps }): ReactElement {
  const { navigation, visitorsLog } = pageProps

  return (
    <>
      <UserPreferencesProvider>
        <Header
          content={{
            navigation,
            visitorsLog,
          }}
        />
        <BrushCanvas />
        <Component {...pageProps} />
      </UserPreferencesProvider>
    </>
  )
}

MyApp.getInitialProps = async ctx => {
  const appProps = await App.getInitialProps(ctx)

  const content = await getDefaults()

  return { ...appProps, pageProps: content }
}

export default MyApp
