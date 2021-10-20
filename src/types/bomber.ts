import { HttpsProxyAgent } from "https-proxy-agent";
import { CountryCode, PhoneNumber } from "libphonenumber-js";
import Service from "../lib/service";

export type TServiceType = "SMS" | "CALL";

export type TServiceProcess = (
	phone: PhoneNumber,
	additional: IServiceInitAdditionalData,
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
	type?: TServiceType;
	isSupportProxyAgent?: boolean;
	country: CountryCode;
	process: TServiceProcess;
}

export interface IServiceInitAdditionalData {
	proxyAgent?: HttpsProxyAgent;
	userAgent?: string;
}
