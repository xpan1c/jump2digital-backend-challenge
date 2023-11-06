import { Request, Response } from "express";

import { UserRegister } from "../../users/application/UserRegister";
import { HttpResponse } from "../routes/HttpResponse";
import { Controller } from "./Controller";

type UserPostRequest = Request & {
	body: {
		id: string;
		name: string;
		email: string;
		password: string;
	};
};
export class UserRegisterPostController implements Controller {
	constructor(
		private readonly userRegister: UserRegister,
		private readonly httpResponse: HttpResponse
	) {}

	async run(req: UserPostRequest, res: Response): Promise<void> {
		try {
			const { name, email, password } = req.body;
			await this.userRegister.run({ name, email, password });
			this.httpResponse.Created(res, { message: "User created" });
		} catch (error) {
			console.log(error);
			this.httpResponse.Error(res, error);
		}
	}
}
