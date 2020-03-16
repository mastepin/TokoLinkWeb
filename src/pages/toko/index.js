import React from "react"
import "../../App.css"
import beras from "../../images/beras.jpg"
import Header from "../../components/header"

export default class Toko extends React.Component {
	constructor(props) {
		super(props)

		this.state = {}
	}

	render() {
		return (
			<div>
				<Header />
				<div className='h-full w-full p-20 pb-10 pt-32'>
					<h1 className='font-bold text-xl'>Toko Bu Mitro</h1>
					<div className='w-full'>
						<div className='w-1/4 p-4 pl-0 inline-block float-left'>
							<div className='bg-white rounded-lg p-6 shadow text-center hover:shadow-xl cursor-pointer'>
								<div className='text-left'>
									<h2 className='text-md font-medium mb-2'>Beras Kiloan</h2>
								</div>
								<img
									className='h-16 w-16 md:h-24 md:w-24 rounded-full m-auto'
									src={beras}
								/>
								<div className='flex justify-between'>
									<p className='text-left text-xs'>Harga </p>
									<p className='text-left text-xs font-bold'>Rp54.000</p>
								</div>
								<div className='flex justify-between'>
									<p className='text-left text-xs'>Kategori </p>
									<p className='text-left text-xs font-bold'>Bahan pangan</p>
								</div>
								<div className='flex justify-between mb-8'>
									<p className='text-left text-xs'>Berat </p>
									<p className='text-left text-xs font-bold'>5kg</p>
								</div>
								<a
									href='#'
									className='w-full block text-center text-white primary-color py-2 rounded-lg shadow-lg hover:bg-blue-600 hover:shadow-xl'>
									Tambah ke keranjang
								</a>
							</div>
						</div>{" "}
						<div className='w-1/4 p-4 pl-0 inline-block float-left'>
							<div className='bg-white rounded-lg p-6 shadow text-center hover:shadow-xl cursor-pointer'>
								<div className='text-left'>
									<h2 className='text-md font-medium mb-2'>Beras Kiloan</h2>
								</div>
								<img
									className='h-16 w-16 md:h-24 md:w-24 rounded-full m-auto'
									src={beras}
								/>
								<div className='flex justify-between'>
									<p className='text-left text-xs'>Harga </p>
									<p className='text-left text-xs font-bold'>Rp54.000</p>
								</div>
								<div className='flex justify-between'>
									<p className='text-left text-xs'>Kategori </p>
									<p className='text-left text-xs font-bold'>Bahan pangan</p>
								</div>
								<div className='flex justify-between mb-8'>
									<p className='text-left text-xs'>Berat </p>
									<p className='text-left text-xs font-bold'>5kg</p>
								</div>
								<a
									href='#'
									className='w-full block text-center text-white primary-color py-2 rounded-lg shadow-lg hover:bg-blue-600 hover:shadow-xl'>
									Tambah ke keranjang
								</a>
							</div>
						</div>{" "}
						<div className='w-1/4 p-4 pl-0 inline-block float-left'>
							<div className='bg-white rounded-lg p-6 shadow text-center hover:shadow-xl cursor-pointer'>
								<div className='text-left'>
									<h2 className='text-md font-medium mb-2'>Beras Kiloan</h2>
								</div>
								<img
									className='h-16 w-16 md:h-24 md:w-24 rounded-full m-auto'
									src={beras}
								/>
								<div className='flex justify-between'>
									<p className='text-left text-xs'>Harga </p>
									<p className='text-left text-xs font-bold'>Rp54.000</p>
								</div>
								<div className='flex justify-between'>
									<p className='text-left text-xs'>Kategori </p>
									<p className='text-left text-xs font-bold'>Bahan pangan</p>
								</div>
								<div className='flex justify-between mb-8'>
									<p className='text-left text-xs'>Berat </p>
									<p className='text-left text-xs font-bold'>5kg</p>
								</div>
								<a
									href='#'
									className='w-full block text-center text-white primary-color py-2 rounded-lg shadow-lg hover:bg-blue-600 hover:shadow-xl'>
									Tambah ke keranjang
								</a>
							</div>
						</div>
						<div className='w-1/4 p-4 pl-0 inline-block float-left'>
							<div className='bg-white rounded-lg p-6 shadow text-center hover:shadow-xl cursor-pointer'>
								<div className='text-left'>
									<h2 className='text-md font-medium mb-2'>Beras Kiloan</h2>
								</div>
								<img
									className='h-16 w-16 md:h-24 md:w-24 rounded-full m-auto'
									src={beras}
								/>
								<div className='flex justify-between'>
									<p className='text-left text-xs'>Harga </p>
									<p className='text-left text-xs font-bold'>Rp54.000</p>
								</div>
								<div className='flex justify-between'>
									<p className='text-left text-xs'>Kategori </p>
									<p className='text-left text-xs font-bold'>Bahan pangan</p>
								</div>
								<div className='flex justify-between mb-8'>
									<p className='text-left text-xs'>Berat </p>
									<p className='text-left text-xs font-bold'>5kg</p>
								</div>
								<a
									href='#'
									className='w-full block text-center text-white primary-color py-2 rounded-lg shadow-lg hover:bg-blue-600 hover:shadow-xl'>
									Tambah ke keranjang
								</a>
							</div>
						</div>
						<div className='w-1/4 p-4 pl-0 inline-block float-left'>
							<div className='bg-white rounded-lg p-6 shadow text-center hover:shadow-xl cursor-pointer'>
								<div className='text-left'>
									<h2 className='text-md font-medium mb-2'>Beras Kiloan</h2>
								</div>
								<img
									className='h-16 w-16 md:h-24 md:w-24 rounded-full m-auto'
									src={beras}
								/>
								<div className='flex justify-between'>
									<p className='text-left text-xs'>Harga </p>
									<p className='text-left text-xs font-bold'>Rp54.000</p>
								</div>
								<div className='flex justify-between'>
									<p className='text-left text-xs'>Kategori </p>
									<p className='text-left text-xs font-bold'>Bahan pangan</p>
								</div>
								<div className='flex justify-between mb-8'>
									<p className='text-left text-xs'>Berat </p>
									<p className='text-left text-xs font-bold'>5kg</p>
								</div>
								<a
									href='#'
									className='w-full block text-center text-white primary-color py-2 rounded-lg shadow-lg hover:bg-blue-600 hover:shadow-xl'>
									Tambah ke keranjang
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
