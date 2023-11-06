import { Router } from "express";

import StatusGetController from "../controllers/StatusGet";
import { HttpResponse } from "./HttpResponse";

export const register = (router: Router): void => {
	const statusCtrl = new StatusGetController(new HttpResponse());

	router.get(`/status`, statusCtrl.run.bind(statusCtrl));
};
