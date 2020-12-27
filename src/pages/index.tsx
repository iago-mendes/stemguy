import {GetStaticProps} from 'next'
import Head from 'next/head'
import {useEffect, useState} from 'react'
import useSWR from 'swr'
import Image from 'next/image'
import {FaSearch} from 'react-icons/fa'
import {useRouter} from 'next/router'

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
	date: Date
	image:
	{
		url: string
		alt: string
		width: number
		height: number
	}
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
	const Router = useRouter()
	const [search, setSearch] = useState('')
	const [posts, setPosts] = useState<Post[]>([])
	const {data, error} = useSWR(`/api/search?q=${search}`)
	
	useEffect(() =>
	{
		if (Router)
		{
			const {search: q} = Router.query
			if (q)
				setSearch(String(q))
		}
	}, [Router])

	useEffect(() =>
	{
		if (search === '' || error)
		{
			let tmp = staticPosts
			tmp.sort((a,b) => a.date < b.date ? 1 : -1)
			setPosts(tmp)
		}
		else if (data) setPosts(data.posts)
	}, [data, error, search, staticPosts])

	if (error)
		console.log('[error while getting data]', error)

	const meta =
	{
		title: 'STEM Guy | A blog about science and technology',
		description: 'The STEM Guy blog is a place to read about science and technology.',
		url: 'https://stemguy.club',
		image: 'https://api.stemguy.club/public/logo.png'
	}

	function truncateText(text: string, length: number)
	{
		let truncated = text

		if (truncated.length > length)
			truncated = truncated.substr(0, length) + '...';

		return truncated;
	}

	return (
		<Container>
			<Head>
				{/* Primary Meta Tags */}
				<title>{meta.title}</title>
				<meta name="title" content={meta.title} />
				<meta name="description" content={meta.description} />

				{/* Open Graph / Facebook */}
				<meta property="og:type" content="website" />
				<meta property="og:url" content={meta.url} />
				<meta property="og:title" content={meta.title} />
				<meta property="og:description" content={meta.description} />
				<meta property="og:image" content={meta.image} />

				{/* Twitter */}
				<meta property="twitter:card" content="summary_large_image" />
				<meta property="twitter:url" content={meta.url} />
				<meta property="twitter:title" content={meta.title} />
				<meta property="twitter:description" content={meta.description} />
				<meta property="twitter:image" content={meta.image} />
			</Head>

			<header>
				<div className='nameLogo'>
					<h1>STEM Guy</h1>
					<div className="img">
						<Image src={logo} alt='STEM Guy' width={300} height={300} layout='intrinsic' priority />
					</div>
				</div>
				<div className='input'>
					<FaSearch size={25} />
					<input type='text' value={search} onChange={e => setSearch(e.target.value)} placeholder='Search for a topic' />
				</div>
			</header>

			{
				!data && search !== ''
				? <Loading style={{height: '70vh', marginTop: '30vh'}} />
				: posts.length === 0 && search !== ''
					? (
						<div className="noResults">
							<h1>No results found!</h1>
						</div>
					)
					: (
						<main>
							{posts.map(post => (
								<div className="post" key={post.id} onClick={() => Router.push(`/${post.url_id}`)}>
									<div className="imgContainer">
										<img src={post.image.url} alt={post.image.alt} />
									</div>
									<h1>{truncateText(post.title, 30)}</h1>
									<p>{truncateText(post.description, 200)}</p>
									<ul>
										{post.flags.map(flag => (
											<li key={flag.name} style={{backgroundColor: flag.color}} >{flag.name}</li>
										))}
									</ul>
								</div>
							))}
						</main>
					)
			}
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