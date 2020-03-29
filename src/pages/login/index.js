import React from "react"
import "../../App.css"
import Header from "../../components/header"

export default class Login extends React.Component {
	constructor(props) {
		super(props)

		this.state = {}
	}

	render() {
		return (
			<div>
				<Header />
				<div className='flex h-full w-full items-center justify-center pt-32'>
					<h1 className='text-6xl font-regular'>Sign In</h1>
				</div>

				<form class='px-64 pt-6 pb-8 mb-4'>
					<div class='mb-4 px-40'>
						<label
							class='block text-gray-700 text-sm font-bold mb-2'
							for='username'>
							Username
						</label>
						<input
							class='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
							id='username'
							type='text'
							placeholder='Username'
						/>
					</div>
					<div class='mb-4 px-40'>
						<label
							class='block text-gray-700 text-sm font-bold mb-2'
							for='username'>
							Username
						</label>
						<input
							class='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
							id='password'
							type='password'
							placeholder='Password'
						/>
					</div>
					<div class='mb-4 px-40 text-right'>
						<button
							class='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
							type='button'>
							Sign In
						</button>
					</div>
				</form>
			</div>
		)
	}
}
