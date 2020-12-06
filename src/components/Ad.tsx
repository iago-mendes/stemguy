import React, { useEffect, useState } from 'react'

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
			<div className="center">
				<h1>Advertisement</h1>
				<div className='ad' style={{width: width, height: height}} />
			</div>
		</Container>
	)
}

export const HorizontalAd: React.FC = () =>
{
	const [inMobile, setInMobile] = useState(false)

	useEffect(() => setInMobile(window.innerWidth < 800), [])

	if (inMobile) return <Ad width={300} height={100} />
	else return <Ad width={728} height={90} />
}

export default Ad