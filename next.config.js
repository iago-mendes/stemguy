const withImages = require('next-images')
module.exports = withImages({
	esModule: true,
	images: {
		domains: [process.env.API_HOSTNAME],
		loader: 'imgix',
		path: ''
	},
	publicRuntimeConfig:
	{
		gaId: process.env.GA_TRACKING_ID,
		adClient: process.env.DATA_AD_CLIENT
	},
	serverRuntimeConfig:
	{
		authSecret: process.env.AUTH_SECRET,
		googleClientId: process.env.GOOGLE_CLIENT_ID,
		googleClientSecret: process.env.GOOGLE_CLIENT_SECRET
	}
})