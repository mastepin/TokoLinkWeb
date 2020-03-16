import React from "react"
import "../../App.css"
import Header from "../../components/header"

export default class NotFound extends React.Component {
	constructor(props) {
		super(props)

		this.state = {}
	}

	render() {
		return (
			<div>
				<Header />
				<div className='flex h-full w-full items-center justify-center py-48'>
					<h1 className='text-6xl font-regular'>404 Not Found</h1>
				</div>
			</div>
		)
	}
}
