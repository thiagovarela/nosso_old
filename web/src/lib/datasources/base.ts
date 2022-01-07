import * as grpc from '@grpc/grpc-js';

export class DataSourceBase<T> {
	unary: T;
	client: grpc.Client;
	name: string;
	requestContext: Record<string, string>;

	constructor(client: grpc.Client) {
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		this.client = client
	}

	createChannel() {
		const Client = grpc.makeGenericClientConstructor({}, '', {});
		const address = process.env['SERVICES_URL'] ?? 'localhost:50051';
		this.client = new Client(address, grpc.credentials.createInsecure(), {
			'grpc.service_config': JSON.stringify({
				loadBalancingPolicy: 'round_robin',
				loadBalancingConfig: [{ round_robin: {} }]
			}),
			'grpc.initial_reconnect_backoff_ms': 5000,
			'grpc.max_reconnect_backoff_ms': 60000,
			'grpc.keepalive_time_ms': 15000,
			'grpc.keepalive_timeout_ms': 10000
		});
	}

	initialize(context: Record<string, string>) {
		this.requestContext = context;
	}

	rpcImplementation(method: any, requestData: any, callback): void {
		const host = this.requestContext?.['x-forwarded-host'] ?? this.requestContext?.['host'];
		const auth = this.authorization(this.requestContext);
		const md = new grpc.Metadata();
		md.set('accept-language', this.requestContext?.['accept-language']);
		md.set('x-forwarded-host', host);
		if (auth) {
			md.set('authorization', auth);
		}

		const deadline = Date.now() + 4000;
		const request = `/${this.name}/${method.name}`;
		this.client.waitForReady(deadline, (err) => {
			if (err) {
				console.log(`Channel is not ready to make request after 4 seconds`, request);
				callback(err);
			} else {
				this.client.makeUnaryRequest(
					request,
					(arg) => arg,
					(arg) => arg,
					requestData,
					md,
					callback
				);
			}
		});
	}
	authorization(requestContext): string | undefined {
		const list: Record<string, string> = {};
		const rc = requestContext?.cookie;

		rc &&
			rc.split(';').forEach(function (cookie) {
				const parts = cookie.split('=');
				list[parts.shift().trim()] = decodeURI(parts.join('='));
			});
		const jwt = list.jwt;
		if (jwt) {
			return `Bearer ${jwt}`;
		}
	}
}
