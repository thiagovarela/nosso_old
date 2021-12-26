import type { IRequest } from '$lib/types';

export async function get(request: IRequest) {
	const user = await request.locals.dataSources.users.unary.getUserProfile({});

	request.locals.user = { email: user.email, roles: user.roles };

	return {};
}
