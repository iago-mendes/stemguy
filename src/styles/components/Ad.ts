import styled from 'styled-components'

interface ContainerProps
{
	width: number
	height: number
}

const Container = styled.div<ContainerProps>`
	display: flex;
	align-items: center;
	justify-content: center;
	
	.center
	{
		border: ${p => p.theme.colors.primary} solid 1px;
		border-radius: 0.5rem;

		width: fit-content;
		height: fit-content;

		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		position: relative;
		margin: 1rem;

		h1
		{
			position: absolute;
			top: -7px;
			z-index: 1;

			background-color: ${p => p.theme.colors.background};

			padding-left: 1rem;
			padding-right: 1rem;

			font-family: Roboto;
			font-size: 1rem;
		}

		.ad
		{
			z-index: 2;

			background-color: green;
			margin: 0.5rem;
		}
	}
`

export default Container