import { HiOutlineHome } from "react-icons/hi";
import { HiOutlineChatBubbleLeftRight } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import { Button } from "@headlessui/react";
import { BsStopwatch } from "react-icons/bs";

export default function Section1() {
	const navigate = useNavigate();

	const handleClick = () => {
		navigate("#"); // replace with your actual route
	};
	return (
		<>
			<div className="bg-white">
				<div className="max-w-xl mx-auto md:pb-14 pb-8">
					<h2 className="xl:text-[60px] md:text-[44px] text-[32px] font-semibold text-center xl:leading-[4rem] md:leading-[3rem] text-gray-950 tracking-[-0.03em] leading-[2.3rem] md:px-0 px-10">
						Mudah sahaja untuk menyenaraikan kediaman anda di Airbnb
					</h2>
				</div>
				<div className="max-w-4xl mx-auto md:px-6">
					<img
						src="https://a0.muscache.com/im/pictures/canvas/Canvas-1727296418469/original/e4e661a8-3c39-41ab-891f-0c51b4856159.jpeg?im_w=2560"
						alt=""
						className="md:px-32 lg:px-0 md:block hidden"
					/>
					<img
						src="https://a0.muscache.com/im/pictures/canvas/Canvas-1727297621942/original/f3238057-35ca-41e4-92bc-8f09a633367c.jpeg?im_w=1200"
						alt=""
						className="block md:hidden"
					/>
				</div>
				<div className="max-w-4xl mx-auto lg:pb-28 md:pb-20">
					<div className="grid md:grid-cols-3 grid-cols-1 md:gap-x-4 gap-y-2 lg:pt-14 md:py-14 py-10 lg:px-4 md:px-20 px-6">
						<div className="md:flex md:flex-col grid grid-cols-6 md:items-center items-start gap-x-3">
							<div className="bg-secondary-500 rounded-2xl p-2 w-12 h-12 flex items-center justify-center mb-4">
								<HiOutlineHome size={24} />
							</div>
							<h1 className="lg:text-lg md:text-sm text-base md:text-center text-left col-span-5">
								Cipta penyenaraian untuk penginapan anda hanya
								dalam beberapa langkah
							</h1>
						</div>
						<div className="md:flex md:flex-col grid grid-cols-6 md:items-center items-start gap-x-3">
							<div className="bg-secondary-500 rounded-2xl p-2 w-12 h-12 flex items-center justify-center mb-4">
								<BsStopwatch size={24} />
							</div>
							<h1 className="lg:text-lg md:text-sm text-base md:text-center text-left col-span-5">
								Ikut kesesuaian anda, dan buat perubahan
								bila-bila masa
							</h1>
						</div>
						<div className="md:flex md:flex-col grid grid-cols-6 md:items-center items-start gap-x-3">
							<div className="bg-secondary-500 rounded-2xl p-2 w-12 h-12 flex items-center justify-center mb-4">
								<HiOutlineChatBubbleLeftRight size={24} />
							</div>
							<h1 className="lg:text-lg md:text-sm text-base md:text-center text-left col-span-5">
								Dapatkan sokongan 1:1 daripada hos berpengalaman
								pada bila-bila masa
							</h1>
						</div>
					</div>
					<div className="md:flex justify-center md:pb-14 pb-8 lg:hidden hidden">
						<Button
							onClick={handleClick}
							className="relative overflow-hidden rounded-full bg-gray-950 xl:px-8 px-6 xl:py-4 py-3.5 xl:text-lg text-base font-normal text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-950 xl:w-[340px] md:w-[300px] w-full">
							Mulakan di Airbnb
						</Button>
					</div>
				</div>
			</div>
		</>
	);
}
