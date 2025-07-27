import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Section1 from "../../components/Home/Section1";
import Section2 from "../../components/Home/Section2";
import Section3 from "../../components/Home/Section3";
import Section4 from "../../components/Home/Section4";
import MobileHeader from "../../components/MobileHeader";
import { IoSearch } from "react-icons/io5";
import { useRef, useState, useEffect } from "react";
import MapView from "../../components/Map";

export default function Home() {
	const trackRef = useRef(null);
	const [percentage, setPercentage] = useState(60);
	const [isDragging, setIsDragging] = useState(false);

	const handleMouseDown = () => {
		setIsDragging(true);
	};

	const handleMouseUp = () => {
		setIsDragging(false);
	};

	const handleMouseMove = (e) => {
		if (!isDragging || !trackRef.current) return;

		const track = trackRef.current;
		const rect = track.getBoundingClientRect();
		const offsetX = e.clientX - rect.left;
		const newPercentage = Math.min(
			100,
			Math.max(0, (offsetX / rect.width) * 100)
		);
		setPercentage(newPercentage);
	};

	useEffect(() => {
		if (isDragging) {
			window.addEventListener("mousemove", handleMouseMove);
			window.addEventListener("mouseup", handleMouseUp);
		} else {
			window.removeEventListener("mousemove", handleMouseMove);
			window.removeEventListener("mouseup", handleMouseUp);
		}
		return () => {
			window.removeEventListener("mousemove", handleMouseMove);
			window.removeEventListener("mouseup", handleMouseUp);
		};
	}, [isDragging]);

	return (
		<>
			<Header />
			<MobileHeader />
			<div className="bg-white">
				<div className="max-w-7xl mx-auto pt-20 xl:pb-[120px] pb-[72px]">
					<div className="grid xl:grid-cols-2 grid-cols-1">
						<div className="xl:px-0 lg:px-40 md:px-32 px-6">
							<h2 className="xl:text-[60px] md:text-[56px] text-[40px] font-semibold text-center md:leading-[4rem] text-gray-950 tracking-[-0.03em] leading-[2.3rem] xl:pb-6 md:pb-4 pb-6 xl:px-10 lg:px-24">
								Kediaman anda boleh menjana pendapatan <br></br>
								<span>RM1,508 di Airbnb</span>
							</h2>
							<div className="xl:mb-14 mb-10 md:px-20 px-8 text-center">
								<div className="flex items-center space-x-2 justify-center">
									<span className="font-medium underline text-gray-950">
										7 malam
									</span>
									<span className="text-gray-950 font-medium">
										• RM215/malam
									</span>
								</div>
								<p className="text-gray-600 mb-4 text-sm">
									Ketahui cara kami{" "}
									<button className="text-gray-900 underline hover:text-rose-500 transition-colors">
										menganggar pendapatan
									</button>
								</p>
							</div>

							{/* Price Range Slider */}
							<div className="xl:mb-16 mb-10 lg:px-40 md:px-20 px-10">
								<div className="relative" ref={trackRef}>
									{/* Track background */}
									<div
										className={`w-full ${
											isDragging ? "h-2" : "h-1"
										} bg-gray-200 rounded-full transition-all duration-150`}>
										{/* Filled progress bar */}
										<div
											className={`${
												isDragging ? "h-2" : "h-1"
											} bg-gradient-to-r from-primary-500 to-primary-400 rounded-full`}
											style={{
												width: `${percentage}%`,
											}}></div>
									</div>

									{/* Draggable handle */}
									<div
										className="absolute top-0 w-8 h-8 bg-secondary-300 shadow-lg rounded-full transform -translate-y-4 cursor-pointer"
										style={{
											left: `${percentage}%`,
											transform: "translate(-50%, -1rem)",
										}}
										onMouseDown={handleMouseDown}></div>
								</div>
							</div>

							{/* Search Bar */}
							<div className="relative xl:mb-8 mb-12 lg:px-24 cursor-pointer">
								<div className="flex items-center bg-white border border-gray-200 rounded-full md:px-6 px-4 md:py-4 py-3 shadow-sm hover:shadow-md transition-shadow text-sm">
									<IoSearch className="h-5 w-5 text-primary-500 mr-3" />
									<div className="flex-1 md:block hidden">
										<span className="font-medium text-gray-900">
											Kuala Lumpur
										</span>
										<span className="text-gray-500 ml-2">
											• Seluruh kediaman • 2 bilik tidur
										</span>
									</div>
									<div className="flex flex-col md:hidden">
										<span className="font-medium text-gray-900">
											Kuala Lumpur
										</span>
										<span className="text-gray-500 md:ml-2">
											Seluruh kediaman • 2 bilik tidur
										</span>
									</div>
								</div>
							</div>
						</div>
						<div className="map-container h-[400px] xl:h-full xl:px-0 lg:px-44 md:px-24 px-6">
							<MapView />
						</div>
					</div>
				</div>
			</div>
			<Section1 />
			<Section2 />
			<Section3 />
			<Section4 />
			<Footer />
		</>
	);
}
