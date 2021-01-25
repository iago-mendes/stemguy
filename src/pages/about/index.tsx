import Head from 'next/head'
import Image from 'next/image'
import { GetStaticProps } from 'next'

import Container from '../../styles/pages/about/index'
import logo from '../../assets/logo.svg'
import { MemberListed } from '../../models/member'
import api from '../../services/api'
import Loading from '../../components/Loading'

interface AboutProps
{
	members: MemberListed[]
}

const About: React.FC<AboutProps> = ({members}) =>
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
						<p>The STEM Guy blog is a place where you can read articles about science and technology. The posts are made by people passionate about these topics, which ensure the quality of our content.</p>
					</div>
				</div>
			</main>

			<div className='team'>
				<label>Meet our team</label>
				<ul>
					{members.map(member => (
						<div className='member' key={member.id}>
							<div className='img'>
								<Image src={member.image} width={1000} height={1000} layout='responsive'/>
							</div>
							<div className='info'>
								<h1>{member.name}</h1>
								<h2>{member.role}</h2>
								<p>{member.bio}</p>
								<div className='topics'>
									{member.favTopics.map((topic, index) => (
										<span key={index} >
											{topic}
										</span>
									))}
								</div>
							</div>
						</div>
					))}
				</ul>
			</div>
		</Container>
	)
}

export const getStaticProps: GetStaticProps = async ctx =>
{
	const {data} = await api.get('members')

	return {
		props: {members: data},
		revalidate: 60
	}
}

export default About