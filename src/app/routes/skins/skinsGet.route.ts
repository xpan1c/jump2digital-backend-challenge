import { Request, Response, Router } from "express";

import { SkinsGetter } from "../../../skins/application/SkinsGetter";
import { JsonSkinRepository } from "../../../skins/infrastructure/persistences/json/JsonSkinRepository";
import { SkinsGetController } from "../../controllers/skins/SkinsGetController";
import { HttpResponse } from "../HttpResponse";

export const register = (router: Router): void => {
	const jsonSkinRepository = new JsonSkinRepository("./skins.json");
	const skinGetter = new SkinsGetter(jsonSkinRepository);
	const httpResponse = new HttpResponse();
	const skinsCtrl = new SkinsGetController(skinGetter, httpResponse);

	router.get(
		`/skins/available`,
		// eslint-disable-next-line @typescript-eslint/no-misused-promises
		async (req: Request, res: Response) => await skinsCtrl.run(req, res)
	);
};
