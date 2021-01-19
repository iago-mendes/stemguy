import {AppProps} from 'next/app'
import {useRouter} from 'next/router'
import {useEffect} from 'react'
import {ThemeProvider} from 'styled-components'

import Menu from '../components/Menu'
import Footer from '../components/Footer'
import GlobalStyle from '../styles/global'
import theme from '../styles/theme'
import * as gtag from '../utils/gtag'

const MyApp: React.FC<AppProps> = ({Component, pageProps}) =>
{
	const Router = useRouter()

  useEffect(() => {
		const handleRouteChange = (url: URL) =>
		{
      gtag.pageview(url)
		}
		
    Router.events.on('routeChangeComplete', handleRouteChange)
    return () => Router.events.off('routeChangeComplete', handleRouteChange)
	}, [Router.events])
	
	useEffect(() =>
	{
		window.scrollTo(0,0)
	}, [Router.pathname])

  return (
    <ThemeProvider theme={theme}>
      <Menu />
      <Component {...pageProps} />
			<Footer />
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default MyApp