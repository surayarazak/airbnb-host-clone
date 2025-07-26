import Footer from "../../components/Footer";
import Header from "../../components/Header";
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
			<Section4 />
			<Footer />
		</>
	);
}
