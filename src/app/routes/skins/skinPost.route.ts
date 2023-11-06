import { Request, Response, Router } from "express";

import { Skin } from "../../../shared/infrastructure/persistence/sequelize/config/sequelizeConfig";
import { SkinsBuy } from "../../../skins/application/SkinBuy";
import { JsonSkinRepository } from "../../../skins/infrastructure/persistences/json/JsonSkinRepository";
import { SequelizeSkinRepository } from "../../../skins/infrastructure/persistences/sequelieze/SequelizeSkinRepository";
import { SkinPostController } from "../../controllers/skins/skinPostController";
import { authenticateMiddleware } from "..";
import { HttpResponse } from "../HttpResponse";

export const register = (router: Router): void => {
	const jsonSkinRepository = new JsonSkinRepository("./skins.json");
	const skinRepository = new SequelizeSkinRepository(Skin);
	const skinGetter = new SkinsBuy(skinRepository, jsonSkinRepository);
	const httpResponse = new HttpResponse();
	const skinsCtrl = new SkinPostController(skinGetter, httpResponse);

	router.post(
		`/skins/buy`,
		authenticateMiddleware,
		// eslint-disable-next-line @typescript-eslint/no-misused-promises
		async (req: Request, res: Response) => await skinsCtrl.run(req, res)
	);
};
