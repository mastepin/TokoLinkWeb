import React from "react"
import "../../App.css"
import Header from "../../components/header"
import beras from "../../images/beras.jpg"

function cart() {
	return (
		<div className='App bg-gray-100'>
			<Header />
			<div className='p-20 pb-10 pt-32'>
				<div id='myCart' className='w-full'>
					<div className='flex'>
						<div className='w-1/2'>
							<h3 id='sectionTitle' className='font-bold text-lg'>
								Keranjang <span className='font-normal'>Saya</span>
							</h3>
							<div className='py-4 px-2 my-8 bg-blue-200 rounded-lg mb-4 shadow-lg hover:shadow-xl'>
								<h4 className='font-bold text-lg mb-4'>Toko Wira Ekonomi</h4>
								<div className='px-4'>
									<div
										id='product-items'
										className='block flex items-center mb-4'>
										<img
											className='h-24 w-24 inline-block rounded-lg border border-blue-300 mr-8'
											src={beras}
										/>
										<div className='inline-block'>
											<p className='font-bold font-md'>Beras Mahal</p>
											<p className='font-regular font-sm'>
												Ukuran 5kg per bungkus
											</p>
											<p className='font-bold font-lg'>Rp54000</p>
										</div>
									</div>
									<div
										id='product-items'
										className='block flex items-center mb-4'>
										<img
											className='h-24 w-24 inline-block rounded-lg border border-blue-300 mr-8'
											src={beras}
										/>
										<div className='inline-block'>
											<p className='font-bold font-md'>Beras Mahal</p>
											<p className='font-regular font-sm'>
												Ukuran 5kg per bungkus
											</p>
											<p className='font-bold font-lg'>Rp54000</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className='w-1/2'>
							<div className='px-4'>
								<h4 className='font-bold text-lg mb-4'>Metode Pengiriman</h4>
								<div className='px-4'>
									<div className='flex items-center'>
										<input
											type='radio'
											name='metode_pengiriman'
											value='takeaway'
											className='mr-4'
										/>
										<div className='label-input'>
											<label className='font-bold'>
												Ambil di tempat
												<span className='block text-xs font-normal'>
													Tunjukan order ID kepada penjual
												</span>
											</label>
										</div>
									</div>
									<div className='flex items-center'>
										<input
											type='radio'
											name='metode_pengiriman'
											value='delivery'
											className='mr-4'
										/>
										<div className='label-input'>
											<label className='font-bold'>
												Delivery
												<span className='block text-xs font-normal'>
													Pilih layanan pengiriman berikut
												</span>
											</label>
										</div>
										<select
											name='kirim'
											className='text-right w-1/2 shadow-lg p-1 ml-8 float-right'>
											<option>Gojek</option>
											<option>Grab</option>
										</select>
									</div>
									<div id='alamat' className='mt-4 ml-8'>
										<h4 className='text-xs font-bold flex-1'>
											Alamat pengiriman
										</h4>
										<hr className='my-2' />
										<p className='font-bold text-xs'>
											Kelvin Kurniawan (082226720813)
										</p>
										<p className='font-normal text-xs mb-4'>
											Jl. Baru (warung perempatan Jl.baru),Bancakan, Sidorejo
											Lor, Salatiga Sidorejo, Kota Salatiga, 50714
										</p>
										<a
											href='#'
											className='bg-red-500 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-red-700 hover:shadow-xl'>
											Ganti Alamat
										</a>
									</div>
								</div>
								<h4 className='font-bold text-lg mb-4 mt-8'>
									Metode Pembayaran
								</h4>
								<div className='px-4'>
									<div className='flex items-center'>
										<input
											type='radio'
											name='metode_pembayaran'
											value='takeaway'
											className='mr-4'
										/>
										<div className='label-input'>
											<label className='font-bold'>
												Link<span className='font-normal'>Points</span>
												<span className='block text-xs font-normal'>
													Anda berpotensi mendapat cashback 10%
												</span>
											</label>
										</div>
									</div>
									<div className='flex items-center'>
										<input
											type='radio'
											name='metode_pembayaran'
											value='delivery'
											className='mr-4'
										/>
										<div className='label-input'>
											<label className='font-bold'>
												Cash
												<span className='block text-xs font-normal'>
													Bayar langsung ditempat
												</span>
											</label>
										</div>
									</div>
									<div className='flex items-center'>
										<input
											type='radio'
											name='metode_pembayaran'
											value='delivery'
											className='mr-4'
										/>
										<div className='label-input'>
											<label className='font-bold'>
												Kasbon
												<span className='block text-xs font-normal'>
													Beli sekarang bayar bulan depan
												</span>
											</label>
										</div>
									</div>
								</div>
								<div className='product-checkout p-4 border rounded-lg shadow-lg hover:shadow-xl mt-4'>
									<div id='subTotal' className='flex justify-between'>
										<p className='font-normal text-sm'>Total Belanja</p>
										<p className='font-bold text-sm'>Rp108.000</p>
									</div>
									<div id='discount' className='flex justify-between'>
										<p className='font-normal text-sm'>
											Potongan
											<span className='font-bold text-xs text-green-700 ml-2'>
												-20% member baru
											</span>
										</p>
										<p className='font-bold text-sm'>Rp21.600</p>
									</div>
									<div id='discount' className='flex justify-between'>
										<p className='font-normal text-sm'>
											Potongan
											<span className='font-bold text-xs text-green-700 ml-2'>
												-10% menggunakan LinkPoints
											</span>
										</p>
										<p className='font-bold text-sm'>Rp17.280</p>
									</div>
									<div id='afterDisc' className='flex justify-end'>
										<p className='font-bold text-sm'>Rp69.120</p>
									</div>
									<div id='Ongkir' className='flex justify-between'>
										<p className='font-normal text-sm'>Ongkos kirim</p>
										<p className='font-bold text-sm'>Rp8.000</p>
									</div>
									<div id='BiayaLayanan' className='flex justify-between'>
										<p className='font-normal text-sm'>Biaya Layanan</p>
										<p className='font-bold text-sm'>Rp5.000</p>
									</div>
									<div id='Total' className='flex justify-between'>
										<p className='font-normal text-sm'>Harus dibayar</p>
										<p className='font-bold text-sm'>Rp82.120</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className='flex justify-end mt-8'>
						<a
							href='#'
							className='primary-color text-white px-4 py-2 rounded-lg shadow-lg hover:shadow-xl hover:bg-blue-700'>
							Selesaikan order
						</a>
					</div>
				</div>
			</div>
		</div>
	)
}

export default cart
