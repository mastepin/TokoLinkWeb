import React from "react"
import { Map, GoogleApiWrapper, Marker } from "google-maps-react"
import "../../App.css"
import Header from "../../components/header"
import MapContainer from "./MapContainer"

export default class LinkPage extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div className='App bg-gray-100'>
				<Header />
				<div className='pb-10 pt-20'>
					<div id='myLink' className='w-full'>
						<MapContainer />

						<div className='fixed w-full p-2 bottom-0'>
							<div className='p-4 pl-0 w-1/4 inline-block'>
								<div className='bg-white rounded-lg p-6 shadow-xl text-center hover:shadow-2xl cursor-pointer'>
									<div className='text-left'>
										<h2 className='text-md font-bold mb-2'>
											Toko kelontong bu yayan
										</h2>
										<p className='font-normal font-sm'>
											Jalan Raya, no. 9, salatiga
										</p>
									</div>
								</div>
							</div>
							<div className='p-4 pl-0 w-1/4 inline-block'>
								<div className='bg-white rounded-lg p-6 shadow-xl text-center hover:shadow-2xl cursor-pointer'>
									<div className='text-left'>
										<h2 className='text-md font-bold mb-2'>
											Toko kelontong bu yayan
										</h2>
										<p className='font-normal font-sm'>
											Jalan Raya, no. 9, salatiga
										</p>
									</div>
								</div>
							</div>
							<div className='p-4 pl-0 w-1/4 inline-block'>
								<div className='bg-white rounded-lg p-6 shadow-xl text-center hover:shadow-2xl cursor-pointer'>
									<div className='text-left'>
										<h2 className='text-md font-bold mb-2'>
											Toko kelontong bu yayan
										</h2>
										<p className='font-normal font-sm'>
											Jalan Raya, no. 9, salatiga
										</p>
									</div>
								</div>
							</div>
							<div className='p-4 pl-0 w-1/4 inline-block'>
								<div className='bg-white rounded-lg p-6 shadow-xl text-center hover:shadow-2xl cursor-pointer'>
									<div className='text-left'>
										<h2 className='text-md font-bold mb-2'>
											Toko kelontong bu yayan
										</h2>
										<p className='font-normal font-sm'>
											Jalan Raya, no. 9, salatiga
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
