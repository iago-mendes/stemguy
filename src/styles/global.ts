import {createGlobalStyle} from "styled-components";
import Modal from 'react-modal'

export default createGlobalStyle`
	:root
	{
		font-size: 10px;
	}

	*
	{
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		-webkit-tap-highlight-color: transparent;
		outline: none;
	}

	body
	{
		background-color: ${props => props.theme.colors.background};
		color: ${props => props.theme.colors.text};

		::-webkit-scrollbar
		{
			width: 1rem;
		}
		::-webkit-scrollbar-track
		{
			background-color: ${p => p.theme.colors.primary}40;
		}
		
		::-webkit-scrollbar-thumb
		{
			background-color: ${p => p.theme.colors.primary};
			:hover
			{
				background-color: ${p => p.theme.colors.primary}bf;
			}
		}
	}

	#__next
	{
		width: 100%;
		height: 100vh;
	}

	.page
	{
		height: fit-content;
		min-height: calc(100vh - 5rem);

		overflow-y: auto;
		overflow-x: hidden;
	}
`

export const modalStyle: Modal.Styles =
{
	overlay:
	{
		backgroundColor: 'rgba(0, 0, 0, 0.6)',
		zIndex: 2
	},

	content:
	{
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		background: 'none',
		border: 'none',
		padding: 0,
		width: '100%',
		height: '100%',
		left: 0,
		top: 0
	}
}