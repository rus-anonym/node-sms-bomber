import axios from "axios";
import Service from "../../lib/service";

export default new Service({
	country: "RU",
	async process(phone, additional) {
		return await axios({
			httpsAgent: additional.proxyAgent,
			method: "POST",
			url: `https://msk.tele2.ru/api/validation/number/7${phone.nationalNumber}`,
			data: {
				sender: "Tele2",
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
