import styled from 'styled-components'

interface ContainerProps
{
	width: number
	height: number
}

const Container = styled.div<ContainerProps>`
	border: ${p => p.theme.colors.primary} solid 1px;
	border-radius: 0.5rem;

	width: fit-content;
	height: fit-content;

	padding: 0.5rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	h1
	{
		margin-top: -10px;
		background-color: ${p => p.theme.colors.background};

		padding-left: 1rem;
		padding-right: 1rem;

		font-family: Roboto;
		font-size: 1rem;
	}

	.ad
	{
		background-color: green;
	}
`

export default Container