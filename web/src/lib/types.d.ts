import type { ServerRequest } from '@sveltejs/kit/types/hooks';
import { nosso } from '$lib/protos';
import { UsersDataSource, DomainsDataSource } from '$lib/datasources';
declare interface DataSources {
	users: UsersDataSource;
	domains: DomainsDataSource;
}

declare interface ILocals {
	dataSources: DataSources;
	user: Record<string, string | string[]>;
	headers: Record<string, string>;
}

declare interface IRequest<Locals = ILocals> extends ServerRequest {
	locals: Locals;
}

declare interface IPaginatedResponse<T> {
	results?: T[];
	pageInfo: nosso.util.v1.IPageInfo;
}


declare interface User {
	name: string;
	roles: string[];
}