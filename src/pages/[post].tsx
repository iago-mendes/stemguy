import {GetStaticPaths, GetStaticProps} from 'next'
import Head from "next/head";

import api from '../services/api';

interface PostProps
{
	post:
	{
		title: string
  	date: Date
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
			credit: string
			creditLink: string
		}
		markdown: string
		flags: Array<{name: string, color: string}>
	}
}

const Post: React.FC<PostProps> = ({post}) =>
{	
	if (!post) return <h1>Carregando...</h1>

	return (
		<div className="page">
			<Head>
				<title>{post.title} | STEM Guy</title>
			</Head>
		
			<h1>{post.title}</h1>
			<img src={post.image.url} alt={post.image.alt} style={{width: 500}} />
			<p>{post.markdown}</p>
		</div>
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
		props: {post: data}
	}
}

export default Post