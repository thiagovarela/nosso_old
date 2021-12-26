import type { IRequest } from '$lib/types';

export async function post(request: IRequest & { body: { email: string } }) {
	const { email } = request.body;

	const user = await request.locals.dataSources.users.unary.registerUser({ email });

	return { body: { user } };
}
