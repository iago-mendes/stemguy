import Modal from 'react-modal'
import {FormEvent, useState} from 'react'
import {useRouter} from 'next/router'
import {FiX} from 'react-icons/fi'
import {FaSearch} from 'react-icons/fa'

import Container from '../../styles/components/modals/Search'
import {modalStyle} from '../../styles/global'

Modal.setAppElement('#__next')

interface SearchModalProps
{
	isOpen: boolean
	setIsOpen: (p: boolean) => void
}

const SearchModal: React.FC<SearchModalProps> = ({isOpen, setIsOpen}) =>
{
	const {push} = useRouter()

	const [search, setSearch] = useState('')

	function handleSubmit(e?: FormEvent)
	{
		if (e)
			e.preventDefault()

		setIsOpen(false)
		push(`/?search=${search}`)
	}

	return (
		<Modal
			isOpen={isOpen}
			style={modalStyle}
		>
			<Container>
				<button className='close' onClick={() => setIsOpen(false)} >
					<FiX size={25} />
				</button>

				<form onSubmit={handleSubmit} >
					<FaSearch size={25} className='icon' />
					<input
						autoFocus
						value={search}
						onChange={e => setSearch(e.target.value)}
						placeholder='Search for a topic'
					/>
				</form>

				<button className='submit' onClick={handleSubmit} >
					See results
				</button>
			</Container>
		</Modal>
	)
}

export default SearchModal