import { Request, Response } from "express";

import { SkinsGetter } from "../../../skins/application/SkinsGetter";
import { HttpResponse } from "../../routes/HttpResponse";
import { Controller } from "../Controller";

export class SkinsGetController implements Controller {
	constructor(
		private readonly skinsGetter: SkinsGetter,
		private readonly httpResponse: HttpResponse
	) {}

	async run(req: Request, res: Response): Promise<void> {
		const data = await this.skinsGetter.run();
		this.httpResponse.Ok(res, data);
	}
}
