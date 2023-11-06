/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { Response } from "express";
import httpStatus from "http-status";

export class HttpResponse {
	Ok(res: Response, data?: unknown): Response {
		return res.status(httpStatus.OK).json(data);
	}

	Created(res: Response, data?: unknown): Response {
		return res.status(httpStatus.CREATED).json(data);
	}

	NoContent(res: Response): Response {
		return res.status(httpStatus.NO_CONTENT).end();
	}

	BadRequest(res: Response, data?: unknown): Response {
		return res.status(httpStatus.BAD_REQUEST).json({
			error: data,
		});
	}

	NotFound(res: Response, data?: unknown): Response {
		return res.status(httpStatus.NOT_FOUND).json({
			error: data,
		});
	}

	Unauthorized(res: Response, data?: unknown): Response {
		return res.status(httpStatus.UNAUTHORIZED).json({
			error: data,
		});
	}

	UnprocessableContent(res: Response, data?: unknown): Response {
		return res.status(httpStatus.UNPROCESSABLE_ENTITY).json({
			error: data,
		});
	}

	Forbidden(res: Response, data?: unknown): Response {
		return res.status(httpStatus.FORBIDDEN).json({
			error: data,
		});
	}

	Error(res: Response, data?: unknown): Response {
		return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
			error: data,
		});
	}
}
