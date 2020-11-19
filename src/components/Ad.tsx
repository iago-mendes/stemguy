import Container from '../styles/components/Ad'

interface AdProps
{
	width: number
	height: number
}

const Ad: React.FC<AdProps> = ({width,height}) => 
{
	return (
		<Container
			width={width}
			height={height}
		>
			<h1>Advertisement</h1>
			<div className='ad' style={{width: width, height: height}} />
		</Container>
	)
}

export default Ad