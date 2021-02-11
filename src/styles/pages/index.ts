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

	main
	{
		height: fit-content;
		min-height: 70vh;
		padding: 5rem;

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
			box-shadow: 2px 2px 5px rgba(0,0,0,0.5);

			:hover
			{
				background-color: ${p => p.theme.colors.primary};
				color: #fff;
				border-radius: 0;

				.img img
				{
					border-radius: 0;
				}
			}

			.img
			{
				width: 100%;
				height: 40%;
				overflow: hidden;

				img
				{
					border-radius: 1rem;
					transition: 0.25s;
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

			.scroll
			{
				width: 100%;
				height: 20%;
				overflow-x: auto;

				::-webkit-scrollbar
				{
					height: 0.75rem;
				}

				::-webkit-scrollbar-track
				{
					box-shadow: inset 0 0 0.5rem rgba(0,0,0,0.25);
					border-radius: 1rem;
				}

				::-webkit-scrollbar-thumb
				{
					background: ${p => p.theme.colors.textLight}80;
					border-radius: 1rem;
				}

				ul
				{
					height: 100%;
					min-width: 100%;

					padding-left: 2rem;
					padding-right: 2rem;

					display: flex;
					align-items: center;
					justify-content: space-between;
					gap: 2rem;

					li
					{
						list-style: none;

						font-family: Ubuntu;
						font-weight: 700;
						color: #fff;
						border-radius: 0.75rem;

						padding: 0.5rem;
						font-size: 1rem;
						white-space: nowrap;
					}
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