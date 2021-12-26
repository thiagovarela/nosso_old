import type { EndpointOutput } from '@sveltejs/kit/types/endpoint';
import type { IRequest } from '$lib/types';

export async function post(
	request: IRequest & { body: { email: string } }
): Promise<EndpointOutput> {
	const { email } = request.body;
	try {
		const res = await request.locals.dataSources.users.unary.getCode({ email });
		return { body: res };
	} catch (e) {
		return { status: 400, body: { details: e.message } };
	}
}
