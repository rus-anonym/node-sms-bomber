import {
	CountryCode,
	isValidPhoneNumber,
	parsePhoneNumber,
} from "libphonenumber-js";

import { IServiceOptions } from "../types/bomber";

class Service {
	private _countryCode: CountryCode;

	constructor(params: IServiceOptions) {
		this._countryCode = params.country;
	}

	public checkPhone(phone: string) {
		return isValidPhoneNumber(phone, this._countryCode);
	}

	public init(phone: string) {
		const phoneNumber = parsePhoneNumber(phone, "RU");

		if (phoneNumber.country !== this._countryCode) {
			throw new Error("Phone is not valid");
		} else {
			// Logic
		}
	}
}

export default Service;
