import styled from 'styled-components'

const Container = styled.div`
	position: relative;

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

		position: absolute;
		z-index: 99;
		left: 0;
		top: 0;
		right: 0;

		.nameLogo
		{
			display: flex;
			align-items: center;
			justify-content: space-around;

			width: 100%;
			height: 85%;

			h1
			{
				font-size: 6rem;
				font-family: Aladin;

				color: ${p => p.theme.colors.background};
			}

			.img
			{
				height: 90%;
				width: calc(30vh * 0.85 * 0.9);

				display: flex;
				align-items: center;
				justify-content: center;
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

	main
	{
		margin-top: 30vh;
		padding: 5rem;
		height: fit-content;

		display: grid;
		grid-auto-rows: 30rem;
		grid-template-columns: repeat(auto-fill, minmax(25rem, 1fr));
		grid-gap: 2rem;
		align-items: center;
		justify-items: center;

		.post
		{
			z-index: 1;

			background-color: #fff;
			width: 100%;
			max-width: 35rem;
			height: 100%;

			display: flex;
			flex-direction: column;
			align-items: center;
			gap: 1rem;

			padding: 1rem;
			border-radius: 2rem;

			cursor: pointer;
			transition: 0.25s;

			:hover
			{
				transform: scale(1.01);
				box-shadow: 5px 5px 5px rgba(0,0,0,0.5);
			}

			.img
			{
				width: 100%;
				height: 40%;
				overflow: hidden;

				img
				{
					border-radius: 1rem;
				}
			}

			h1
			{
				height: 20%;
				width: 100%;
				text-align: center;

				font-family: Ubuntu;
				font-size: 2rem;
			}

			p
			{
				height: 20%;
				width: 100%;

				font-family: Roboto;
				font-size: 1rem;
			}

			ul
			{
				display: flex;
				align-items: center;
				justify-content: space-around;

				height: 20%;
				width: 100%;

				overflow-x: auto;

				li
				{
					list-style: none;

					font-family: Ubuntu;
					color: #fff;
					border-radius: 100rem;

					padding: 0.5rem;
					font-size: 1rem;
				}
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

			.nameLogo
			{
				h1
				{
					font-size: 4rem;
				}

				.img
				{
					width: calc(20vh * 0.85 * 0.9);
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
			margin-top: calc(20vh + 5rem);

			padding: 2rem;
			padding-top: 4rem;
		}
	}
`

export default Container