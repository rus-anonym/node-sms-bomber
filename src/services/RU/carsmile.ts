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
			url: `https://api.carsmile.com`,
			headers: {
				"Content-Type": "application/json",
				//User agent causes an error
			},
			data: {
				operationName: "enterPhone",
				variables: {
					phone: "7" + phone.nationalNumber,
				},
				query:
					"mutation enterPhone($phone: String!) {\n  enterPhone(phone: $phone)\n}\n",
			},
		});
	},
});
