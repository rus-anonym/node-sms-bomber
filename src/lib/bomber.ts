import {
	CountryCode,
	isValidPhoneNumber,
	parsePhoneNumber,
	PhoneNumber,
} from "libphonenumber-js";

import Manager from "./manager";
import { IBomberOptions } from "../types/bomber";

class Bomber {
	public phone: PhoneNumber;
	private _countryCode: CountryCode;

	public serviceManager: Manager;

	constructor(params: IBomberOptions) {
		const phone = parsePhoneNumber(params.phone, params.country);

		if (phone.country !== params.country) {
			throw new Error("Phone is not valid");
		}

		this.phone = phone;
		this._countryCode = params.country;
		this.serviceManager = new Manager();

		if (!isValidPhoneNumber(params.phone, params.country)) {
			throw new Error("Invalid phone number");
		}

		if (params.services) {
			params.services.map(this.serviceManager.add.bind(this.serviceManager));
		}
	}

	public async attack(): Promise<unknown[]> {
		const services = this.serviceManager.list.filter(
			(x) => x.countryCode === this._countryCode,
		);

		return Promise.allSettled(services.map((x) => x.init(this.phone)));
	}
}

export default Bomber;
