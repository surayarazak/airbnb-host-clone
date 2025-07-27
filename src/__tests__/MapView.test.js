import React from "react";
import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import MapView from "../components/Map"; // Assuming MapView is in src/index.jsx
import * as service from "../components/Map/service"; // Import the service to mock it

// Mock react-leaflet components
// We're mocking them to simply render their children or a simple div
// so that testing-library can "see" the content within them.
jest.mock("react-leaflet", () => ({
	MapContainer: ({ children, ...props }) => (
		<div data-testid="mock-map-container" {...props}>
			{children}
		</div>
	),
	TileLayer: () => <div data-testid="mock-tile-layer" />,
	Marker: ({ children, icon, position }) => (
		<div
			data-testid="mock-marker"
			data-position={position}
			dangerouslySetInnerHTML={{ __html: icon.options.html }}>
			{children}
		</div>
	),
	Popup: ({ children }) => <div data-testid="mock-popup">{children}</div>,
}));

// Mock L.divIcon from leaflet
// This is crucial because L is a global object from Leaflet
jest.mock("leaflet", () => ({
	...jest.requireActual("leaflet"), // Keep actual Leaflet functions if needed
	divIcon: jest.fn((options) => ({ options })), // Mock divIcon to return options
}));

// Mock react-multi-carousel
// We'll mock it to simply render its children directly,
// as testing its internal carousel logic is outside the scope of MapView.
jest.mock("react-multi-carousel", () => {
	const ActualReact = jest.requireActual("react");
	const MockCarousel = ({ children, customDot, showDots }) => (
		<div data-testid="mock-carousel">
			{children}
			{showDots && customDot && (
				<ul data-testid="mock-carousel-dots">
					{ActualReact.Children.map(children, (_, index) =>
						ActualReact.cloneElement(customDot, {
							key: index,
							active: index === 0, // Simulate first dot active
							onClick: jest.fn(),
						})
					)}
				</ul>
			)}
		</div>
	);
	MockCarousel.default = MockCarousel; // For default export mock
	return MockCarousel;
});

// Mock the getRoomData service call
const mockRoomData = [
	{
		lat: 3.139,
		lng: 101.6869,
		price: "RM215",
		name: "Kuala Lumpur",
		img: "https://example.com/img1.jpg",
		img2: "https://example.com/img2.jpg",
		img3: "https://example.com/img3.jpg",
		img4: "https://example.com/img4.jpg",
		desc: "Central location near major attractions.",
		rooms: "3 rooms",
		rating: 4.8,
	},
	{
		lat: 3.1579,
		lng: 101.7123,
		price: "RM198",
		name: "Bukit Bintang",
		img: "https://example.com/img5.jpg",
		img2: "https://example.com/img6.jpg",
		img3: "https://example.com/img7.jpg",
		img4: "https://example.com/img8.jpg",
		desc: "Shopping and nightlife hub.",
		rooms: "2 rooms",
		rating: 4.5,
	},
];

describe("MapView", () => {
	// Before each test, mock the service call
	beforeEach(() => {
		jest.spyOn(service, "getRoomData").mockResolvedValue(mockRoomData);
	});

	// After each test, restore original mocks
	afterEach(() => {
		jest.restoreAllMocks();
	});

	test("renders MapContainer and TileLayer initially", () => {
		render(<MapView />);
		expect(screen.getByTestId("mock-map-container")).toBeInTheDocument();
		expect(screen.getByTestId("mock-tile-layer")).toBeInTheDocument();
	});

	test("fetches room data and renders markers", async () => {
		render(<MapView />);

		// Expect getRoomData to be called
		expect(service.getRoomData).toHaveBeenCalledTimes(1);

		// Wait for markers to appear after data fetch
		await waitFor(() => {
			expect(screen.getAllByTestId("mock-marker")).toHaveLength(
				mockRoomData.length
			);
		});

		// Verify content of the price markers
		expect(screen.getByText("RM215")).toBeInTheDocument();
		expect(screen.getByText("RM198")).toBeInTheDocument();
	});

	test('renders popup content when a marker is "clicked" (simulated)', async () => {
		render(<MapView />);

		await waitFor(() => {
			expect(screen.getAllByTestId("mock-marker")).toHaveLength(
				mockRoomData.length
			);
		});

		// Simulate clicking the first marker to reveal its popup content
		// In a real browser, clicking the marker opens the popup.
		// With our mocks, the Popup content is always rendered as a child of the Marker.
		// So we just need to check the content directly.

		// Check content for the first room (Kuala Lumpur)
		expect(screen.getByText("Kuala Lumpur")).toBeInTheDocument();
		expect(
			screen.getByText("Central location near major attractions.")
		).toBeInTheDocument();
		expect(screen.getByText("RM215")).toBeInTheDocument();
		expect(screen.getByText("3 rooms")).toBeInTheDocument();
		expect(screen.getByText("4.8")).toBeInTheDocument();

		// Check images inside the carousel for the first room
		expect(screen.getByAltText("Room image 1")).toHaveAttribute(
			"src",
			"https://example.com/img1.jpg"
		);
		expect(screen.getByAltText("Room image 2")).toHaveAttribute(
			"src",
			"https://example.com/img2.jpg"
		);
		expect(screen.getByAltText("Room image 3")).toHaveAttribute(
			"src",
			"https://example.com/img3.jpg"
		);
		expect(screen.getByAltText("Room image 4")).toHaveAttribute(
			"src",
			"https://example.com/img4.jpg"
		);

		// Check if carousel dots are rendered (mocked)
		expect(screen.getByTestId("mock-carousel-dots")).toBeInTheDocument();
		expect(screen.getAllByRole("button", { name: "" })).toHaveLength(4); // 4 dots for 4 images

		// Check content for the second room (Bukit Bintang)
		expect(screen.getByText("Bukit Bintang")).toBeInTheDocument();
		expect(
			screen.getByText("Shopping and nightlife hub.")
		).toBeInTheDocument();
		expect(screen.getByText("RM198")).toBeInInTheDocument();
		expect(screen.getByText("2 rooms")).toBeInTheDocument();
		expect(screen.getByText("4.5")).toBeInTheDocument();
	});

	test("CustomDot component renders correctly", () => {
		// We're already testing CustomDot implicitly through the Carousel mock,
		// but we can add a direct test if needed.
		// Since CustomDot is a class component, we can render it directly.
		const { rerender } = render(
			<CustomDot onClick={jest.fn()} active={false} />
		);
		expect(screen.getByRole("button")).toHaveClass("bg-gray-200");

		rerender(<CustomDot onClick={jest.fn()} active={true} />);
		expect(screen.getByRole("button")).toHaveClass("bg-white");
	});
});
