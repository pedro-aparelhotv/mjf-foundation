import { AppProps } from 'next/app'
import { ReactElement } from 'react'

import { UserPreferencesProvider } from 'contexts/UserPreferencesContext'

import 'styles/index.scss'

function MyApp({ Component, pageProps }: AppProps): ReactElement {
  return (
    <>
      <UserPreferencesProvider>
        <Component {...pageProps} />
      </UserPreferencesProvider>
    </>
  )
}

export default MyApp
