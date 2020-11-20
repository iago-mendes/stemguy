import {NextApiHandler} from "next"

import api from "../../services/api"

const search: NextApiHandler = async (req, res) =>
{
	const q = req.query.q
	let posts = []
	if (q && q !== '') await api.get(`posts?search=${q}`).then(res => posts = res.data)
	else await api.get('posts').then(res => posts = res.data)

	res.statusCode = 200
	res.setHeader('Content-Type', 'application/json')
	res.end(JSON.stringify({posts}))
}

export default search