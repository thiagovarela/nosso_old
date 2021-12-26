import type { IRequest } from '$lib/types';
import type { nosso } from '$lib/protos';

type Response = { body: nosso.domains.v1.IDomain } | { error: string; status: number };

export async function get({ params, locals }: IRequest): Promise<Response> {
	const domain = await locals.dataSources.domains.unary.getDomainById({
		id: parseInt(params.id)
	});

	return {
		body: { ...domain.domain }
	};
}

export async function post({
	params,
	locals,
	body
}: IRequest & { body: { name?; allowedHost? } }): Promise<Response> {
	const id = parseInt(params.id);
	const { name, allowedHost } = body;
	const domain = await locals.dataSources.domains.unary.updateDomain({
		domain: { id, name, allowedHost }
	});

	return {
		body: { ...domain.domain }
	};
}
