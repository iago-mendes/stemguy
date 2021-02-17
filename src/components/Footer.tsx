import Image from 'next/image'
import Link from 'next/link'
import {useRouter} from 'next/router'
import {FiInstagram, FiTwitter} from 'react-icons/fi'

import Container from '../styles/components/Footer'
import icon from '../assets/logos/icon-darked.svg'
import name from '../assets/logos/name.svg'

const Footer: React.FC = () =>
{
	const {push} = useRouter()

	return (
		<Container>
			<div
				className='logos'
				title='Home'
				onClick={() => push('/')}
			>
				<img src={icon} alt='STEM Guy icon' className='icon' />
				<img src={name} alt='STEM Guy' className='name' />
			</div>
			<div className='links'>
				<div className='group'>
					<h1>Site links</h1>
					<ul>
						<Link href='/' >
							<a className='link' >Home</a>
						</Link>
						<Link href='/about' >
							<a className='link' >About</a>
						</Link>
						<Link href='/about/privacy-policy' >
							<a className='link' >Privacy policy</a>
						</Link>
					</ul>
				</div>
				<div className='group'>
					<h1>Social medias</h1>
					<ul>
						<a target='_blank' href='https://www.instagram.com/stemguy.club/' className='social' >
							<FiInstagram size={25} />
							<span>@stemguy.club</span>
						</a>
						<a target='_blank' href='https://twitter.com/stemguyclub' className='social' >
							<FiTwitter size={25} />
							<span>@stemguyclub</span>
						</a>
					</ul>
				</div>
			</div>
		</Container>
	)
}

export default Footer