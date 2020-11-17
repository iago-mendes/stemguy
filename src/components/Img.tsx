import Image from 'next/image'

import Container from '../styles/components/Img'

interface ImgProps
{
	image:
	{
		url: string
		alt: string
		credit?: string
		creditLink?: string
	}
	width: number
	height: number
}

const Img: React.FC<ImgProps> = ({image, width, height}) =>
{
	return (
		<Container>
			<div className="center">
				<Image src={image.url} alt={image.alt} width={width} height={height} layout="responsive" />
				{image.credit && (
					<a href={image.creditLink}>{image.credit}</a>
				)}
			</div>
		</Container>
	)
}

export default Img