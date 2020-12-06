import React from 'react'
import Image from 'next/image'

import Container from '../styles/components/Img'

interface ImgProps
{
	url: string
	alt: string
	credit?: string
	creditLink?: string
	width: number
	height: number
}

const Img: React.FC<ImgProps> = ({url, alt, credit, creditLink, width, height}) =>
{
	return (
		<Container>
			<div className="center">
				<Image src={url} alt={alt} width={width} height={height} layout="responsive" />
				{credit && (
					<a target="_blank" href={creditLink} className='imageLink' >{credit}</a>
				)}
			</div>
		</Container>
	)
}

export default Img