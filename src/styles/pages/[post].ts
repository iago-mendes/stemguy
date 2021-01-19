import styled from 'styled-components'

interface ContainerProps
{
	inDesktop: boolean
}

const Container = styled.div<ContainerProps>`
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
			width: ${p => p.inDesktop ? 'calc(100% - 350px)' : '100%'};
			/* width: calc(100% - 350px); */
			/* width: 100%; */
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
					font-weight: 700;

					:hover
					{
						text-decoration: underline;
					}
				}

				.imageLink
				{
					font-size: 1rem;
					color: ${p => p.theme.colors.textLight};
					font-weight: 400;

					:hover
					{
						color: ${p => p.theme.colors.primary};
						text-decoration: none;
					}
				}
			}
		}

		aside
		{
			display: flex;
			flex-direction: column;
			align-items: flex-end;
			justify-content: space-around;

			width: 350px;

			overflow: hidden;
		}
	}

	@media (max-width: 700px)
	{
		header
		{
			padding: 1rem;
			gap: 1rem;

			h1
			{
				font-size: 4rem;
			}

			.info
			{
				flex-direction: column;
				align-items: flex-start;
				gap: 1rem;

				.calendarTime
				{
					flex-direction: column;
					gap: 1rem;
				}

				.author
				{
					margin-left: 0.5rem;
				}
			}
		}
	}
`

export default Container