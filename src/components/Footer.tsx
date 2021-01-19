import Link from 'next/link'
import { FiInstagram, FiTwitter } from 'react-icons/fi'

import Container from '../styles/components/Footer'

const Footer: React.FC = () =>
{
	return (
		<Container>
			<div className='links'>
				<Link href='/about' >
					About us
				</Link>
				<Link href='/policies/privacy' >
					Privacy policy
				</Link>
				<Link href='/policies/terms-of-use' >
					Terms of use
				</Link>
			</div>
			<div className='socialMedias'>
				<a target='_blank'href='https://www.instagram.com/stemguy.club/'>
					<FiInstagram size={25} />
					<span>@stemguy.club</span>
				</a>
				<a target='_blank' href='https://twitter.com/stemguyclub' >
					<FiTwitter size={25} />
					<span>@stemguyclub</span>
				</a>
			</div>
		</Container>
	)
}

export default Footer