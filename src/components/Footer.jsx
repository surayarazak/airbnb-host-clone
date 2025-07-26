import React, { useState, useEffect } from "react";
import { BiGlobe, BiLogoFacebookCircle } from "react-icons/bi";
import { FaXTwitter, FaInstagram } from "react-icons/fa6";

export default function Footer() {
	return (
		<footer className="bg-secondary-500 border-t border-gray-200 text-sm text-gray-600 leading-[18px]">
			<div className="xl:max-w-7xl md:max-w-2xl sm:max-w-[23.5rem] sm:px-0 px-6 mx-auto py-6">
				<div className="space-y-2 xl:mb-10 mb-6 leading-5">
					<p>
						Hos di Rangkaian Hos Bersama biasanya mempunyai
						penarafan yang tinggi, kadar pembatalan yang rendah, dan
						pengalaman yang mantap sebagai hos Airbnb. Penarafan
						dibuat berdasarkan ulasan tetamu untuk penyenaraian yang
						dihoskan oleh mereka atau dihoskan bersama dan mungkin
						tidak mewakili perkhidmatan unik hos bersama.
					</p>
					<p>
						Rangkaian Hos Bersama dikuasakan oleh Airbnb Global
						Services Limited, Airbnb Living LLC dan Airbnb
						Plataforma Digital Ltda. Tersedia di lokasi terpilih
						sahaja.<br></br>
						<a
							href="#"
							className="underline text-gray-700 hover:text-gray-900">
							Ketahui lebih lanjut
						</a>
						.
					</p>
				</div>
			</div>
			<div className="xl:max-w-[84rem] md:max-w-[44.5rem] sm:max-w-[23.5rem] sm:px-0 px-6 mx-auto">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-800 md:divide-y-0 divide-y divide-gray-200">
					<div>
						<h3 className="font-[500] mb-5">Sokongan</h3>
						<ul className="md:space-y-5 space-y-4">
							<li>
								<a href="#" className="hover:underline">
									Pusat Bantuan
								</a>
							</li>
							<li>
								<a href="#" className="hover:underline">
									AirCover
								</a>
							</li>
							<li>
								<a href="#" className="hover:underline">
									Anti diskriminasi
								</a>
							</li>
							<li>
								<a href="#" className="hover:underline">
									Sokongan ketidakupayaan
								</a>
							</li>
							<li>
								<a href="#" className="hover:underline">
									Pilihan pembatalan
								</a>
							</li>
							<li>
								<a href="#" className="hover:underline">
									Laporkan kebimbangan kejiranan
								</a>
							</li>
						</ul>
					</div>
					<div className="md:pt-0 pt-7">
						<h3 className="font-[500] mb-5">Menjadi hos</h3>
						<ul className="md:space-y-5 space-y-4">
							<li>
								<a href="#" className="hover:underline">
									Sewakan rumah anda di Airbnb
								</a>
							</li>
							<li>
								<a href="#" className="hover:underline">
									Tawarkan pengalaman anda di Airbnb
								</a>
							</li>
							<li>
								<a href="#" className="hover:underline">
									Tawarkan perkhidmatan anda di Airbnb
								</a>
							</li>
							<li>
								<a href="#" className="hover:underline">
									AirCover untuk Hos
								</a>
							</li>
							<li>
								<a href="#" className="hover:underline">
									Sumber maklumat pengehosan
								</a>
							</li>
							<li>
								<a href="#" className="hover:underline">
									Forum komuniti
								</a>
							</li>
							<li>
								<a href="#" className="hover:underline">
									Menjadi hos bertanggungjawab
								</a>
							</li>
							<li>
								<a href="#" className="hover:underline">
									Sertai kelas pengehosan percuma
								</a>
							</li>
							<li>
								<a href="#" className="hover:underline">
									Cari hos bersama
								</a>
							</li>
						</ul>
					</div>
					<div className="md:pt-0 pt-7">
						<h3 className="font-[500] mb-5">Airbnb</h3>
						<ul className="md:space-y-5 space-y-4">
							<li>
								<a href="#" className="hover:underline">
									Keluaran Musim Panas 2025
								</a>
							</li>
							<li>
								<a href="#" className="hover:underline">
									Bilik berita
								</a>
							</li>
							<li>
								<a href="#" className="hover:underline">
									Kerjaya
								</a>
							</li>
							<li>
								<a href="#" className="hover:underline">
									Pelabur
								</a>
							</li>
							<li>
								<a href="#" className="hover:underline">
									Inap kecemasan Airbnb.org
								</a>
							</li>
						</ul>
					</div>
				</div>

				<div className="border-t border-gray-100 sm:mt-12 mt-6 py-6 flex flex-col-reverse lg:flex-row sm:gap-y-2 gap-y-4 justify-between lg:items-center text-sm text-gray-800 leading-[18px]">
					<div className="flex flex-wrap items-center gap-2 p-1">
						<span>© 2025 Airbnb, Inc.</span>
						<span>·</span>
						<a href="#" className="hover:underline">
							Privasi
						</a>
						<span>·</span>
						<a href="#" className="hover:underline">
							Terma
						</a>
						<span>·</span>
						<a href="#" className="hover:underline">
							Peta tapak
						</a>
					</div>
					<div className="flex sm:flex-row flex-col sm:items-center lg:space-x-5 sm:space-y-0 space-y-4 justify-between font-[500]">
						<div className="flex items-center space-x-5">
							<span className="flex gap-x-2 p-0.5">
								<BiGlobe size={18} /> Melayu (MY)
							</span>
							<div className="space-x-2">
								<span>RM</span>
								<span>MYR</span>
							</div>
						</div>
						<div className="flex items-center space-x-5">
							<a href="#">
								<BiLogoFacebookCircle size={18} />
							</a>
							<a href="#">
								<FaXTwitter size={18} />
							</a>
							<a href="#">
								<FaInstagram size={18} />
							</a>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
