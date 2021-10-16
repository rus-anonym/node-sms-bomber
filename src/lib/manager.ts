import path from "path";
import fs from "fs";

import Service from "./service";

class Manager {
	private _isLoadService: boolean = false;
	private _servicesList: Service[] = [];

	/**
	 * Method for adding a new service
	 * @param {Service} service - Service to be added
	 * @returns Number of loaded services
	 */
	public add(service: Service): number {
		this._servicesList.push(service);
		return this._servicesList.length;
	}

	/**
	 * Method for downloading embedded services
	 * @returns {number} - Number of loaded services
	 */
	public async loadServices(): Promise<number> {
		if (this._isLoadService) {
			throw new Error(`Services already loaded`);
		}
		this._isLoadService = true;
		const dirname = path.resolve(__dirname, "../services") + "/";
		const servicesList = fs.readdirSync(dirname);
		let count = 0;

		for (const pathToService of servicesList) {
			const { default: service } = await import(dirname + pathToService);

			if (service instanceof Service) {
				this.add(service);
				++count;
			}
		}

		return count;
	}
}

const manager = new Manager();

export default manager;
