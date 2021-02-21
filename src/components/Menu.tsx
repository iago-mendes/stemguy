import {FormEvent, useEffect, useState} from 'react'
import {FaSearch} from 'react-icons/fa'
import {useRouter} from 'next/router'
import Link from 'next/link'

import Container from '../styles/components/Menu'
import icon from '../assets/logos/icon-darked.svg'
import name from '../assets/logos/name.svg'
import useDimensions from '../hooks/useDimensions'
import SearchModal from './modals/Search'

const Menu: React.FC = () =>
{
	const {pathname, push} = useRouter()
	const {inMobile, inDesktop} = useDimensions()
	
	const [search, setSearch] = useState('')
	const [isSearchExpanded, setIsSearchExpanded] = useState(false)
	const [page, setPage] = useState('')

	useEffect(() =>
	{
		const tmpPage = pathname.split('/')[1]
		setPage(tmpPage)
	}, [pathname])

	function handleSearchSubmit(e: FormEvent)
	{
		e.preventDefault()

		setIsSearchExpanded(false)
		push(`/?search=${search}`)
		setSearch('')
	}

	if (page === '')
		return null

  return (
		<Container
			isSearchExpanded={isSearchExpanded && inDesktop}
			title='Home'
		>
			<SearchModal
				isOpen={isSearchExpanded && inMobile}
				setIsOpen={setIsSearchExpanded}
			/>

			<Link href='/' >
				<div
					className='logos'
					title='Home'
				>
					<img src={icon} alt='STEM Guy icon' className='icon' />
					<img src={name} alt='STEM Guy' className='name' />
				</div>
			</Link>

			<form
				title='Search'
				onSubmit={handleSearchSubmit}

				onMouseEnter={() => inDesktop && setIsSearchExpanded(true)}
				onMouseLeave={() => inDesktop && setIsSearchExpanded(false)}
				onClick={() => inMobile && setIsSearchExpanded(true)}
			>
				<FaSearch size={25} className='searchIcon' />
				{(isSearchExpanded && inDesktop) && (
					<input
						autoFocus
						value={search}
						onChange={e => setSearch(e.target.value)}
						placeholder='Search for a topic'
					/>
				)}
			</form>
    </Container>
  )
}

export default Menu