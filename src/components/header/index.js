import React from "react"
import "../../App.css"
import { Link } from "react-router-dom"

function header() {
	return (
		<nav className='flex items-center justify-between flex-wrap primary-color p-6 shadow-xl fixed w-full z-50'>
			<div className='flex items-center flex-shrink-0 text-white mr-6'>
				<svg
					className='fill-current h-8 w-8 mr-2'
					width='54'
					height='54'
					viewBox='0 0 54 54'
					xmlns='http://www.w3.org/2000/svg'>
					<path d='M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z' />
				</svg>
				<span className='font-semibold text-xl tracking-tight'>
					<Link to='/'>TokoLink</Link>
				</span>
			</div>
			<div className='block lg:hidden'>
				<button className='flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white'>
					<svg
						className='fill-current h-3 w-3'
						viewBox='0 0 20 20'
						xmlns='http://www.w3.org/2000/svg'>
						<title>Menu</title>
						<path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
					</svg>
				</button>
			</div>
			<div className='w-full block flex-grow lg:flex lg:items-center lg:w-auto'>
				<div className='text-sm lg:flex-grow'>
					<input
						className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-2/3 py-2 px-4 mr-8 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500'
						id='inline-full-name'
						type='text'
						placeholder='Beras kiloan ..'
					/>

					<Link
						to='/'
						className='block mt-4 lg:inline-block text-white lg:mt-0 hover:text-white mr-4'>
						Home
					</Link>
					<Link
						to='/link'
						className='block mt-4 lg:inline-block text-white lg:mt-0 hover:text-white mr-4'>
						Link
					</Link>
					<a
						href='#responsive-header'
						className='block mt-4 lg:inline-block text-white lg:mt-0 hover:text-white'>
						Near Me
					</a>
				</div>
				<div>
					<a
						href='#'
						className='inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0'>
						Get Apps
					</a>
				</div>
			</div>
		</nav>
	)
}

export default header
