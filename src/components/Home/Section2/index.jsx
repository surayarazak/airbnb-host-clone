import { FaCheck } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { Button } from "@headlessui/react";

export default function Section2() {
	const navigate = useNavigate();

	const handleClick = () => {
		navigate("#"); // replace with your actual route
	};
	return (
		<>
			<div className="bg-white">
				<div className="max-w-xl mx-auto">
					<div className="flex items-center justify-center pb-4">
						<img
							src="https://a0.muscache.com/im/pictures/canvas/Canvas-1727221287359/original/294c5903-fece-41a5-ab0d-006b32a95915.png?im_w=720"
							alt="Airbnb Cover Hos"
							className="object-cover md:w-[180px] w-[118px] h-auto"
						/>
					</div>
				</div>
				<div className="xl:max-w-2xl md:max-w-lg max-w-md mx-auto">
					<div className="md:px-4 px-[4.5rem]">
						<h2 className="xl:text-[60px] md:text-[44px] text-[32px] font-semibold text-center xl:leading-[4rem] md:leading-[3rem] text-gray-950 tracking-[-0.03em] leading-[2.3rem] xl:pb-6 md:pb-4 pb-2">
							Walau apa cara anda menjadi hos, anda dilindungi
						</h2>
					</div>
					<h4 className="xl:leading-9 xl:text-[24px] px-6 text-[18px] leading-[1.6rem] font-normal text-center text-gray-600 md:pb-14 pb-8">
						Perlindungan menyeluruh, disertakan setiap kali anda
						menjadi hos kediaman anda di Airbnb.
					</h4>
				</div>
				<div className="xl:max-w-2xl mx-auto xl:px-5 lg:px-60 sm:px-40 px-6">
					<div className="divide-y divive-gray-500 md:pb-14 pb-8">
						<div className="flex items-center justify-between xl:space-x-40 md:space-y-1 pt-5 pb-[19px] pr-3">
							<h1 className="xl:text-lg md:text-sm text-base text-gray-950 md:mr-0 mr-16">
								Perlindungan kerosakan sehingga USD3 juta
							</h1>
							<FaCheck size={21} className="text-green-600" />
						</div>
						<div className="flex items-center justify-between xl:space-x-40 md:space-y-1 pt-5 pb-[19px] pr-3">
							<h1 className="xl:text-lg md:text-sm text-base text-gray-950">
								Insurans liabiliti sehingga $1 juta
							</h1>
							<FaCheck size={21} className="text-green-600" />
						</div>
						<div className="flex items-center justify-between xl:space-x-40 md:space-y-1 pt-5 pb-[19px] pr-3">
							<h1 className="xl:text-lg md:text-sm text-base text-gray-950">
								Talian keselamatan 24 jam
							</h1>
							<FaCheck size={21} className="text-green-600" />
						</div>
					</div>
					<div className="flex justify-center md:pb-14 pb-8">
						<Button
							onClick={handleClick}
							className="relative overflow-hidden rounded-full bg-gray-950 xl:px-8 px-6 xl:py-4 py-3.5 xl:text-lg text-base font-normal text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-950 xl:w-[340px] md:w-[300px] w-full">
							Ketahui tentang AirCover
						</Button>
					</div>
				</div>
				<div className="max-w-2xl xl:px-5 md:px-20 px-6 mx-auto">
					<div className="text-center md:pb-[120px] pb-10">
						<p className="text-sm text-gray-600">
							Perlindungan Kerosakan untuk Hos membayar ganti rugi
							untuk kerosakan tertentu yang dilakukan oleh tetamu
							semasa penginapan Airbnb. Bayaran ini bukan insurans
							dan boleh dilaksanakan jika tetamu tidak membayar.
							Insurans liabiliti disediakan oleh pihak ketiga.
							<a className="cursor-pointer font-medium underline">
								{" "}
								Lihat butiran dan pengecualian.
							</a>
						</p>
					</div>
				</div>
			</div>
		</>
	);
}
