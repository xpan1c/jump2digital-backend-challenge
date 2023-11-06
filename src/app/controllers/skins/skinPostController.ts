import { Request, Response } from "express";

import { SkinsBuy } from "../../../skins/application/SkinBuy";
import { HttpResponse } from "../../routes/HttpResponse";
import { Controller } from "../Controller";

export type AuthenticatedRequest = Request & {
	user?: { id: string; email: string };
};
export class SkinPostController implements Controller {
	constructor(private readonly skinsBuy: SkinsBuy, private readonly httpResponse: HttpResponse) {}

	async run(req: AuthenticatedRequest, res: Response): Promise<void> {
		const { name } = req.body;
		const id = req.user?.id;
		if (!id) {
			throw new Error("there is no id");
		}
		await this.skinsBuy.run({ id, name });
		this.httpResponse.NoContent(res);
	}
}
