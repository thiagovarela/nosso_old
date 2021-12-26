import type { IRequest, IPaginatedResponse } from '$lib/types';
import type { nosso } from '$lib/protos';

type Response =
	| { body: IPaginatedResponse<nosso.domains.v1.IDomain> }
	| { error: string; status: number };

export async function get({ locals, query }: IRequest): Promise<Response> {
	const page = query.has('page') ? parseInt(query.get('page')) : null;
	const size = query.has('size') ? parseInt(query.get('size')) : null;
	const pageRequest = { page, size };
	try {
		const response = await locals.dataSources.domains.unary.listDomains({ pageRequest });
		return {
			body: { results: response.domains, pageInfo: response.pageInfo }
		};
	} catch (e) {
		return {
			error: e.message,
			status: 500
		};
	}
}

export async function post(
	request: IRequest & { body: { name: string; allowedHost: string } }
): Promise<{ body: nosso.domains.v1.IDomain }> {
	const { name, allowedHost } = request.body;

	const response = await request.locals.dataSources.domains.unary.addDomain({
		name,
		allowedHost
	});

	return {
		body: { ...response.domain }
	};
}
