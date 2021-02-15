interface Post
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
		width: number
		height: number
	}
	markdown: string
	flags: Array<{name: string, color: string}>
}

export interface PostListed
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

export default Post