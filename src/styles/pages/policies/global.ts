import styled from 'styled-components'

const Container = styled.div`
	padding: 2rem;

	main
	{
		font-family: Roboto;
		font-size: 1.5rem;

		h1, h2
		{
			margin-top: 1rem;
			margin-bottom: 0.5rem;
		}

		p
		{
			text-indent: 2rem;
		}

		ul li
		{
			margin-left: 5rem;
			list-style-type: disc;
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
	}
`

export default Container