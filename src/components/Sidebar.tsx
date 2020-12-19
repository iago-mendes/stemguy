import {FormEvent, useEffect, useState} from 'react'
import {FaSearch} from 'react-icons/fa'
import {useRouter} from 'next/router'

import Container from '../styles/components/Sidebar'
import logo from '../assets/logo.svg'

const Sidebar: React.FC = () =>
{
	const Router = useRouter()
	
	const [search, setSearch] = useState('')
	const [isClicked, setIsClicked] = useState(false)
	const [inMobile, setInMobile] = useState(false)
	const [page, setPage] = useState('')

	const [scrollingDown, setScrollingDown] = useState(false)
	let previousScroll = 0
	let scroll = 0

	useEffect(() =>
	{
		setInMobile(window.innerWidth <= 1100)

		previousScroll = window.pageYOffset
		window.onscroll = handleScroll
	}, [])

	useEffect(() =>
	{
		const tmp = Router.pathname.split('/')[1]
		setPage(tmp)
	}, [Router])

	function handleScroll()
	{
		scroll = window.pageYOffset
		const isScrollingDown = scroll - previousScroll > 0
		setScrollingDown(isScrollingDown)
		previousScroll = scroll
	}

	function handleSearchClick()
	{
		if (!inMobile && !isClicked) setIsClicked(!isClicked)
		else
		{
			Router.push(`/?search=${search}`)
			setSearch('')
			setIsClicked(!isClicked)
		}
	}

	function handleSearchSubmit(e: FormEvent)
	{
		e.preventDefault()
		Router.push(`/?search=${search}`)
		setSearch('')
		setIsClicked(!isClicked)
	}

	if (page === '')
		return null

  return (
		<Container
			isClicked={isClicked}
			scrollingDown={scrollingDown}
			onMouseEnter={() => setIsClicked(true)}
			onMouseLeave={() => setIsClicked(false)}
		>
			<img src={logo} alt="STEM Guy" title="Home" onClick={() => Router.push('/')}/>

			<form title='Search' onClick={handleSearchClick} onSubmit={handleSearchSubmit}>
				<FaSearch size={25} className="searchIcon" />
				{(isClicked && !inMobile) && (
					<input autoFocus value={search} onChange={e => setSearch(e.target.value)} />
				)}
			</form>
    </Container>
  )
}

export default Sidebar