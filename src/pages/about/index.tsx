import Head from 'next/head'
import Image from 'next/image'

import Container from '../../styles/pages/about/index'
import logo from '../../assets/logo.svg'

const About: React.FC = () =>
{
	return (
		<Container className='page' >
			<Head>
				<title>About</title>
			</Head>

			<main>
				<div className='logo'>
					<Image src={logo} width={1000} height={1000} layout='responsive' />
				</div>
				<div className='questionsAnswers'>
					<div className='group'>
						<label>What is the STEM Guy?</label>
						<p>The STEM Guy blog is a place where you can read articles about science and technology. Those posts are made by people passionate about these topics, which ensure the quality of our content.</p>
					</div>
				</div>
			</main>
		</Container>
	)
}

export default About