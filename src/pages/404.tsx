import Container from '../styles/pages/404'
import SEOHead from '../components/SEOHead'

const NotFound: React.FC = () =>
{
	return (
		<Container className='page'>
			<SEOHead
				title='404: not found | STEM Guy'
			/>

			<h1>404: not found</h1>
			<h2>Sorry... This page was not found!</h2>
		</Container>
	)
}

export default NotFound