import axios from "axios";
import Service from "../../lib/service";

export default new Service({
	type: "SMS",
	country: "RU",
	isSupportProxyAgent: true,
	async process(phone, additional) {
		return await axios({
			httpsAgent: additional.proxyAgent,
			method: "POST",
			url: "https://24htv.platform24.tv/v2/otps",
			data: {
				phone: phone.number.toString(),
			},
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
