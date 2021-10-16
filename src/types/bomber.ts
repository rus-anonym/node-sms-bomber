import { CountryCode, PhoneNumber } from "libphonenumber-js";
import Service from "../lib/service";

export interface IBomberOptions {
	/**
	 * Target number
	 */
	phone: string;
	/**
	 * Country code
	 */
	country: CountryCode;
	/**
	 * Array with services that need to be added
	 */
	services?: Service[];
}

export interface IServiceOptions {
	country: CountryCode;
	process(phone: PhoneNumber): Promise<unknown> | unknown;
}
