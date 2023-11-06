import { Request, Response, Router } from "express";

import { User } from "../../../shared/infrastructure/persistence/sequelize/config/sequelizeConfig";
import { UserRegister } from "../../../users/application/UserRegister";
import { SequelizeUserRepository } from "../../../users/infrastructure/persistences/sequelize/SequelizeUserRepository";
import { UserRegisterPostController } from "../../controllers/UserRegisterPostController";
import { HttpResponse } from "../HttpResponse";

export const register = (router: Router): void => {
	//const reqSchema = [body("name").exists().isString()];

	const sequelizeUserRepository = new SequelizeUserRepository(User);
	const playerCreator = new UserRegister(sequelizeUserRepository);
	const httpResponse = new HttpResponse();
	const userCtrl = new UserRegisterPostController(playerCreator, httpResponse);
	router.post(
		"/register",
		//checkExact(reqSchema),
		// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
		//validateReqSchema,
		// eslint-disable-next-line @typescript-eslint/no-misused-promises
		async (req: Request, res: Response) => await userCtrl.run(req, res)
	);
};
