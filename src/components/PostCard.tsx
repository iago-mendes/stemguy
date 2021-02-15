import Image from 'next/image'

import {PostListed} from '../models/post'
import Container from '../styles/components/PostCard'

interface PostCardProps
{
	post: PostListed
}

const PostCard: React.FC<PostCardProps> = ({post}) =>
{
	function truncateText(text: string, length: number)
	{
		let truncated = text

		if (truncated.length > length)
			truncated = truncated.substr(0, length) + '...';

		return truncated;
	}

	return (
		<Container>
			<div className='img'>
				<Image
					src={post.image.url}
					alt={post.image.alt}
					width={post.image.width}
					height={post.image.height}
					layout='responsive'
				/>
			</div>
			<h1>{truncateText(post.title, 45)}</h1>
			<p>{truncateText(post.description, 225)}</p>
			<div className='scroll'>
				<ul>
					{post.flags.map(flag => (
						<li key={flag.name} style={{backgroundColor: flag.color}} >{flag.name}</li>
					))}
				</ul>
			</div>
		</Container>
	)
}

export default PostCard