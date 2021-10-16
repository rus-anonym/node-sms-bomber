import Bomber from "../src/lib/bomber";
import Service from "../src/lib/service";

(async () => {
	const bomber = new Bomber({
		country: "RU",
		phone: "79551234567",

		// Optional parameter in which we can pass additional services
		services: [
			new Service({
				country: "RU",
				process: () => {},
			}),
		],
	});

	// Loading built-in services
	await bomber.serviceManager.loadServices();

	// Calling all loaded services (1 time)
	await bomber.attack();
})();
