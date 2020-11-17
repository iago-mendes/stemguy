const withImages = require('next-images')
module.exports = withImages({
	esModule: true,
	images: {
		loader: 'imgix',
		path: ''
	}
})