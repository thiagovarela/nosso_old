import { nosso } from '$lib/protos';
import { DataSourceBase } from './base';
import type {Client} from "@grpc/grpc-js";


export class UsersDataSource extends DataSourceBase<nosso.users.v1.UsersService> {
	constructor(client: Client) {
		super(client);
		this.unary = nosso.users.v1.UsersService.create(
			this.rpcImplementation.bind(this),
			false,
			false
		);
		this.name = 'nosso.users.v1.UsersService';
	}
}

export class DomainsDataSource extends DataSourceBase<nosso.domains.v1.DomainsService> {
	constructor(client: Client) {
		super(client);
		this.unary = nosso.domains.v1.DomainsService.create(
			this.rpcImplementation.bind(this),
			false,
			false
		);
		this.name = 'nosso.domains.v1.DomainsService';
	}
}
