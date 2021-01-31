import Head from 'next/head'

interface SEOHeadProps
{
	title?: string
	description?: string
	image?: string
}

const SEOHead: React.FC<SEOHeadProps> = ({title, description, image}) =>
{
	const meta =
	{
		title: title ? title : 'STEM Guy | A blog about science and technology',
		description: description ? description : 'The STEM Guy blog is a place to read about science and technology.',
		image: image ? image : `https://api.stemguy.club/assets/thumbnail.png`,
		url: 'https://stemguy.club'
	}

	return (
		<Head>
			<title>{meta.title}</title>
			<meta name='title' content={meta.title} />
			<meta name='description' content={meta.description} />

			<meta property='og:type' content='article' />
			<meta property='og:url' content={meta.url} />
			<meta property='og:title' content={meta.title} />
			<meta property='og:description' content={meta.description} />
			<meta property='og:image' content={meta.image} />
			<meta property='og:site_name' content='STEM Guy' />

			<meta property='twitter:card' content='summary_large_image' />
			<meta property='twitter:url' content={meta.url} />
			<meta property='twitter:title' content={meta.title} />
			<meta property='twitter:description' content={meta.description} />
			<meta property='twitter:image' content={meta.image} />
			<meta name='twitter:site' content='@stemguyclub' />
			<meta name='twitter:creator' content='@stemguyclub' />
		</Head>
	)
}

export default SEOHead