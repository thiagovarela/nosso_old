import type { IRequest } from '$lib/types';

export async function post(request: IRequest & { body: { email: string; token: string } }) {
	const { email, token } = request.body;
	const res = await request.locals.dataSources.users.unary.getAuthenticationToken({
		email,
		token
	});
	return {
		headers: {
			'set-cookie': `jwt=${res.jwt}; SameSite=Lax; HttpOnly; Path=/`
		}
	};
}
