import styled from 'styled-components'

const Container = styled.div`
	header
	{
		border-bottom: rgba(123,123,123,0.25) 2px solid;

		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: center;

		padding: 1rem;
		padding-left: 5rem;
		padding-right: 5rem;

		h1
		{
			font-size: 5rem;
			font-family: Ubuntu;
			font-weight: 700;
		}

		.info
		{
			width: 100%;

			display: flex;
			align-items: center;
			justify-content: space-between;

			color: ${p => p.theme.colors.textLight};

			.calendarTime
			{
				display: flex;
				gap: 2rem;

				span
				{
					display: flex;
					align-items: center;
					gap: 1rem;

					h3
					{
						font-size: 1.5rem;
						font-family: Ubuntu;
						font-weight: 400;
					}
				}
			}

			.author
			{
				display: flex;
				align-items: center;
				gap: 1rem;

				h3
				{
					font-size: 1.5rem;
					font-family: Ubuntu;
					font-weight: 400;
				}

				span
				{
					background-color: #fff;

					display: flex;
					align-items: center;
					gap: 1rem;

					padding: 0.5rem;
					border-radius: 25rem;

					h2
					{
						font-size: 1.5rem;
						color: ${p => p.theme.colors.text};

						font-family: Ubuntu;
						font-weight: 700;
					}

					img
					{
						border-radius: 25rem;
					}
				}
			}
		}
	}

	.mainContainer
	{
		display: flex;

		main
		{
			width: calc(100% - 350px);
			padding: 2rem;

			display: flex;
			flex-direction: column;
			gap: 1rem;

			.description
			{
				font-size: 2rem;
				font-family: Roboto;
			}

			img
			{
				max-width: 80%;
			}

			.markdown
			{
				font-size: 1.5rem;
				font-family: Roboto;

				div
				{
					display: flex;
					flex-direction: column;
					gap: 1rem;
				}

				ol, ul
				{
					margin-left: 5rem;
				}

				a
				{
					text-decoration: none;
					color: ${p => p.theme.colors.primary};

					transition: 0.25s;

					:hover
					{
						/* transform: scale(1.01); */
						font-size: 1.6rem;
					}
				}
			}
		}

		aside
		{
			width: 350px;
		}
	}
`

export default Container