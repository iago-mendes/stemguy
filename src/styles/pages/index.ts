import styled from 'styled-components'

const Container = styled.div`
	overflow-y: auto;
	overflow-x: hidden;

	width: 100%;

	header
	{
		display: flex;
		align-items: center;
		flex-direction: column;

		width: 100%;
		height: 30vh;

		background-color: ${p => p.theme.colors.primary};

		position: relative;

		.logos
		{
			display: flex;
			align-items: center;
			justify-content: center;
			gap: 15rem;

			width: 100%;
			height: 85%;

			.icon
			{
				height: 90%;
				width: calc(30vh * 0.85 * 0.9);
			}

			.name
			{
				height: 50%;
				width: calc(30vh * 0.85 * 0.5 * 1000/250);
			}
		}

		.input
		{
			z-index: 2;

			height: 5rem;
			width: 75rem;

			border-radius: 10rem;
			border: ${p => p.theme.colors.primary} 2px solid;
			padding-left: 1.5rem;
			padding-right: 1.5rem;

			margin-bottom: -2.5rem;

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
				font-weight: 700;
				font-size: 2rem;
				color: ${p => p.theme.colors.primary};
			}
		}
	}

	.noResults
	{
		margin-top: 30vh;
		width: 100%;
		height: 70vh;

		display: flex;
		align-items: center;
		justify-content: center;

		h1
		{
			color: ${p => p.theme.colors.primary};
			font-family: Ubuntu;
			font-weight: 700;
			font-size: 3rem;
		}
	}

	@media(max-width: 1100px)
	{
		header
		{
			height: 20vh;

			.logos
			{
				gap: 1rem;

				.icon
				{
					width: calc(20vh * 0.85 * 0.9);
				}

				.name
				{
					width: calc(20vh * 0.85 * 0.5 * 1000/250);
				}
			}

			.input
			{
				width: 75%;

				svg
				{
					width: 2.5rem;
					height: 2.5rem;
				}

				input
				{
					width: 75%;
				}
			}
		}

		.noResults
		{
			margin-top: calc(20vh + 5rem)
		}

		main
		{
			padding: 2rem;
			padding-top: 4rem;

			min-height: 80vh;
		}
	}
`

export default Container