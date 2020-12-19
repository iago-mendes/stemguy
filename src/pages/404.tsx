import Head from 'next/head'

import Container from '../styles/pages/404'

const NotFound: React.FC = () =>
{
	return (
		<Container className='page'>
			<Head>
				<title>404: not found</title>
			</Head>

			<h1>404: not found</h1>
			<h2>Sorry... This page was not found!</h2>
		</Container>
	)
}

export default NotFound