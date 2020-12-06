import {AppProps} from 'next/app'
import {useRouter} from 'next/router'
import {useEffect} from 'react'
import {ThemeProvider} from 'styled-components'

import Sidebar from '../components/Sidebar'
import GlobalStyle from '../styles/global'
import theme from '../styles/theme'
import * as gtag from '../utils/gtag'

const MyApp: React.FC<AppProps> = ({Component, pageProps}) =>
{
	const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: URL) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <ThemeProvider theme={theme}>
      <Sidebar />
      <Component {...pageProps} />
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default MyApp