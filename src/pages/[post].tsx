import {GetStaticPaths, GetStaticProps} from 'next'
import Head from "next/head"
import Image from 'next/image'
import {FiCalendar, FiClock} from 'react-icons/fi'
import Markdown from 'react-showdown'
import {useRouter} from 'next/router'
import {useEffect, useState} from 'react'

import api from '../services/api'
import Container from '../styles/pages/[post]'
import Img from '../components/Img'
import Loading from '../components/Loading'
import NotFound from '../components/NotFound'
import Ad, {HorizontalAd} from '../components/Ad'

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
	const {isFallback} = useRouter()
	const [inDesktop, setInDesktop] = useState(true)
	const [gettingWidth, setGettingWidth] = useState(true)

	if (isFallback) return <Loading />
	else if(!post) <NotFound />

	useEffect(() =>
	{
		setInDesktop(window.innerWidth >= 1450)
		setGettingWidth(false)
	}, [])

	if (gettingWidth) return <Loading />

	return (
		<Container inDesktop={inDesktop} className="page">
			<Head>
				<title>{post.title} | STEM Guy</title>
				<meta name='description' content={post.description} />
				<meta name='thumbnail' content={post.image.url} />
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
					<Img
						url={post.image.url}
						alt={post.image.alt}
						credit={post.image.credit}
						creditLink={post.image.creditLink}
						width={300}
						height={200}
					/>
					<div className="markdown">
						<Markdown
							markdown={post.markdown}
							options={{openLinksInNewWindow: true}}
							components={{Img, HorizontalAd}}
						/>
					</div>
				</main>
				{inDesktop && (
					<aside>
						<Ad width={160} height={600} />
						<Ad width={250} height={250} />
						<Ad width={300} height={250} />
					</aside>
				)}
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