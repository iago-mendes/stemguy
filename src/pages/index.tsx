import {GetStaticProps} from 'next'
import {useEffect, useState} from 'react'
import useSWR from 'swr'
import Image from 'next/image'
import {FaSearch} from 'react-icons/fa'
import {useRouter} from 'next/router'

import api from '../services/api'
import Container from '../styles/pages/index'
import SEOHead from '../components/SEOHead'
import icon from '../assets/logos/icon-darked.svg'
import name from '../assets/logos/name.svg'
import GridPaginate from '../components/GridPaginate'
import {PostListed as Post} from '../models/post'
import PostCard from '../components/PostCard'

interface HomeProps
{
	staticPosts: Post[]
}

const Home: React.FC<HomeProps> = ({staticPosts}) =>
{
	const Router = useRouter()

	const [search, setSearch] = useState('')
	const [page, setPage]	= useState(1)
	const [totalPages, setTotalPages] = useState(1)
	const [loading, setLoading] = useState(false)

	const [posts, setPosts] = useState<Post[]>([])
	const {data, error, revalidate} = useSWR(`/api/posts?search=${search}&page=${page}`)
	
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
		if (data)
		{
			setPosts(data.posts)
			setPage(data.paginate.page)
			setTotalPages(data.paginate.total)
		}
		else if (error)
		{
			setPosts(staticPosts)
			setPage(1)
			setTotalPages(1)

			console.error(error)
		}
	}, [data, error])

	useEffect(() =>
	{
		revalidate()

		if (search === '' && page === 1)
			setPosts(staticPosts)
		else
			setLoading(true)
	}, [search, page])

	useEffect(() =>
	{
		setLoading(false)
	}, [posts])

	useEffect(() =>
	{
		setPage(1)
		if (search !== '')
			setTotalPages(1)
	}, [search])

	if (error)
		console.log('[error while getting data]', error)

	return (
		<Container>
			<SEOHead />

			<header>
				<div className='logos'>
					<div className='icon'>
						<Image src={icon} alt='STEM Guy icon' width={1000} height={1000} layout='responsive' />
					</div>
					<div className='name'>
						<Image src={name} alt='STEM Guy' width={1000} height={250} layout='responsive' />
					</div>
				</div>
				<div className='input'>
					<FaSearch size={25} />
					<input type='text' value={search} onChange={e => setSearch(e.target.value)} placeholder='Search for a topic' />
				</div>
			</header>

			<GridPaginate
				page={page}
				setPage={setPage}
				totalPages={totalPages}
				loading={loading}
				noResults={posts.length === 0}
			>
				{posts.map(post => (
					<PostCard
						post={post}
						key={post.id}
					/>
				))}
			</GridPaginate>
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