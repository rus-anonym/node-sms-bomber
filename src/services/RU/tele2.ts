import axios from "axios";
import Service from "../../lib/service";

export default new Service({
	country: "RU",
	async process(phone) {
		return await axios.post(
			`https://msk.tele2.ru/api/validation/number/7${phone.nationalNumber}`,
			{
				sender: "Tele2",
			},
		);
	},
});
