import Service from "../../lib/service";
import axios from "axios";

export default new Service({
	type: "SMS",
	country: "RU",
	isSupportProxyAgent: true,
	async process(phone, additional) {
		return await axios({
			httpsAgent: additional.proxyAgent,
			method: "POST",
			url: "https://u.icq.net/api/v65/rapi/auth/sendCode",
			headers: {
				"Content-Type": "application/json",
				...(additional.userAgent
					? {
							"User-Agent": additional.userAgent,
					  }
					: {}),
			},
			data: {
				reqId: "",
				params: {
					phone: "7" + phone.nationalNumber,
					language: "ru-RU",
					route: "sms",
					devId: "",
					application: "icq",
				},
			},
		});
	},
});
