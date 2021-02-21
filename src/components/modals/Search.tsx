import { FiX } from 'react-icons/fi'
import Modal from 'react-modal'

import Container from '../../styles/components/modals/Search'

Modal.setAppElement('#__next')

interface SearchModalProps
{
	isOpen: boolean
	setIsOpen: (p: boolean) => void
}

const SearchModal: React.FC<SearchModalProps> = ({isOpen, setIsOpen}) =>
{
	return (
		<Modal
			isOpen={isOpen}
		>
			<Container>
				<button className='close' onClick={() => setIsOpen(false)} >
					<FiX size={25} />
				</button>

				<form>
					<input type='text'/>
					<button type='submit'></button>
				</form>
			</Container>
		</Modal>
	)
}

export default SearchModal