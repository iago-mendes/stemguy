import Image from 'next/image'
import { GetStaticProps } from 'next'

import Container from '../../styles/pages/about/index'
import logo from '../../assets/logo.svg'
import { MemberListed } from '../../models/member'
import api from '../../services/api'
import SEOHead from '../../components/SEOHead'
import Link from 'next/link'

interface AboutProps
{
	members: MemberListed[]
}

const About: React.FC<AboutProps> = ({members}) =>
{
	return (
		<Container className='page' >
			<SEOHead
				title='About | STEM Guy'
			/>

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
					{members.filter(({role}) => !['Guest Writer'].includes(role)).map(member => (
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

			<div className='team'>
				<label>Guest Writers</label>
				<ul>
					{members.filter(({role}) => role === 'Guest Writer').map(member => (
						<div className='member' key={member.id}>
							<div className='img'>
								<Image src={member.image} width={1000} height={1000} layout='responsive'/>
							</div>
							<div className='info'>
								<h1>{member.name}</h1>
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
			
			<div className='links'>
				<Link href='/about/privacy-policy'>
					Privacy Policy
				</Link>
				<Link href='/about/terms-of-use'>
					Terms of Use
				</Link>
				<Link href='/about/disclaimer'>
					Disclaimer
				</Link>
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