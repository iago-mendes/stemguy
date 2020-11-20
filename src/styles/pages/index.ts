import styled from 'styled-components'

const Container = styled.div`
	
	header
	{
		display: flex;
		align-items: center;
		flex-direction: column;

		width: 100%;
		height: 50vh;

		background-color: ${p => p.theme.colors.primary};

		position: relative;

		.nameLogo
		{
			display: flex;
			align-items: center;
			justify-content: space-around;

			width: 100%;
			height: 85%;

			h1
			{
				font-size: 7.5rem;
				font-family: Aladin;

				color: ${p => p.theme.colors.background};
			}

			.img
			{
				height: 90%;
				width: calc(50vh * 0.85 * 0.9);

				display: flex;
				align-items: center;
				justify-content: center;

				svg
				{
					
				}
			}
		}

		.input
		{
			height: 5rem;
			width: 75rem;

			border-radius: 10rem;
			border: ${p => p.theme.colors.primary} 2px solid;
			padding-left: 1.5rem;
			padding-right: 1.5rem;

			position: absolute;
			bottom: -2.5rem;

			background-color: #fff;

			display: flex;
			align-items: center;
			justify-content: flex-start;
			gap: 1rem;

			color: ${p => p.theme.colors.primary};

			input
			{
				border: none;
				outline: none;

				height: 90%;
				width: 100%;

				font-family: Ubuntu;
				font-size: 2rem;
				color: ${p => p.theme.colors.primary};
			}
		}
	}
`

export default Container