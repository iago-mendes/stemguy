import {useState} from 'react'
import {FaSearch} from 'react-icons/fa'

import Container from '../styles/components/Sidebar'
import logo from '../assets/logo.svg'

const Sidebar: React.FC = () =>
{
	const [isClicked, setIsClicked] = useState(false)

	function handleFooterClick()
	{
		if (!isClicked) setIsClicked(!isClicked)
	}

  return (
		<Container
			isClicked={isClicked}
			onClick={e => (String(e.target).includes('HTMLDivElement')) && setIsClicked(!isClicked)}
		>
			<img src={logo} alt="STEM Guy" title="Home" onClick={() => {}}/>

			<footer onClick={handleFooterClick}>
				<FaSearch size={25} className="searchIcon" />
				{isClicked && (
						<input autoFocus />
				)}
			</footer>
    </Container>
  )
}

export default Sidebar