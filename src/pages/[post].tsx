import {GetStaticPaths, GetStaticProps} from 'next'
import Image from 'next/image'
import {FiCalendar, FiClock} from 'react-icons/fi'
import Markdown from 'react-showdown'
import {useRouter} from 'next/router'
import {useEffect, useState} from 'react'

import api from '../services/api'
import Container from '../styles/pages/[post]'
import Img from '../components/Img'
import Loading from '../components/Loading'
import NotFound from './404'
import Ad, {HorizontalAd} from '../components/Ad'
import SEOHead from '../components/SEOHead'
import PostInterface from '../models/post'

interface PostProps
{
	post: PostInterface
}

const Post: React.FC<PostProps> = ({post}) =>
{
	const {isFallback, } = useRouter()
	const [inDesktop, setInDesktop] = useState(false)

	if (isFallback)
		return <Loading />
	else if(!post)
		return <NotFound />

	useEffect(() =>
	{
		setInDesktop(window.innerWidth >= 1270)
	}, [])

	function formatDate(hash: string)
	{
		const months =
		[
			'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
		]
		const date = hash.split('T')[0].split('-').map(s => Number(s))
		const formatedDate = `${months[date[1]-1]} ${date[2]}, ${date[0]}`
		return formatedDate
	}

	return (
		<Container inDesktop={inDesktop} className="page">
			<SEOHead
				title={`${post.title} | STEM Guy`}
				description={post.description}
				image={post.image.url}
			/>

			<header>
				<h1>{post.title}</h1>
				<div className="info">
					<div className="calendarTime">
						<span>
							<FiCalendar size={25} />
							<h3>{formatDate(post.date)}</h3>
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
						width={post.image.width}
						height={post.image.height}
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
	const {post: urlId} = ctx.params
	let post: PostInterface = null

	await api.get(`posts/${urlId}`)
	.then(({data}) => post = data)
	.catch(({response: res}) => console.log('[error]', res.data))
	
	return {
		props: {post},
		revalidate: 5
	}
}

export default Post