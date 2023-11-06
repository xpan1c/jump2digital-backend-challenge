import { Request, Response } from "express";
import { sign } from "jsonwebtoken";

import { UserLogin } from "../../users/application/UserLogin";
import { HttpResponse } from "../routes/HttpResponse";
import { Controller } from "./Controller";

type LoginPostRequest = Request & {
	body: {
		email: string;
		password: string;
	};
};
export class UserLoginPostController implements Controller {
	constructor(private readonly userLogin: UserLogin, private readonly httpResponse: HttpResponse) {}

	async run(req: LoginPostRequest, res: Response): Promise<void> {
		try {
			const { email, password } = req.body;
			const data = await this.userLogin.run({ email, password });
			const accessToken = sign({ id: data.id, email }, process.env.SECRET ?? "", {
				expiresIn: "1h",
			});
			res.cookie("token", accessToken);
			this.httpResponse.NoContent(res);
		} catch (error) {
			console.log(error);
			this.httpResponse.Error(res, error);
		}
	}
}
