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
	
`

export default Container