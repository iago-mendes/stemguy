import Head from 'next/head'

const Home: React.FC = () =>
{
	return (
		<div className="page">
			<Head>
				<title>STEM Guy</title>
				<meta name='thumbnail' content='/logo.svg' />
			</Head>

			<h1>Home</h1>
		</div>
	)
}

export default Home