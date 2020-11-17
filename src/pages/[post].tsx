import {GetStaticPaths, GetStaticProps} from 'next'
import Head from "next/head"
import Image from 'next/image'
import {FiCalendar, FiClock} from 'react-icons/fi'

import api from '../services/api'
import Container from '../styles/pages/[post]'
import Img from '../components/Img'

interface PostProps
{
	post:
	{
		title: string
  	date: string
  	time: number
		author:
		{
			name: string
			role: string
			image: string
		}
		description: string
		image:
		{
			url: string
			alt: string
			credit?: string
			creditLink?: string
		}
		markdown: string
		flags: Array<{name: string, color: string}>
	}
}

const Post: React.FC<PostProps> = ({post}) =>
{
	if (!post) return <h1>Carregando...</h1>

	return (
		<Container className="page">
			<Head>
				<title>{post.title} | STEM Guy</title>
			</Head>

			<header>
				<h1>{post.title}</h1>
				<div className="info">
					<div className="calendarTime">
						<span>
							<FiCalendar size={25} />
							<h3>{post.date}</h3>
						</span>
						<span>
							<FiClock size={25} />
							<h3>{post.time} minutes</h3>
						</span>
					</div>
					<div className="author">
						<h3>by</h3>
						<span>
							<h2>{post.author.name}</h2>
							<Image src={post.author.image} alt={post.author.name} width={40} height={40} />
						</span>
					</div>
				</div>
			</header>

			<div className="mainContainer">
				<main>
					<p className="description">{post.description}</p>
					<Img image={post.image} width={300} height={200} />
					<p>{post.markdown}</p>
				</main>
				<aside>
					Advertisement
				</aside>
			</div>
		</Container>
	)
}

export const getStaticPaths: GetStaticPaths = async () =>
{
	const {data} = await api.get('posts')
	
	const paths = data.map(post => (
		{
			params: {post: post.url_id}
		}
	))
	
	return {
		paths,
		fallback: true
	}
}

export const getStaticProps: GetStaticProps = async ctx =>
{
	const {post} = ctx.params
	const {data} = await api.get(`posts/${post}`)
	
	return {
		props: {post: data},
		revalidate: 5
	}
}

export default Post