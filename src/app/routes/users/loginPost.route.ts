import { Request, Response, Router } from "express";

import { User } from "../../../shared/infrastructure/persistence/sequelize/config/sequelizeConfig";
import { UserLogin } from "../../../users/application/UserLogin";
import { SequelizeUserRepository } from "../../../users/infrastructure/persistences/sequelize/SequelizeUserRepository";
import { UserLoginPostController } from "../../controllers/UserLoginPostController";
import { HttpResponse } from "../HttpResponse";

export const register = (router: Router): void => {
	//const reqSchema = [body("name").exists().isString()];

	const sequelizeUserRepository = new SequelizeUserRepository(User);
	const userGetter = new UserLogin(sequelizeUserRepository);
	const httpResponse = new HttpResponse();
	const userCtrl = new UserLoginPostController(userGetter, httpResponse);
	router.post(
		"/login",
		//checkExact(reqSchema),
		// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
		//validateReqSchema,
		// eslint-disable-next-line @typescript-eslint/no-misused-promises
		async (req: Request, res: Response) => await userCtrl.run(req, res)
	);
};
