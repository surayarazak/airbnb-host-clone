import { getRoomData } from "../components/Map/service";

describe("mapViewService", () => {
	// <--- Changed the name here
	test("getRoomData returns the expected dummy room data", async () => {
		// Optional: make test more specific
		const data = await getRoomData();
		// ... assertions
	});
});
