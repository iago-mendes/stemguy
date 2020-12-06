import React from 'react'

import { DefaultSeo } from 'next-seo'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import Sidebar from '../components/Sidebar'

import GlobalStyle from '../styles/global'
import theme from '../styles/theme'

import SEO from '../../next-seo.config'


const MyApp: React.FC<AppProps> = ({ Component, pageProps }) =>
{
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Sidebar />
        <DefaultSeo {...SEO} />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp