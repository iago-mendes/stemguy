import Link from 'next/link'
import { FiInstagram, FiTwitter } from 'react-icons/fi'

import Container from '../styles/components/Footer'

const Footer: React.FC = () =>
{
	return (
		<Container>
			<div className='group'>
				<h1>Site links</h1>
				<Link href='/' >
					<a className='link' >Home</a>
				</Link>
				<Link href='/about' >
					<a className='link' >About us</a>
				</Link>
				<Link href='/policies/privacy' >
					<a className='link' >Privacy policy</a>
				</Link>
				<Link href='/policies/terms-of-use' >
					<a className='link' >Terms of use</a>
				</Link>
			</div>
			<div className='group'>
				<h1>Social medias</h1>
				<a target='_blank' href='https://www.instagram.com/stemguy.club/' className='social' >
					<FiInstagram size={25} />
					<span>@stemguy.club</span>
				</a>
				<a target='_blank' href='https://twitter.com/stemguyclub' className='social' >
					<FiTwitter size={25} />
					<span>@stemguyclub</span>
				</a>
			</div>
		</Container>
	)
}

export default Footer