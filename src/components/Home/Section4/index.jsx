import {
	Disclosure,
	DisclosureButton,
	DisclosurePanel,
	Button,
} from "@headlessui/react";
import { useEffect, useState } from "react";
import { getFAQs } from "./service";
import { FaChevronDown } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

export default function Section4() {
	const [faqSections, setFaqSections] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const data = await getFAQs();
			setFaqSections(data);
		};

		fetchData();
	}, []);

	const navigate = useNavigate();

	const handleClick = () => {
		navigate("#"); // replace with your actual route
	};

	return (
		<div className="bg-secondary-500">
			<div className="xl:max-w-lg max-w-md mx-auto pb-8 xl:pt-[120px] md:pt-[5.5rem] pt-16 md:px-0 px-6">
				<h2 className="xl:text-[60px] md:text-[44px] text-[32px] font-semibold text-center xl:leading-[4rem] md:leading-[3rem] text-gray-950 tracking-[-0.03em]">
					Jawapan kepada soalan anda
				</h2>
			</div>
			<div className="xl:max-w-2xl max-w-lg mx-auto xl:pb-[88px] md:pb-16 pb-14 xl:px-4 md:px-9 px-6">
				<div className="">
					{faqSections.map((section, index) => (
						<Disclosure key={index}>
							{({ open }) => (
								<div className="xl:py-7 py-6 border-b border-gray-200">
									<DisclosureButton className="flex justify-between items-center w-full text-left sm:text-base xl:text-[22px] text-xl font-normal text-gray-950">
										<span>{section.title}</span>
										<FaChevronDown
											className={`w-4 h-4 text-gray-950 transition-transform ${
												open ? "rotate-180" : ""
											}`}
										/>
									</DisclosureButton>
									<DisclosurePanel className="mt-5 space-y-6">
										{section.faqs.map((faq, i) => (
											<div key={i}>
												<p className="font-medium text-gray-950 xl:text-base md:text-sm text-base">
													{faq.question}
												</p>
												<p
													className="text-gray-600 xl:text-base md:text-sm text-base mt-1 faq-answer"
													dangerouslySetInnerHTML={{
														__html: faq.answer,
													}}>
													{/* {faq.answer} */}
												</p>
											</div>
										))}
									</DisclosurePanel>
								</div>
							)}
						</Disclosure>
					))}
				</div>
			</div>
			<div className="max-w-2xl mx-auto xl:pb-[88px] md:pb-16 pb-14 md:px-4 px-6 text-center">
				<h2 className="text-gray-950 xl:text-[28px] text-xl text-center font-semibold md:pb-2 pb-1">
					Masih ada soalan?
				</h2>
				<p className="text-gray-600 md:text-lg text-base xl:pb-10 pb-6 xl:px-0 md:px-40 px-16">
					Dapatkan jawapan daripada hos tempatan berpengalaman.
				</p>
				<Button
					onClick={handleClick}
					className="relative overflow-hidden rounded-full bg-gray-950 xl:px-8 px-6 xl:py-4 py-3.5 xl:text-lg text-base font-normal text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-950 xl:w-[340px] md:w-[300px] w-full">
					Tanya hos
				</Button>
			</div>
		</div>
	);
}
