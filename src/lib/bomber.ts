import { isValidPhoneNumber } from "libphonenumber-js";

import Manager from "./manager";
import { IBomberOptions } from "../types/bomber";

class Bomber {
	public serviceManager: Manager;

	constructor(params: IBomberOptions) {
		this.serviceManager = new Manager();

		if (!isValidPhoneNumber(params.phone, params.country)) {
			throw new Error("Invalid phone number");
		}

		if (params.services) {
			params.services.map(this.serviceManager.add.bind(this.serviceManager));
		}
	}
}

export default Bomber;
