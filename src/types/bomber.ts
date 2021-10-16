import { CountryCode, PhoneNumber } from "libphonenumber-js";

export interface IServiceOptions {
	country: CountryCode;
	process(phone: PhoneNumber): Promise<unknown> | unknown;
}
