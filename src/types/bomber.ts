import { CountryCode, PhoneNumber } from "libphonenumber-js";
import Service from "../lib/service";

export type TServiceProcess = (
	phone: PhoneNumber,
) => Promise<unknown> | unknown;

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
	process: TServiceProcess;
}
