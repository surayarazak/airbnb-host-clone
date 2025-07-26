/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: {
					50: "#FEEDEE",
					100: "#FDDADE",
					200: "#FCB3BC",
					300: "#FA899A",
					400: "#F95675",
					500: "#E41D54",
					600: "#B91543",
					700: "#8E0E31",
					800: "#640720",
					900: "#3E0311",
					950: "#2B0109",
				},
				secondary: {
					50: "#FFFFFF",
					100: "#FCFCFC",
					200: "#FCFCFC",
					300: "#F9F9F9",
					400: "#F9F9F9",
					500: "#F7F7F7",
					600: "#C1C1C1",
					700: "#8B8B8B",
					800: "#5C5C5C",
					900: "#2E2E2E",
					950: "#1B1B1B",
				},
				gray: {
					50: "#F1F1F1",
					100: "#ebebeb",
					200: "#dddddd",
					300: "#B3B3B3",
					400: "#989898",
					500: "#818181",
					600: "#6A6A6A",
					700: "#555555",
					800: "#404040",
					900: "#2C2C2C",
					950: "#222222",
				},
			},
		},
		fontFamily: {
			cereal: ['"Airbnb Cereal"', "sans-serif"],
		},
	},
	plugins: [],
};
