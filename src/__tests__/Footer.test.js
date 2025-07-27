import React from "react";
import { render, screen } from "@testing-library/react";
import Footer from "../components/Footer"; // Correctly import your Footer component

describe("Footer", () => {
	test("renders the descriptive text about Shared Hosting Network", () => {
		render(<Footer />);
		// Check for the main descriptive paragraph
		expect(
			screen.getByText(
				/Hos di Rangkaian Hos Bersama biasanya mempunyai penarafan yang tinggi/i
			)
		).toBeInTheDocument();
		// Check for the second paragraph mentioning Airbnb entities
		expect(
			screen.getByText(
				/Rangkaian Hos Bersama dikuasakan oleh Airbnb Global Services Limited/i
			)
		).toBeInTheDocument();
		// Check for the "Ketahui lebih lanjut" link
		expect(
			screen.getByRole("link", { name: /Ketahui lebih lanjut/i })
		).toBeInTheDocument();
	});

	test("renders 'Sokongan' section and its links", () => {
		render(<Footer />);
		expect(
			screen.getByRole("heading", { name: /Sokongan/i })
		).toBeInTheDocument();
		expect(
			screen.getByRole("link", { name: /Pusat Bantuan/i })
		).toBeInTheDocument();
		expect(
			screen.getByRole("link", { name: /Anti diskriminasi/i })
		).toBeInTheDocument();
		expect(
			screen.getByRole("link", { name: /Sokongan ketidakupayaan/i })
		).toBeInTheDocument();
		expect(
			screen.getByRole("link", { name: /Pilihan pembatalan/i })
		).toBeInTheDocument();
		expect(
			screen.getByRole("link", {
				name: /Laporkan kebimbangan kejiranan/i,
			})
		).toBeInTheDocument();
	});

	test("renders 'Menjadi hos' section and its links", () => {
		render(<Footer />);
		expect(
			screen.getByRole("heading", { name: /Menjadi hos/i })
		).toBeInTheDocument();
		expect(
			screen.getByRole("link", { name: /Sewakan rumah anda di Airbnb/i })
		).toBeInTheDocument();
		expect(
			screen.getByRole("link", {
				name: /Tawarkan pengalaman anda di Airbnb/i,
			})
		).toBeInTheDocument();
		expect(
			screen.getByRole("link", {
				name: /Tawarkan perkhidmatan anda di Airbnb/i,
			})
		).toBeInTheDocument();
		expect(
			screen.getByRole("link", { name: /AirCover untuk Hos/i })
		).toBeInTheDocument();
		expect(
			screen.getByRole("link", { name: /Sumber maklumat pengehosan/i })
		).toBeInTheDocument();
		expect(
			screen.getByRole("link", { name: /Forum komuniti/i })
		).toBeInTheDocument();
		expect(
			screen.getByRole("link", { name: /Menjadi hos bertanggungjawab/i })
		).toBeInTheDocument();
		expect(
			screen.getByRole("link", {
				name: /Sertai kelas pengehosan percuma/i,
			})
		).toBeInTheDocument();
		expect(
			screen.getByRole("link", { name: /Cari hos bersama/i })
		).toBeInTheDocument();
	});

	test("renders 'Airbnb' section and its links", () => {
		render(<Footer />);
		expect(
			screen.getByRole("heading", { name: "Airbnb" })
		).toBeInTheDocument();
		expect(
			screen.getByRole("link", { name: /Keluaran Musim Panas 2025/i })
		).toBeInTheDocument();
		expect(
			screen.getByRole("link", { name: /Bilik berita/i })
		).toBeInTheDocument();
		expect(
			screen.getByRole("link", { name: /Kerjaya/i })
		).toBeInTheDocument();
		expect(
			screen.getByRole("link", { name: /Pelabur/i })
		).toBeInTheDocument();
		expect(
			screen.getByRole("link", { name: /Inap kecemasan Airbnb.org/i })
		).toBeInTheDocument();
	});

	test("renders copyright and legal links", () => {
		render(<Footer />);
		expect(screen.getByText(/© 2025 Airbnb, Inc./i)).toBeInTheDocument();
		expect(
			screen.getByRole("link", { name: /Privasi/i })
		).toBeInTheDocument();
		expect(
			screen.getByRole("link", { name: /Terma/i })
		).toBeInTheDocument();
		expect(
			screen.getByRole("link", { name: /Peta tapak/i })
		).toBeInTheDocument();
	});

	test("renders language and currency display", () => {
		render(<Footer />);
		// Using getByText for the combined text, or you could get the icon and then its sibling text
		expect(screen.getByText(/Melayu \(MY\)/i)).toBeInTheDocument();
		expect(screen.getByText(/MYR/i)).toBeInTheDocument();
	});

	test("renders social media icons/links", () => {
		render(<Footer />);
		// These icons don't have explicit accessible names unless you add aria-label or title.
		// Assuming they are decorative or visually self-explanatory.
		// If they had aria-labels like <a href="#" aria-label="Facebook">...</a>,
		// you would test with: screen.getByRole("link", { name: "Facebook" })
		// Since they don't, we'll look for the `<a>` element and then potentially its icon's presence.

		// A more robust way would be to ensure your icons have accessible names
		// For now, we'll check for generic links within that section
		// We can use a test ID or check the icon's component if it provides a test-friendly attribute.
		// For now, let's just check for the presence of the icons visually or by their parent links.
		// The current implementation is simple; if the social links had distinct labels, it would be better.

		// Given the provided structure, checking for the links themselves is the most direct approach.
		// You might need to add aria-labels to your <a> tags for better accessibility and testing.
		// For example: <a href="#" aria-label="Facebook profile">

		// As a temporary solution without aria-labels:
		// You would need to refine these selectors if you have many generic links.
		// For production, always add aria-labels to your social media links.
		const socialLinks = screen.getAllByRole("link");
		// Filter for links that are likely social based on common patterns or context
		// This is a bit brittle, adding aria-labels is the best way.
		// For demonstration, let's assume they are the last three links in the document
		expect(socialLinks[socialLinks.length - 3]).toContainHTML("<svg"); // Assuming Facebook icon is in the first one
		expect(socialLinks[socialLinks.length - 2]).toContainHTML("<svg"); // Assuming Twitter icon
		expect(socialLinks[socialLinks.length - 1]).toContainHTML("<svg"); // Assuming Instagram icon
	});
});
