import type { Handle } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';
import type { DataSources, IRequest } from '$lib/types';
import { UsersDataSource, DomainsDataSource } from '$lib/datasources';
import { unsetAuthCookie } from '$lib/utils';
import {createGrpcClient} from "$lib/datasources/make-client";

// For now just one client.
const address = process.env['SERVICES_URL'] ?? 'localhost:50051';
const grpcClient = createGrpcClient(address);

/**
 * List of Data Sources
 */
const loadDataSources = () => {
	return {
		users: new UsersDataSource(grpcClient),
		domains: new DomainsDataSource(grpcClient)
	}
};

/**
 * Add session headers if not present.
 * When SvelteKit client-side router is loading a route, some headers are not being sent as part of the request,
 * this makes sure all headers required for this application to work with the backend are forwarded.
 */
async function addSessionHeaders({ request, resolve }) {
	if (!request.locals.headers) {
		request.locals.headers = {
			'accept-language': request.headers['accept-language'],
			'x-forwarded-host': request.headers['x-forwarded-host'] ?? request.headers['host']
		};
	}
	return await resolve(request);
}

/**
 * Initializes all gRPC data sources.
 * Stole this idea from Apollo GraphQL.
 * Each request is initialized with the headers as context,
 * that is why it is important to set {@link addSessionHeaders} before.
 */
async function initializeDataSources({ request, resolve }) {
	const requestContext = request.headers;

	const dataSources = loadDataSources();
	const initializers: any[] = [];
	for (const dataSource of Object.values(dataSources)) {
		if (dataSource.initialize) {
			initializers.push(dataSource.initialize(requestContext));
		}
	}

	await Promise.all(initializers);

	request.locals.dataSources = dataSources;

	return await resolve(request);
}

/**
 * Start the User Session.
 * Looks for the JWT cookie from the browser
 */
async function startUserSession({ request, resolve }: { request: IRequest; resolve: any }) {
	if (!request.headers.cookie) {
		return await resolve(request);
	}
	if (!request.locals.user) {
		try {
			const profile = await request.locals.dataSources.users.unary.getUserProfile({});
			request.locals.user = { email: profile.email, roles: profile.roles };
			return await resolve(request);
			// eslint-disable-next-line no-empty
		} catch (e) {
			const response = await resolve(request);
			const auth =
				request.path.includes('dash/authenticate') || request.path.includes('dash/login');
			if (auth) {
				return response;
			}
			return {
				...response,
				headers: {
					...response.headers,
					...unsetAuthCookie()
				}
			};
		}
	}
}

/**
 * SvelteKit sequential hook that runs for every request.
 * @see addSessionHeaders
 * @see initializeDataSources
 * @see startUserSession
 */
export const handle: Handle = sequence(addSessionHeaders, initializeDataSources, startUserSession);

/**
 * SvelteKit getSession hook.
 * This sets the user and headers into the session store.
 */
export function getSession(request) {
	return {
		user: request.locals.user ? request.locals.user : undefined,
		headers: request.locals.headers ?? {}
	};
}
