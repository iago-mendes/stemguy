import React from 'react'
import Document, {DocumentInitialProps, DocumentContext, Html, Head, Main, NextScript} from 'next/document'
import {ServerStyleSheet} from 'styled-components'

import {gaId} from '../utils/gtag'
import {adClient} from '../utils/gAd'

export default class MyDocument extends Document
{
	static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps>
	{
		const sheet = new ServerStyleSheet()
		const originalRenderPage = ctx.renderPage
		
		try
		{
			ctx.renderPage = () => originalRenderPage(
			{
				enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
			})
		
			const initialProps = await Document.getInitialProps(ctx)
			return {...initialProps, styles: (
					<>
						{initialProps.styles}
						{sheet.getStyleElement()}
					</>
				)}
		}
		finally
		{
			sheet.seal()
		}
	}
			
	render(): JSX.Element
	{
		return (
			<Html lang="en">
				<Head>
					<link rel="icon" href="/favicon.svg" />
					<link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,700;1,400&family=Ubuntu:wght@400;700&family=Aladin&display=swap" rel="stylesheet" />

					<meta charSet="utf-8" />
					<meta name="robots" content="index, follow" />

					{/* Global Site Tag (gtag.js) - Google Analytics */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${gaId}', {
                page_path: window.location.pathname,
              });
          `
            }}
          />

					{/* Google Adsense */}
					<script
						data-ad-client={adClient}
						async
						src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
			)
	}
}