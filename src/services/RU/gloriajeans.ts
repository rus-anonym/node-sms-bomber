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
			url: "https://www.gloria-jeans.ru/phone-verification/send-code/registration",
			headers: {
				"Content-Type": "application/json",
				...(additional.userAgent
					? {
							"User-Agent": additional.userAgent,
					  }
					: {}),
			},
			data: { phoneNumber: phone.number },
		});
	},
});
