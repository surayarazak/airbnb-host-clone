import { useRef, useState, useEffect } from "react";
import VideoPlayer from "../../Video";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Button } from "@headlessui/react";
import { useNavigate } from "react-router-dom";

export default function Section3() {
	const videoRefs = useRef([]);
	const [currentPlayingIndex, setCurrentPlayingIndex] = useState(null);

	const handlePlay = (index) => {
		if (currentPlayingIndex !== null && currentPlayingIndex !== index) {
			const currentVideo = videoRefs.current[currentPlayingIndex];
			if (currentVideo) currentVideo.pause();
		}
		setCurrentPlayingIndex(index);
	};

	const videos = [
		{
			url: "https://stream.media.muscache.com/zloG6NYW02XHNHOQyQL1a2Nn00HCkEHHfp01vq6O00lPLUA.mp4?v_q=high",
			title: "Editor penyenaraian",
			desc: "Pamerkan setiap perincian penginapan anda",
			img1: "https://a0.muscache.com/im/mux/ukoDF7Dux6llMqUusOS7iwV02jrsavv01tbdcoY6009r9Y/thumbnail.jpg?time=0.0&im_w=1440",
			img2: "https://a0.muscache.com/im/mux/C9L9ARcUFQD1Um4LrkqjvW61vuQRpglTfkqzLhvGxaw/thumbnail.jpg?time=0.0&im_w=480",
		},
		{
			url: "https://stream.media.muscache.com/aWJrkS4U1OZPMEAYeaXgDMJG00GSW0046fXLrHi9eShF4.mp4?v_q=high",
			title: "Kalendar",
			desc: "Urus ketersediaan dan harga anda",
			img1: "https://a0.muscache.com/im/mux/DlhgZSLPkRqo1bpyCit01MEYX4lyNK02E6leOWv2Gnk8E/thumbnail.jpg?time=0.0&im_w=1440",
			img2: "https://a0.muscache.com/im/mux/2Ypw1XfOK9gqGQ02nkxkZLPnOi600ZThosblTuRCWCA3s/thumbnail.jpg?time=0.0&im_w=480",
		},
		{
			url: "https://stream.media.muscache.com/NS1z701ZgXNLeqkVNZ02U3cI4h1O4QbsRaNdBDgrsYcTc.mp4?v_q=high",
			title: "Mesej",
			desc: "Hantar mesej kepada tetamu dan sokongan dengan cepat",
			img1: "https://a0.muscache.com/im/mux/zu1NHh8G24eLNGQ2abpXhP6t900qI02j00JTRzWUfPDsso/thumbnail.jpg?time=0.0&im_w=1440",
			img2: "https://a0.muscache.com/im/mux/DKF1C3Do3DLz3VswD01CzFTh02aKBwPvpDWXL8RJyUGKQ/thumbnail.jpg?time=0.0&im_w=480",
		},
	];

	const responsive = {
		tablet: {
			breakpoint: { max: 1024, min: 0 },
			items: 1,
			partialVisibilityGutter: 60,
		},
	};

	function useIsMobile(maxWidth = 1024) {
		const [isMobile, setIsMobile] = useState(false);

		useEffect(() => {
			const checkSize = () => setIsMobile(window.innerWidth <= maxWidth);
			checkSize();
			window.addEventListener("resize", checkSize);
			return () => window.removeEventListener("resize", checkSize);
		}, [maxWidth]);

		return isMobile;
	}

	const isMobile = useIsMobile();

	const navigate = useNavigate();

	const handleClick = () => {
		navigate("#"); // replace with your actual route
	};

	return (
		<>
			<div className="bg-white xl:pb-[120px] md:pb-40 pb-16">
				<div className="xl:max-w-xl lg:max-w-md md:max-w-lg max-w-md mx-auto md:px-0 px-6">
					<div className="pb-14 md:pt-0 pt-12">
						<h2 className="xl:text-[60px] lg:text-[44px] md:text-[40px] text-[32px] font-semibold text-center xl:leading-[4rem] md:leading-[3rem] text-gray-950 tracking-[-0.03em] leading-10">
							Semua alat untuk menjadi hos, dalam satu aplikasi
						</h2>
					</div>
				</div>
				<div className="xl:max-w-7xl max-w-3xl mx-auto">
					{isMobile ? (
						<div className="w-full max-w-[93%] mx-auto md:max-w-[600px] md:h-[400px] h-full">
							<Carousel
								responsive={responsive}
								removeArrowOnDeviceType={["tablet"]}
								draggable={true}
								showDots={false}
								infinite
								partialVisible={true}
								itemClass="px-2">
								{videos.map((video, index) => (
									<div
										key={index}
										className="md:text-center text-left">
										{/* Tablet: show img1 */}
										<img
											src={video.img1}
											alt={video.title}
											className="hidden md:block rounded-xl" // md = 640px and above
										/>
										{/* Mobile: show img2 */}
										<img
											src={video.img2}
											alt={video.title}
											className="block md:hidden rounded-xl"
										/>
										<h3 className="mt-4 xl:text-lg text-base font-medium">
											{video.title}
										</h3>
										<p className="xl:text-base md:text-sm text-base text-gray-600">
											{video.desc}
										</p>
									</div>
								))}
							</Carousel>
						</div>
					) : (
						<div className="grid grid-cols-3 gap-x-5 xl:mx-[6.8rem]">
							{videos.map((video, index) => (
								<div key={index} className="text-center">
									<div className="bg-secondary-500 rounded-xl mb-6">
										<VideoPlayer
											index={index}
											videoRefs={videoRefs}
											onPlay={handlePlay}
											videoUrl={video.url}
										/>
									</div>
									<h3 className="mt-2 text-lg font-medium">
										{video.title}
									</h3>
									<p className="text-base text-gray-600">
										{video.desc}
									</p>
								</div>
							))}
						</div>
					)}
					<div className="md:hidden block mx-5 mt-9">
						<Button
							onClick={handleClick}
							className="relative overflow-hidden rounded-full bg-gray-950 xl:px-8 px-6 xl:py-4 py-3.5 xl:text-lg text-base font-normal text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-950 xl:w-[340px] md:w-[300px] w-full">
							Muat turun aplikasi Airbnb
						</Button>
					</div>
				</div>
			</div>
		</>
	);
}
