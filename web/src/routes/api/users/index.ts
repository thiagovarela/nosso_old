import type { nosso } from '$lib/protos';
import type { IRequest, IPaginatedResponse } from '$lib/types';

type Response =
	| { body: IPaginatedResponse<nosso.users.v1.IUser> }
	| { error: string; status: number };

export async function get(request: IRequest): Promise<Response> {
	const page = request.query.has('page') ? parseInt(request.query.get('page')) : null;
	const size = request.query.has('size') ? parseInt(request.query.get('size')) : null;
	const pageRequest = { page, size };
	console.log(pageRequest)
	try {
		const response = await request.locals.dataSources.users.unary.listUsers({ pageRequest });
		console.log(response)

		return {
			body: { results: response.users, pageInfo: response.pageInfo }
		};
	} catch (e) {
		return {
			error: e.message,
			status: 500
		};
	}
}
