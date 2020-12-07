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

		margin-left: 5rem;
		width: calc(100% - 5rem);
	}

	@media (max-width: 1100px)
	{
		.page
		{
			height: fit-content;
			width: 100%;

			margin: 0;
		}
	}
`