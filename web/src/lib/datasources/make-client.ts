import * as grpc from "@grpc/grpc-js";


export function createGrpcClient(address: string): grpc.Client {
    const Client = grpc.makeGenericClientConstructor({}, '', {});
    return new Client(address, grpc.credentials.createInsecure(), {
        'grpc.service_config': JSON.stringify({
            loadBalancingPolicy: 'round_robin',
            loadBalancingConfig: [{ round_robin: {} }]
        }),
        'grpc.initial_reconnect_backoff_ms': 5000,
        'grpc.max_reconnect_backoff_ms': 60000,
        'grpc.keepalive_time_ms': 5000,
        'grpc.keepalive_timeout_ms': 1000
    });
}