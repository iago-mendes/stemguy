import {NextApiHandler} from 'next'

import api from '../../services/api'

const posts: NextApiHandler = async (req, res) =>
{
	const {search, page} = req.query
	const {data, headers} = await api.get('posts', {params: {search, page}})

	const paginate =
	{
		page: Number(headers.page),
		total: Number(headers.totalpages)
	}

	res.statusCode = 200
	res.setHeader('Content-Type', 'application/json')
	res.end(JSON.stringify({posts: data, paginate}))
}

export default posts