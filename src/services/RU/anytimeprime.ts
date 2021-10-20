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
			url: "https://api-prime.anytime.global/api/v2/auth/sendVerificationCode",
			headers: {
				"Content-Type": "application/x-www-form-urlencoded",
				//User agent causes an error
			},
			data: `phone=7${phone.nationalNumber}`,
		});
	},
});
