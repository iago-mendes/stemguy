import styled from "styled-components";

interface ContainerProps
{
	isSearchExpanded: boolean
}

const Container = styled.nav<ContainerProps>`
  background-color: ${props => props.theme.colors.primary};
  height: 5rem;
	width: 100%;

	display: flex;
	align-items: center;
	justify-content: space-between;

	padding-left: 2rem;
	padding-right: 2rem;

	.logos
	{
		display: flex;
		align-items: center;
		gap: 1rem;

		cursor: pointer;
		transition: 0.25s;

		.icon
		{
			height: 4rem;
			width: 4rem;
			padding: 2px;

			background-color: #fff;
			border-radius: 100rem;
		}

		.name
		{
			height: 3.5rem;
		}

		:hover
		{
			transform: scale(1.07);
		}
	}

	form
	{

		background-color: #fff;
		border-radius: 2rem;

		display: flex;
		align-items: center;
		justify-content: flex-start;

		padding-right: 1rem;
		padding-left: 1rem;
		gap: 0.5rem;

		height: 3.5rem;
		width: ${p => p.isSearchExpanded ? '50rem' : '3.5rem'};

		transition: 0.25s;

		input
		{
			width: 100%;
			height: 100%;

			outline: none;
			border: none;
			background: none;

			font-family: Ubuntu;
			font-weight: 700;
			font-size: 1.75rem;
		}
	}
`

export default Container