import {
	CountryCode,
	isValidPhoneNumber,
	parsePhoneNumber,
	PhoneNumber,
} from "libphonenumber-js";

import {
	IServiceOptions,
	IServiceInitAdditionalData,
	TServiceProcess,
} from "../types/bomber";

class Service {
	public isSupportProxyAgent: boolean;
	public countryCode: CountryCode;
	private _process: TServiceProcess;

	constructor(params: IServiceOptions) {
		this.countryCode = params.country;
		this._process = params.process;
		this.isSupportProxyAgent = params.isSupportProxyAgent || false;
	}

	public checkPhone(phone: string) {
		return isValidPhoneNumber(phone, this.countryCode);
	}

	public async init(
		phone: string | PhoneNumber,
		additional: IServiceInitAdditionalData = {},
	) {
		if (typeof phone === "string") {
			phone = parsePhoneNumber(phone, this.countryCode);
		}

		if (phone.country !== this.countryCode) {
			throw new Error("Phone is not valid");
		} else {
			await this._process(phone, additional);
		}
	}
}

export default Service;
