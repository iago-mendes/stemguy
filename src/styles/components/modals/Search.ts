import styled from 'styled-components'

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	gap: 2rem;

	.close
	{
		position: fixed;
		top: 0.5rem;
		right: 2rem;

		height: 4rem;
		width: 4rem;
		border-radius: 100rem;

		background-color: ${p => p.theme.colors.primary};
		border: none;

		display: flex;
		align-items: center;
		justify-content: center;

		color: ${p => p.theme.colors.background};
	}

	form
	{

		background-color: #fff;
		color: ${p => p.theme.colors.primary};
		border-radius: 100rem;

		display: flex;
		align-items: center;
		justify-content: flex-start;

		padding-right: 1rem;
		padding-left: 1rem;
		gap: 0.5rem;

		height: 4rem;
		width: 90vw;

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

			color: ${p => p.theme.colors.primary};
		}
	}

	.submit
	{
		border: none;
		background-color: ${p => p.theme.colors.primary};

		border-radius: 100rem;
		padding: 1rem;
		padding-left: 2rem;
		padding-right: 2rem;

		display: flex;
		align-items: center;
		gap: 1rem;

		color: ${p => p.theme.colors.background};

		span
		{
			font-family: Ubuntu;
			font-size: 2rem;
			font-weight: 700;
		}
	}
`

export default Container