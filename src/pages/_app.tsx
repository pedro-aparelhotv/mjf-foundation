import { AppProps } from 'next/app'
import { ReactElement } from 'react'

import { UserPreferencesProvider } from 'contexts/UserPreferencesContext'

import BrushCanvas from 'components/BrushCanvas'
import Header from 'components/Header'

import 'styles/index.scss'

function MyApp({ Component, pageProps }: AppProps): ReactElement {
  return (
    <>
      <UserPreferencesProvider>
        <Header />
        <BrushCanvas />
        <Component {...pageProps} />
      </UserPreferencesProvider>
    </>
  )
}

export default MyApp
