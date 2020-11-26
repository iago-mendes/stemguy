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
    display: flex;

		width: 100vw;
		height: 100vh;
  }

	.page
	{
		height: 100vh;
    width: 100%;
    overflow-y: auto;
		overflow-x: hidden;
	}

	@media (max-width: 1100px)
	{
		#__next
		{
			flex-direction: column;
		}

		.page
		{
			height: 100%;
			width: 100vw;

			margin-top: 5rem;
		}
	}
`