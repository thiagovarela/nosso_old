import { nosso } from '$lib/protos';
import { DataSourceBase } from './base';

export class UsersDataSource extends DataSourceBase<nosso.users.v1.UsersService> {
	constructor() {
		super();
		this.unary = nosso.users.v1.UsersService.create(
			this.rpcImplementation.bind(this),
			false,
			false
		);
		this.name = 'nosso.users.v1.UsersService';
		this.info();
	}
}

export class DomainsDataSource extends DataSourceBase<nosso.domains.v1.DomainsService> {
	constructor() {
		super();
		this.unary = nosso.domains.v1.DomainsService.create(
			this.rpcImplementation.bind(this),
			false,
			false
		);
		this.name = 'nosso.domains.v1.DomainsService';
		this.info();
	}
}
