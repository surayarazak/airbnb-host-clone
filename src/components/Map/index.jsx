import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import { getRoomData } from "./service";
import { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React from "react";

class CustomDot extends React.Component {
	render() {
		const { onClick, active } = this.props;
		return (
			<li>
				<button
					className={`w-2 h-2 rounded-full mx-1 ${
						active ? "bg-white" : "bg-gray-200"
					}`}
					onClick={onClick}></button>
			</li>
		);
	}
}

const customIcon = (price) =>
	L.divIcon({
		className: "price-marker",
		html: `<div class="bg-white shadow-md hover:z-10 hover:shadow-xl hover:scale-105 hover:border transform transition duration-200 ease-in-out text-sm font-semibold text-gray-900 px-2 py-1 rounded-full border w-fit">${price}</div>`,
		iconSize: [60, 30],
		iconAnchor: [30, 15],
	});

export default function MapView() {
	const [roomData, setRoomData] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const data = await getRoomData();
			setRoomData(data);
		};

		fetchData();
	}, []);

	const responsive = {
		desktop: {
			breakpoint: { max: 3000, min: 0 },
			items: 1,
		},
	};

	return (
		<MapContainer
			center={[3.139, 101.6869]}
			zoom={13}
			scrollWheelZoom={false}
			className="h-[500px] w-full rounded-xl shadow-xl z-10">
			<TileLayer
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				attribution="&copy; OpenStreetMap contributors"
			/>
			{roomData.map((loc, idx) => (
				<Marker
					key={idx}
					position={[loc.lat, loc.lng]}
					icon={customIcon(loc.price)}>
					<Popup className="m-0">
						<div className="w-[300px]">
							<div className="carousel-wrapper relative">
								<Carousel
									responsive={responsive}
									draggable={true}
									showDots={true}
									infinite
									partialVisible={true}
									itemClass=""
									customDot={<CustomDot />}>
									{[
										loc.img,
										loc.img2,
										loc.img3,
										loc.img4,
									].map((imgUrl, index) => (
										<img
											key={index}
											src={imgUrl}
											alt={`Room image ${index + 1}`}
											className="w-full h-36 object-cover rounded-t-xl"
										/>
									))}
								</Carousel>
							</div>
							<div className="p-2">
								<div className="flex items-center justify-between">
									<h3 className="font-semibold text-base text-gray-800">
										{loc.name}
									</h3>
									<div className="flex items-center gap-1 text-gray-950 text-sm">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="w-4 h-4 fill-current"
											viewBox="0 0 20 20">
											<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.95a1 1 0 00.95.69h4.15c.969 0 1.371 1.24.588 1.81l-3.36 2.44a1 1 0 00-.364 1.118l1.286 3.95c.3.921-.755 1.688-1.54 1.118l-3.36-2.44a1 1 0 00-1.175 0l-3.36 2.44c-.784.57-1.838-.197-1.539-1.118l1.286-3.95a1 1 0 00-.364-1.118L2.075 9.377c-.783-.57-.38-1.81.588-1.81h4.15a1 1 0 00.951-.69l1.285-3.95z" />
										</svg>
										<span>{loc.rating}</span>
									</div>
								</div>

								<p className="text-sm text-gray-600">
									{loc.desc}
								</p>
								<p className="text-sm font-medium text-gray-900">
									{loc.price}{" "}
									<span className="font-normal">malam</span>{" "}
									<span className="text-gray-950 font-normal">
										• {loc.rooms}
									</span>
								</p>
							</div>
						</div>
					</Popup>
				</Marker>
			))}
		</MapContainer>
	);
}
