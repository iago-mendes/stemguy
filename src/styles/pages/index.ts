import styled from 'styled-components'

const Container = styled.div`
	overflow-y: hidden;

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
			z-index: 2;

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
				font-weight: 700;
				font-size: 2rem;
				color: ${p => p.theme.colors.primary};
			}
		}
	}

	.scroll
	{
		width: 100%;
		height: 50vh;
		overflow-y: auto;

		main
		{
			padding: 5rem;
			height: fit-content;

			display: grid;
			grid-auto-rows: 30rem;
			grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr));
			grid-gap: 2rem;
			align-items: center;
			justify-items: center;

			.post
			{
				z-index: 1;

				background-color: #fff;
				width: 100%;
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

				.imgContainer
				{
					width: 100%;
					height: 50%;

					display: flex;
					align-items: center;
					justify-content: center;

					img
					{
						height: 100%;
					}
				}

				h1
				{
					max-height: 10%;

					font-family: Ubuntu;
					font-size: 2rem;
				}

				p
				{
					max-height: 20%;

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
					padding: 1rem;

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
	}
`

export default Container