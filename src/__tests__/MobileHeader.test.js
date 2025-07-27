import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import MobileHeader from "../components/MobileHeader"; // Adjust path if necessary

// Mock window.scrollY for scroll-related tests
const mockScrollY = (y) => {
	Object.defineProperty(window, "scrollY", { value: y, writable: true });
	fireEvent.scroll(window); // Trigger the scroll event listener
};

describe("MobileHeader", () => {
	test("renders the Airbnb logo", () => {
		render(<MobileHeader />);
		// Now you can find it by its accessible name:
		expect(
			screen.getByRole("img", { name: "Airbnb logo" })
		).toBeInTheDocument();
	});

	test("renders the 'Mulakan di Airbnb' button in the bottom sticky part", () => {
		render(<MobileHeader />);
		const button = screen.getByRole("button", {
			name: /Mulakan di Airbnb/i,
		});
		expect(button).toBeInTheDocument();
	});

	// Tests for scroll behavior of the top header (showTop state)
	test("top header is visible by default (not scrolled)", () => {
		mockScrollY(0); // Ensure initial scroll position
		render(<MobileHeader />);
		const topHeader = screen.getByRole("banner", {
			name: "Mobile Logo Only",
		}); // Access by aria-label
		expect(topHeader).toHaveClass("opacity-100");
		expect(topHeader).toHaveClass("translate-y-0");
	});

	test("top header hides on scroll down", () => {
		render(<MobileHeader />);
		const topHeader = screen.getByRole("banner", {
			name: "Mobile Logo Only",
		});

		// Simulate scrolling down significantly
		mockScrollY(200);

		expect(topHeader).toHaveClass("opacity-0");
		expect(topHeader).toHaveClass("-translate-y-full");
	});

	test("top header shows on scroll up after scrolling down", () => {
		render(<MobileHeader />);
		const topHeader = screen.getByRole("banner", {
			name: "Mobile Logo Only",
		});

		// Simulate scrolling down
		mockScrollY(200);
		expect(topHeader).toHaveClass("opacity-0"); // Ensure it's hidden

		// Simulate scrolling up
		mockScrollY(100);

		expect(topHeader).toHaveClass("opacity-100");
		expect(topHeader).toHaveClass("translate-y-0");
	});

	test("top header stays visible if scrolled up slightly but still near top", () => {
		render(<MobileHeader />);
		const topHeader = screen.getByRole("banner", {
			name: "Mobile Logo Only",
		});

		// Scroll down slightly
		mockScrollY(5); // Less than 10

		expect(topHeader).toHaveClass("opacity-100");
		expect(topHeader).toHaveClass("translate-y-0");
	});

	// Test for hover effect on button (optional, similar to Header)
	test("sets isHovering to true on mouse enter and false on mouse leave for the button", () => {
		render(<MobileHeader />);
		const button = screen.getByRole("button", {
			name: /Mulakan di Airbnb/i,
		});

		// Initial state
		expect(
			button.querySelector('span[style*="radial-gradient"]')
		).not.toBeInTheDocument();

		// Simulate mouse enter
		fireEvent.mouseEnter(button);
		expect(
			button.querySelector('span[style*="radial-gradient"]')
		).toBeInTheDocument();

		// Simulate mouse leave
		fireEvent.mouseLeave(button);
		expect(
			button.querySelector('span[style*="radial-gradient"]')
		).not.toBeInTheDocument();
	});
});
