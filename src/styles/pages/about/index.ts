import styled from 'styled-components'

const Container = styled.div`
	main
	{
		display: flex;
		align-items: center;
		justify-content: space-around;

		.logo
		{
			width: 30%;
		}

		.questionsAnswers
		{
			display: flex;
			flex-direction: column;
			gap: 2rem;

			width: 50%;

			.group
			{
				display: flex;
				flex-direction: column;
				gap: 1rem;

				label
				{
					font-family: Ubuntu;
					font-weight: 700;
					font-size: 3rem;

					color: ${p => p.theme.colors.primary};
					border-left: ${p => p.theme.colors.primary} 5px solid;
					padding-left: 1rem;
				}

				p
				{
					margin-left: 2rem;

					font-family: Roboto;
					font-weight: 700;
					font-size: 2rem;
				}
			}
		}
	}

	.team
	{
		display: flex;
		flex-direction: column;
		gap: 2rem;

		padding: 2rem;

		label
		{
			font-family: Ubuntu;
			font-weight: 700;
			font-size: 3rem;

			color: ${p => p.theme.colors.primary};
			border-left: ${p => p.theme.colors.primary} 5px solid;
			padding-left: 1rem;
		}

		ul
		{
			display: flex;
			flex-direction: column;
			gap: 2rem;

			.member
			{
				display: flex;
				align-items: center;
				justify-content: space-between;

				padding: 1rem;

				:nth-child(odd)
				{
					flex-direction: row-reverse;
					margin-left: 50rem;

					border-top-right-radius: 100rem;
					border-bottom-right-radius: 100rem;
					background-image: ${p => `linear-gradient(to left, ${p.theme.colors.primary}, ${p.theme.colors.background})`};
				}

				:nth-child(even)
				{
					flex-direction: row;
					margin-right: 50rem;

					border-top-left-radius: 100rem;
					border-bottom-left-radius: 100rem;
					background-image: ${p => `linear-gradient(to right, ${p.theme.colors.primary}, ${p.theme.colors.background})`};
				}

				.img
				{
					width: 40%;

					img
					{
						border-radius: 100rem;
					}
				}

				.info
				{
					width: 50%;

					display: flex;
					flex-direction: column;
					gap: 0.5rem;

					h1
					{
						font-family: Ubuntu;
						font-size: 3rem;
					}

					h2
					{
						font-family: Roboto;
						font-weight: 700;
						font-size: 2rem;
					}

					p
					{
						font-family: Roboto;
						font-size: 1.5rem;
						text-align: justify;
					}

					.topics
					{
						display: flex;
						align-items: center;
						justify-content: space-around;

						span
						{
							font-family: Ubuntu;
							font-weight: 700;
							font-size: 1.75rem;

							padding: 0.5rem;
							padding-left: 1rem;
							padding-right: 1rem;

							border: ${p => p.theme.colors.text} 2px solid;
							border-radius: 100rem;
						}
					}
				}
			}
		}
	}
`

export default Container