import {useEffect, useState} from 'react'
import {FaSearch} from 'react-icons/fa'
import Router from 'next/router'

import Container from '../styles/components/Sidebar'
import logo from '../assets/logo.svg'

const Sidebar: React.FC = () =>
{
	const [isClicked, setIsClicked] = useState(false)
	const [inMobile, setInMobile] = useState(false)

	const [scrollingDown, setScrollingDown] = useState(false)
	let previousScroll = 0
	let scroll = 0

	useEffect(() =>
	{
		setInMobile(window.innerWidth <= 1100)

		previousScroll = window.pageYOffset
		window.onscroll = handleScroll
	}, [])

	function handleScroll()
	{
		scroll = window.pageYOffset
		const isScrollingDown = scroll - previousScroll > 0
		setScrollingDown(isScrollingDown)
		previousScroll = scroll
	}

	function handleFooterClick()
	{
		if (inMobile || isClicked) Router.push('/search')
		else setIsClicked(!isClicked)
	}

  return (
		<Container
			isClicked={isClicked}
			scrollingDown={scrollingDown}
			onClick={e => (String(e.target).includes('HTMLDivElement') && !inMobile) && setIsClicked(!isClicked)}
		>
			<img src={logo} alt="STEM Guy" title="Home" onClick={() => Router.push('/')}/>

			<footer title='Search' onClick={handleFooterClick}>
				<FaSearch size={25} className="searchIcon" />
				{(isClicked && !inMobile) && (
					<input autoFocus />
				)}
			</footer>
    </Container>
  )
}

export default Sidebar