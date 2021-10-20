import Service from "../../lib/service";
import axios from "axios";

export default new Service({
	type: "SMS",
	isSupportProxyAgent: true,
	country: "RU",
	async process(phone, additional) {
		return await axios({
			httpsAgent: additional.proxyAgent,
			method: "POST",
			url: `https://www.citilink.ru/registration/confirm/phone/+${phone.number}/`,
			headers: {
				...(additional.userAgent
					? {
							"User-Agent": additional.userAgent,
					  }
					: {}),
			},
		});
	},
});
