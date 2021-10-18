import axios from "axios";
import Service from "../../lib/service";

export default new Service({
	country: "RU",
	async process(phone) {
		return await axios({
			method: "POST",
			url: "https://24htv.platform24.tv/v2/otps",
			data: {
				phone: phone.number.toString(),
			},
		});
	},
});
