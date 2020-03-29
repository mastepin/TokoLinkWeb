import React from "react"
import "../../App.css"
import beras from "../../images/beras.jpg"
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
				<div className='font-bold text-xl pt-32 px-32'>Beras Kiloan</div>
				<div className='flex h-full w-full pt-8 px-32'>
					<div className='w-1/3'>
						<img src={beras} />
					</div>
					<div className='w-1/2'>
						<div className='flex'>
							<div className='w-1/2'>
								<p className='font-bold text-md'>Nama items</p>
							</div>
							<div className='w-1/2'>
								<p className='font-medium text-md'>Beras kiloan</p>
							</div>
						</div>
						<div className='flex'>
							<div className='w-1/2'>
								<p className='font-bold text-md'>Berat</p>
							</div>
							<div className='w-1/2'>
								<p className='font-medium text-md'>1 kg</p>
							</div>
						</div>
						<div className='flex'>
							<div className='w-1/2'>
								<p className='font-bold text-md'>Kategory</p>
							</div>
							<div className='w-1/2'>
								<p className='font-medium text-md'>Makanan pokok</p>
							</div>
						</div>
						<div className='flex'>
							<div className='w-1/2'>
								<p className='font-bold text-md'>Penjual</p>
							</div>
							<div className='w-1/2'>
								<p className='font-medium text-md'>Warung bumitro</p>
							</div>
						</div>
						<div className='flex'>
							<div className='w-1/2'>
								<p className='font-bold text-md'>Harga</p>
							</div>
							<div className='w-1/2'>
								<p className='font-medium text-md'>Rp11.000</p>
							</div>
						</div>
						<div className='flex pt-8'>
							<a
								href='#'
								className='primary-color text-white px-4 py-2 rounded-lg shadow-lg hover:shadow-xl hover:bg-blue-700'>
								Tambah ke keranjang
							</a>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
