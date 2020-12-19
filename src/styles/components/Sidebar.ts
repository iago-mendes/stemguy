import styled from "styled-components";

interface ContainerProps
{
	isExpanded: boolean
	scrollingDown: boolean
}

const Container = styled.div<ContainerProps>`
  background-color: ${props => props.theme.colors.primary};
  height: 100vh;
  width: ${props => props.isExpanded ? '20rem' : '5rem'};

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;

	padding-top: 2rem;
	padding-bottom: 2rem;

	position: fixed;
	z-index: 100;
	left: 0;
	top: 0;
	bottom: 0;

	cursor: pointer;
	transition: 0.25s;

	img
	{
		background-color: #fff;
		border-radius: 100%;
		padding: 5px;

		width: ${props => props.isExpanded ? '15rem' : '4rem'};
		height: ${props => props.isExpanded ? '15rem' : '4rem'};

		transition: 0.25s;

		:hover
		{
			transform: ${props => props.isExpanded ? 'scale(1.05)' : 'scale(1.1)'};
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

		height: 4rem;
		width: ${p => p.isExpanded ? '90%' : '4rem'};

		transition: 0.25s;

		:hover
		{
			transform: ${props => props.isExpanded ? 'scale(1.05)' : 'scale(1.1)'};
		}

		input
		{
			width: 100%;
			height: 75%;

			outline: none;
			border: none;

			font-family: Ubuntu;
		}
	}

	@media (max-width: 1100px)
	{
		height: 5rem;
		width: 100vw;

		flex-direction: row;
		padding: 0;
		padding-left: 2rem;
		padding-right: 2rem;

		top: 0;
		bottom: unset;
		left: 0;
		right: 0;

		top: ${p => p.scrollingDown ? '-5rem' : '0'};

		img
		{
			width: 4rem;
			height: 4rem;
		}

		form
		{
			width: 4rem;
		}
	}
`

export default Container