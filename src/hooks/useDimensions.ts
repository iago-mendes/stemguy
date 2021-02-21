import {useEffect, useState} from 'react'

export default function useDimensions()
{
	const [width, setWidth] = useState(360)
	const [height, setHeight] = useState(640)
	
	const breakpoint = 1100
	const inMobile = width < breakpoint
	const inDesktop = width >= breakpoint
	
	useEffect(() =>
	{
		updateDimensions()
		window.addEventListener('resize', updateDimensions)

		return () => window.removeEventListener('resize', updateDimensions)
	}, [])

	function updateDimensions()
	{
		setWidth(window.innerWidth)
		setHeight(window.innerHeight)
	}

	return {width, height, inMobile, inDesktop}
}