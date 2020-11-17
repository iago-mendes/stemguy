import styled from 'styled-components'

const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;

	width: 100%;

	.center
	{
		display: flex;
		flex-direction: column;
		gap: 0.5rem;

		width: 75%;
		height: auto;

		a
		{
			font-size: 1rem;
			font-family: Roboto;

			color: ${p => p.theme.colors.textLight};
			text-decoration: none;

			transition: 0.25s;

			:hover
			{
				color: ${p => p.theme.colors.primary};
			}
		}
	}
`

export default Container