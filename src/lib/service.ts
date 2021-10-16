import {
	CountryCode,
	isValidPhoneNumber,
	parsePhoneNumber,
} from "libphonenumber-js";

import { IServiceOptions, TServiceProcess } from "../types/bomber";

class Service {
	private _countryCode: CountryCode;
	private _process: TServiceProcess;

	constructor(params: IServiceOptions) {
		this._countryCode = params.country;
		this._process = params.process;
	}

	public checkPhone(phone: string) {
		return isValidPhoneNumber(phone, this._countryCode);
	}

	public async init(phone: string) {
		const phoneNumber = parsePhoneNumber(phone, this._countryCode);

		if (phoneNumber.country !== this._countryCode) {
			throw new Error("Phone is not valid");
		} else {
			await this._process(phoneNumber);
		}
	}
}

export default Service;
