import {
	CountryCode,
	isValidPhoneNumber,
	parsePhoneNumber,
} from "libphonenumber-js";

import { IServiceOptions, TServiceProcess } from "../types/bomber";

class Service {
	public countryCode: CountryCode;
	private _process: TServiceProcess;

	constructor(params: IServiceOptions) {
		this.countryCode = params.country;
		this._process = params.process;
	}

	public checkPhone(phone: string) {
		return isValidPhoneNumber(phone, this.countryCode);
	}

	public async init(phone: string) {
		const phoneNumber = parsePhoneNumber(phone, this.countryCode);

		if (phoneNumber.country !== this.countryCode) {
			throw new Error("Phone is not valid");
		} else {
			await this._process(phoneNumber);
		}
	}
}

export default Service;
