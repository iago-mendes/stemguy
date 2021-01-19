import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
	:root
	{
		font-size: 10px;
	}

	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
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
		overflow-y: auto;
		overflow-x: hidden;
	}
`