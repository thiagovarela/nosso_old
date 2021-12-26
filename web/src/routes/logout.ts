import { unsetAuthCookie } from '$lib/utils';

/**
 * @type {import('@sveltejs/kit').RequestHandler}
 */

export async function get(): Promise<{ status: number; headers: any }> {
	return {
		status: 302,
		headers: unsetAuthCookie()
	};
}
