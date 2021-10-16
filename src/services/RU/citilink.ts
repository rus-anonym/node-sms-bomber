import Service from "../../lib/service";
import axios from "axios";

export default new Service({
	country: "RU",
	async process(phone) {
		return await axios.post(
			`https://www.citilink.ru/registration/confirm/phone/+${phone.number}/`,
		);
	},
});
