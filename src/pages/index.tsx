import {GetStaticProps} from 'next'
import Head from 'next/head'
import {useEffect, useState} from 'react'
import useSWR from 'swr'
import Image from 'next/image'
import {FaSearch} from 'react-icons/fa'

import Loading from '../components/Loading'
import api from '../services/api'
import logo from '../assets/logoDarked.svg'
import Container from '../styles/pages/index'

interface Post
{
	id: string
	url_id: string
	title: string
	description: string
	image: string
	flags: Array<
	{
		name: string
		color: string
	}>
}

interface HomeProps
{
	staticPosts: Post[]
}

const Home: React.FC<HomeProps> = ({staticPosts}) =>
{
	const [search, setSearch] = useState('')
	const [posts, setPosts] = useState<Post[]>([])
	const {data, error} = useSWR(`/api/search?q=${search}`)

	useEffect(() =>
	{
		if (search === '') setPosts(staticPosts)
		else if (data) setPosts(data.posts)

		if (data) console.log('[data]', data.posts)
		console.log('[search]', search)
	}, [data, search])

	if (error) return <h1>failed to load data</h1>

	return (
		<Container className='page'>
			<Head>
				<title>STEM Guy</title>
				<meta name='thumbnail' content='/logo.svg' />
			</Head>

			<header>
				<div className='nameLogo'>
					<h1>STEM Guy</h1>
					<div className="img">
						<Image src={logo} alt='STEM Guy' width={300} height={300} layout='intrinsic' />
					</div>
				</div>
				<div className='input'>
					<FaSearch size={25} />
					<input type='text' value={search} onChange={e => setSearch(e.target.value)} />
				</div>
			</header>

			<main>
				{
					!data
					? <Loading />
					: posts.length === 0
						? <h1>No results found!</h1>
						: posts.map(post => post.title)
				}
			</main>
		</Container>
	)
}

export const getStaticProps: GetStaticProps = async ctx =>
{
	let posts = []
	await api.get('posts').then(res => posts = res.data)

	return {
		props: {staticPosts: posts},
		revalidate: 10
	}
}

export default Home