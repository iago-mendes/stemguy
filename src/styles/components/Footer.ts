import styled from 'styled-components'

const Container = styled.footer`
	background-color: ${p => p.theme.colors.primary};
	padding-top: 3rem;
	padding-bottom: 3rem;

	display: flex;
	justify-content: space-around;
	
	*
	{
		color: ${p => p.theme.colors.background};
		font-family: Ubuntu
	}

	.group
	{
		display: flex;
		flex-direction: column;
		gap: 1.25rem;

		h1
		{
			font-weight: 700;
			font-size: 2.5rem;

			border-left: ${p => p.theme.colors.background} 5px solid;
			padding-left: 1rem;
		}

		a
		{
			margin-left: 2rem;
			text-decoration: none;
		}

		.link
		{
			font-size: 1.75rem;
			width: fit-content;

			::after
			{
				content: '';
				width: 0px;
				height: 2px;
				display: block;
				background: ${p => p.theme.colors.background};
				transition: 0.25s;
			}
			:hover::after
			{
				width: 100%;
			}
		}

		.social
		{
			display: flex;
			align-items: center;
			gap: 0.5rem;

			transition: 0.25s;

			:hover
			{
				text-shadow: 0 0 5px ${p => p.theme.colors.background};
				transform: scale(1.05);
			}

			span
			{
				font-size: 1.5rem;
			}
		}
	}
`

export default Container