import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Header from "../components/Header"; // Adjust path if necessary

// Mock window.scrollY for scroll-related tests
const mockScrollY = (y) => {
	Object.defineProperty(window, "scrollY", { value: y, writable: true });
	fireEvent.scroll(window); // Trigger the scroll event listener
};

describe("Header (Desktop)", () => {
	// Tests for elements that should always be present in the desktop header
	test("renders the Airbnb logo", () => {
		render(<Header />);
		// Now you can find it by its accessible name:
		expect(
			screen.getByRole("img", { name: "Airbnb logo" })
		).toBeInTheDocument();
	});

	test("renders the 'Mulakan di Airbnb' button", () => {
		render(<Header />);
		const button = screen.getByRole("button", {
			name: /Mulakan di Airbnb/i,
		});
		expect(button).toBeInTheDocument();
	});

	// Tests for scroll behavior
	test("applies 'bg-white' class by default (not scrolled)", () => {
		// Reset scroll position before test
		mockScrollY(0);
		render(<Header />);
		const headerElement = screen.getByRole("banner"); // 'header' element has an implicit role of 'banner'
		expect(headerElement).toHaveClass("bg-white");
		expect(headerElement).not.toHaveClass("border-b");
	});

	test("applies scrolled classes when scrolled down", () => {
		render(<Header />);
		const headerElement = screen.getByRole("banner");

		// Simulate scrolling down
		mockScrollY(100);

		expect(headerElement).toHaveClass("border-b");
		expect(headerElement).toHaveClass("backdrop-blur-sm");
		expect(headerElement).toHaveClass("bg-white/95");
		expect(headerElement).not.toHaveClass("bg-white"); // Should change from default
	});

	test("removes scrolled classes when scrolled back to top", () => {
		render(<Header />);
		const headerElement = screen.getByRole("banner");

		// Simulate scrolling down
		mockScrollY(100);
		expect(headerElement).toHaveClass("border-b"); // Ensure it's scrolled first

		// Simulate scrolling back to top
		mockScrollY(0);

		expect(headerElement).not.toHaveClass("border-b");
		expect(headerElement).not.toHaveClass("backdrop-blur-sm");
		expect(headerElement).not.toHaveClass("bg-white/95");
		expect(headerElement).toHaveClass("bg-white"); // Should revert to default
	});

	// Test for hover effect on button (optional, as visual effects are harder to test precisely)
	// This tests if the state changes that *enable* the glow are triggered.
	test("sets isHovering to true on mouse enter and false on mouse leave for the button", () => {
		render(<Header />);
		const button = screen.getByRole("button", {
			name: /Mulakan di Airbnb/i,
		});

		// Initial state
		expect(
			button.querySelector('span[style*="radial-gradient"]')
		).not.toBeInTheDocument();

		// Simulate mouse enter
		fireEvent.mouseEnter(button);
		// The glow span is conditionally rendered based on `isHovering`.
		// We can't directly check the state of `isHovering` from outside.
		// Instead, we check if the element that depends on `isHovering` appears.
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
