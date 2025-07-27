import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Section1 from "../../components/Home/Section1";
import Section2 from "../../components/Home/Section2";
import Section3 from "../../components/Home/Section3";
import Section4 from "../../components/Home/Section4";
import MobileHeader from "../../components/MobileHeader";

export default function Home() {
	return (
		<>
			<Header />
			<MobileHeader />
			<div className="bg-white">
				<div className="max-w-5xl mx-auto p-32"></div>
			</div>
			<Section1 />
			<Section2 />
			<Section3 />
			<Section4 />
			<Footer />
		</>
	);
}
