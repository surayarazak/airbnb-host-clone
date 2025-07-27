module.exports = {
	testEnvironment: "jsdom",
	moduleFileExtensions: ["js", "jsx"],
	transform: {
		"^.+\\.(js|jsx)$": "babel-jest",
	},
	moduleNameMapper: {
		"\\.(css|less|scss|sass)$": "identity-obj-proxy", // ignore CSS
	},
	setupFilesAfterEnv: ["@testing-library/jest-dom"],
};
