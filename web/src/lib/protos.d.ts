import * as $protobuf from 'protobufjs';
/** Namespace nosso. */
export namespace nosso {
	/** Namespace domains. */
	namespace domains {
		/** Namespace v1. */
		namespace v1 {
			/** Properties of a Domain. */
			interface IDomain {
				/** Domain id */
				id?: number | null;

				/** Domain name */
				name?: string | null;

				/** Domain allowedHost */
				allowedHost?: string | null;

				/** Domain createdAt */
				createdAt?: google.protobuf.ITimestamp | null;

				/** Domain updatedAt */
				updatedAt?: google.protobuf.ITimestamp | null;
			}

			/** Represents a Domain. */
			class Domain implements IDomain {
				/**
				 * Constructs a new Domain.
				 * @param [properties] Properties to set
				 */
				constructor(properties?: nosso.domains.v1.IDomain);

				/** Domain id. */
				public id: number;

				/** Domain name. */
				public name: string;

				/** Domain allowedHost. */
				public allowedHost: string;

				/** Domain createdAt. */
				public createdAt?: google.protobuf.ITimestamp | null;

				/** Domain updatedAt. */
				public updatedAt?: google.protobuf.ITimestamp | null;

				/**
				 * Creates a new Domain instance using the specified properties.
				 * @param [properties] Properties to set
				 * @returns Domain instance
				 */
				public static create(
					properties?: nosso.domains.v1.IDomain
				): nosso.domains.v1.Domain;

				/**
				 * Encodes the specified Domain message. Does not implicitly {@link nosso.domains.v1.Domain.verify|verify} messages.
				 * @param message Domain message or plain object to encode
				 * @param [writer] Writer to encode to
				 * @returns Writer
				 */
				public static encode(
					message: nosso.domains.v1.IDomain,
					writer?: $protobuf.Writer
				): $protobuf.Writer;

				/**
				 * Encodes the specified Domain message, length delimited. Does not implicitly {@link nosso.domains.v1.Domain.verify|verify} messages.
				 * @param message Domain message or plain object to encode
				 * @param [writer] Writer to encode to
				 * @returns Writer
				 */
				public static encodeDelimited(
					message: nosso.domains.v1.IDomain,
					writer?: $protobuf.Writer
				): $protobuf.Writer;

				/**
				 * Decodes a Domain message from the specified reader or buffer.
				 * @param reader Reader or buffer to decode from
				 * @param [length] Message length if known beforehand
				 * @returns Domain
				 * @throws {Error} If the payload is not a reader or valid buffer
				 * @throws {$protobuf.util.ProtocolError} If required fields are missing
				 */
				public static decode(
					reader: $protobuf.Reader | Uint8Array,
					length?: number
				): nosso.domains.v1.Domain;

				/**
				 * Decodes a Domain message from the specified reader or buffer, length delimited.
				 * @param reader Reader or buffer to decode from
				 * @returns Domain
				 * @throws {Error} If the payload is not a reader or valid buffer
				 * @throws {$protobuf.util.ProtocolError} If required fields are missing
				 */
				public static decodeDelimited(
					reader: $protobuf.Reader | Uint8Array
				): nosso.domains.v1.Domain;

				/**
				 * Verifies a Domain message.
				 * @param message Plain object to verify
				 * @returns `null` if valid, otherwise the reason why it is not
				 */
				public static verify(message: { [k: string]: any }): string | null;

				/**
				 * Creates a Domain message from a plain object. Also converts values to their respective internal types.
				 * @param object Plain object
				 * @returns Domain
				 */
				public static fromObject(object: { [k: string]: any }): nosso.domains.v1.Domain;

				/**
				 * Creates a plain object from a Domain message. Also converts values to other types if specified.
				 * @param message Domain
				 * @param [options] Conversion options
				 * @returns Plain object
				 */
				public static toObject(
					message: nosso.domains.v1.Domain,
					options?: $protobuf.IConversionOptions
				): { [k: string]: any };

				/**
				 * Converts this Domain to JSON.
				 * @returns JSON object
				 */
				public toJSON(): { [k: string]: any };
			}

			/** Represents a DomainsService */
			class DomainsService extends $protobuf.rpc.Service {
				/**
				 * Constructs a new DomainsService service.
				 * @param rpcImpl RPC implementation
				 * @param [requestDelimited=false] Whether requests are length-delimited
				 * @param [responseDelimited=false] Whether responses are length-delimited
				 */
				constructor(
					rpcImpl: $protobuf.RPCImpl,
					requestDelimited?: boolean,
					responseDelimited?: boolean
				);

				/**
				 * Creates new DomainsService service using the specified rpc implementation.
				 * @param rpcImpl RPC implementation
				 * @param [requestDelimited=false] Whether requests are length-delimited
				 * @param [responseDelimited=false] Whether responses are length-delimited
				 * @returns RPC service. Useful where requests and/or responses are streamed.
				 */
				public static create(
					rpcImpl: $protobuf.RPCImpl,
					requestDelimited?: boolean,
					responseDelimited?: boolean
				): DomainsService;

				/**
				 * Calls AddDomain.
				 * @param request AddDomainRequest message or plain object
				 * @param callback Node-style callback called with the error, if any, and AddDomainResponse
				 */
				public addDomain(
					request: nosso.domains.v1.IAddDomainRequest,
					callback: nosso.domains.v1.DomainsService.AddDomainCallback
				): void;

				/**
				 * Calls AddDomain.
				 * @param request AddDomainRequest message or plain object
				 * @returns Promise
				 */
				public addDomain(
					request: nosso.domains.v1.IAddDomainRequest
				): Promise<nosso.domains.v1.AddDomainResponse>;

				/**
				 * Calls UpdateDomain.
				 * @param request UpdateDomainRequest message or plain object
				 * @param callback Node-style callback called with the error, if any, and UpdateDomainResponse
				 */
				public updateDomain(
					request: nosso.domains.v1.IUpdateDomainRequest,
					callback: nosso.domains.v1.DomainsService.UpdateDomainCallback
				): void;

				/**
				 * Calls UpdateDomain.
				 * @param request UpdateDomainRequest message or plain object
				 * @returns Promise
				 */
				public updateDomain(
					request: nosso.domains.v1.IUpdateDomainRequest
				): Promise<nosso.domains.v1.UpdateDomainResponse>;

				/**
				 * Calls ListDomains.
				 * @param request ListDomainsRequest message or plain object
				 * @param callback Node-style callback called with the error, if any, and ListDomainsResponse
				 */
				public listDomains(
					request: nosso.domains.v1.IListDomainsRequest,
					callback: nosso.domains.v1.DomainsService.ListDomainsCallback
				): void;

				/**
				 * Calls ListDomains.
				 * @param request ListDomainsRequest message or plain object
				 * @returns Promise
				 */
				public listDomains(
					request: nosso.domains.v1.IListDomainsRequest
				): Promise<nosso.domains.v1.ListDomainsResponse>;

				/**
				 * Calls GetDomainById.
				 * @param request GetDomainByIdRequest message or plain object
				 * @param callback Node-style callback called with the error, if any, and GetDomainByIdResponse
				 */
				public getDomainById(
					request: nosso.domains.v1.IGetDomainByIdRequest,
					callback: nosso.domains.v1.DomainsService.GetDomainByIdCallback
				): void;

				/**
				 * Calls GetDomainById.
				 * @param request GetDomainByIdRequest message or plain object
				 * @returns Promise
				 */
				public getDomainById(
					request: nosso.domains.v1.IGetDomainByIdRequest
				): Promise<nosso.domains.v1.GetDomainByIdResponse>;

				/**
				 * Calls GetDomainByIds.
				 * @param request GetDomainByIdsRequest message or plain object
				 * @param callback Node-style callback called with the error, if any, and GetDomainByIdsResponse
				 */
				public getDomainByIds(
					request: nosso.domains.v1.IGetDomainByIdsRequest,
					callback: nosso.domains.v1.DomainsService.GetDomainByIdsCallback
				): void;

				/**
				 * Calls GetDomainByIds.
				 * @param request GetDomainByIdsRequest message or plain object
				 * @returns Promise
				 */
				public getDomainByIds(
					request: nosso.domains.v1.IGetDomainByIdsRequest
				): Promise<nosso.domains.v1.GetDomainByIdsResponse>;
			}

			namespace DomainsService {
				/**
				 * Callback as used by {@link nosso.domains.v1.DomainsService#addDomain}.
				 * @param error Error, if any
				 * @param [response] AddDomainResponse
				 */
				type AddDomainCallback = (
					error: Error | null,
					response?: nosso.domains.v1.AddDomainResponse
				) => void;

				/**
				 * Callback as used by {@link nosso.domains.v1.DomainsService#updateDomain}.
				 * @param error Error, if any
				 * @param [response] UpdateDomainResponse
				 */
				type UpdateDomainCallback = (
					error: Error | null,
					response?: nosso.domains.v1.UpdateDomainResponse
				) => void;

				/**
				 * Callback as used by {@link nosso.domains.v1.DomainsService#listDomains}.
				 * @param error Error, if any
				 * @param [response] ListDomainsResponse
				 */
				type ListDomainsCallback = (
					error: Error | null,
					response?: nosso.domains.v1.ListDomainsResponse
				) => void;

				/**
				 * Callback as used by {@link nosso.domains.v1.DomainsService#getDomainById}.
				 * @param error Error, if any
				 * @param [response] GetDomainByIdResponse
				 */
				type GetDomainByIdCallback = (
					error: Error | null,
					response?: nosso.domains.v1.GetDomainByIdResponse
				) => void;

				/**
				 * Callback as used by {@link nosso.domains.v1.DomainsService#getDomainByIds}.
				 * @param error Error, if any
				 * @param [response] GetDomainByIdsResponse
				 */
				type GetDomainByIdsCallback = (
					error: Error | null,
					response?: nosso.domains.v1.GetDomainByIdsResponse
				) => void;
			}

			/** Properties of an AddDomainRequest. */
			interface IAddDomainRequest {
				/** AddDomainRequest name */
				name?: string | null;

				/** AddDomainRequest allowedHost */
				allowedHost?: string | null;
			}

			/** Represents an AddDomainRequest. */
			class AddDomainRequest implements IAddDomainRequest {
				/**
				 * Constructs a new AddDomainRequest.
				 * @param [properties] Properties to set
				 */
				constructor(properties?: nosso.domains.v1.IAddDomainRequest);

				/** AddDomainRequest name. */
				public name: string;

				/** AddDomainRequest allowedHost. */
				public allowedHost: string;

				/**
				 * Creates a new AddDomainRequest instance using the specified properties.
				 * @param [properties] Properties to set
				 * @returns AddDomainRequest instance
				 */
				public static create(
					properties?: nosso.domains.v1.IAddDomainRequest
				): nosso.domains.v1.AddDomainRequest;

				/**
				 * Encodes the specified AddDomainRequest message. Does not implicitly {@link nosso.domains.v1.AddDomainRequest.verify|verify} messages.
				 * @param message AddDomainRequest message or plain object to encode
				 * @param [writer] Writer to encode to
				 * @returns Writer
				 */
				public static encode(
					message: nosso.domains.v1.IAddDomainRequest,
					writer?: $protobuf.Writer
				): $protobuf.Writer;

				/**
				 * Encodes the specified AddDomainRequest message, length delimited. Does not implicitly {@link nosso.domains.v1.AddDomainRequest.verify|verify} messages.
				 * @param message AddDomainRequest message or plain object to encode
				 * @param [writer] Writer to encode to
				 * @returns Writer
				 */
				public static encodeDelimited(
					message: nosso.domains.v1.IAddDomainRequest,
					writer?: $protobuf.Writer
				): $protobuf.Writer;

				/**
				 * Decodes an AddDomainRequest message from the specified reader or buffer.
				 * @param reader Reader or buffer to decode from
				 * @param [length] Message length if known beforehand
				 * @returns AddDomainRequest
				 * @throws {Error} If the payload is not a reader or valid buffer
				 * @throws {$protobuf.util.ProtocolError} If required fields are missing
				 */
				public static decode(
					reader: $protobuf.Reader | Uint8Array,
					length?: number
				): nosso.domains.v1.AddDomainRequest;

				/**
				 * Decodes an AddDomainRequest message from the specified reader or buffer, length delimited.
				 * @param reader Reader or buffer to decode from
				 * @returns AddDomainRequest
				 * @throws {Error} If the payload is not a reader or valid buffer
				 * @throws {$protobuf.util.ProtocolError} If required fields are missing
				 */
				public static decodeDelimited(
					reader: $protobuf.Reader | Uint8Array
				): nosso.domains.v1.AddDomainRequest;

				/**
				 * Verifies an AddDomainRequest message.
				 * @param message Plain object to verify
				 * @returns `null` if valid, otherwise the reason why it is not
				 */
				public static verify(message: { [k: string]: any }): string | null;

				/**
				 * Creates an AddDomainRequest message from a plain object. Also converts values to their respective internal types.
				 * @param object Plain object
				 * @returns AddDomainRequest
				 */
				public static fromObject(object: {
					[k: string]: any;
				}): nosso.domains.v1.AddDomainRequest;

				/**
				 * Creates a plain object from an AddDomainRequest message. Also converts values to other types if specified.
				 * @param message AddDomainRequest
				 * @param [options] Conversion options
				 * @returns Plain object
				 */
				public static toObject(
					message: nosso.domains.v1.AddDomainRequest,
					options?: $protobuf.IConversionOptions
				): { [k: string]: any };

				/**
				 * Converts this AddDomainRequest to JSON.
				 * @returns JSON object
				 */
				public toJSON(): { [k: string]: any };
			}

			/** Properties of an AddDomainResponse. */
			interface IAddDomainResponse {
				/** AddDomainResponse domain */
				domain?: nosso.domains.v1.IDomain | null;
			}

			/** Represents an AddDomainResponse. */
			class AddDomainResponse implements IAddDomainResponse {
				/**
				 * Constructs a new AddDomainResponse.
				 * @param [properties] Properties to set
				 */
				constructor(properties?: nosso.domains.v1.IAddDomainResponse);

				/** AddDomainResponse domain. */
				public domain?: nosso.domains.v1.IDomain | null;

				/**
				 * Creates a new AddDomainResponse instance using the specified properties.
				 * @param [properties] Properties to set
				 * @returns AddDomainResponse instance
				 */
				public static create(
					properties?: nosso.domains.v1.IAddDomainResponse
				): nosso.domains.v1.AddDomainResponse;

				/**
				 * Encodes the specified AddDomainResponse message. Does not implicitly {@link nosso.domains.v1.AddDomainResponse.verify|verify} messages.
				 * @param message AddDomainResponse message or plain object to encode
				 * @param [writer] Writer to encode to
				 * @returns Writer
				 */
				public static encode(
					message: nosso.domains.v1.IAddDomainResponse,
					writer?: $protobuf.Writer
				): $protobuf.Writer;

				/**
				 * Encodes the specified AddDomainResponse message, length delimited. Does not implicitly {@link nosso.domains.v1.AddDomainResponse.verify|verify} messages.
				 * @param message AddDomainResponse message or plain object to encode
				 * @param [writer] Writer to encode to
				 * @returns Writer
				 */
				public static encodeDelimited(
					message: nosso.domains.v1.IAddDomainResponse,
					writer?: $protobuf.Writer
				): $protobuf.Writer;

				/**
				 * Decodes an AddDomainResponse message from the specified reader or buffer.
				 * @param reader Reader or buffer to decode from
				 * @param [length] Message length if known beforehand
				 * @returns AddDomainResponse
				 * @throws {Error} If the payload is not a reader or valid buffer
				 * @throws {$protobuf.util.ProtocolError} If required fields are missing
				 */
				public static decode(
					reader: $protobuf.Reader | Uint8Array,
					length?: number
				): nosso.domains.v1.AddDomainResponse;

				/**
				 * Decodes an AddDomainResponse message from the specified reader or buffer, length delimited.
				 * @param reader Reader or buffer to decode from
				 * @returns AddDomainResponse
				 * @throws {Error} If the payload is not a reader or valid buffer
				 * @throws {$protobuf.util.ProtocolError} If required fields are missing
				 */
				public static decodeDelimited(
					reader: $protobuf.Reader | Uint8Array
				): nosso.domains.v1.AddDomainResponse;

				/**
				 * Verifies an AddDomainResponse message.
				 * @param message Plain object to verify
				 * @returns `null` if valid, otherwise the reason why it is not
				 */
				public static verify(message: { [k: string]: any }): string | null;

				/**
				 * Creates an AddDomainResponse message from a plain object. Also converts values to their respective internal types.
				 * @param object Plain object
				 * @returns AddDomainResponse
				 */
				public static fromObject(object: {
					[k: string]: any;
				}): nosso.domains.v1.AddDomainResponse;

				/**
				 * Creates a plain object from an AddDomainResponse message. Also converts values to other types if specified.
				 * @param message AddDomainResponse
				 * @param [options] Conversion options
				 * @returns Plain object
				 */
				public static toObject(
					message: nosso.domains.v1.AddDomainResponse,
					options?: $protobuf.IConversionOptions
				): { [k: string]: any };

				/**
				 * Converts this AddDomainResponse to JSON.
				 * @returns JSON object
				 */
				public toJSON(): { [k: string]: any };
			}

			/** Properties of an UpdateDomainRequest. */
			interface IUpdateDomainRequest {
				/** UpdateDomainRequest domain */
				domain?: nosso.domains.v1.IDomain | null;
			}

			/** Represents an UpdateDomainRequest. */
			class UpdateDomainRequest implements IUpdateDomainRequest {
				/**
				 * Constructs a new UpdateDomainRequest.
				 * @param [properties] Properties to set
				 */
				constructor(properties?: nosso.domains.v1.IUpdateDomainRequest);

				/** UpdateDomainRequest domain. */
				public domain?: nosso.domains.v1.IDomain | null;

				/**
				 * Creates a new UpdateDomainRequest instance using the specified properties.
				 * @param [properties] Properties to set
				 * @returns UpdateDomainRequest instance
				 */
				public static create(
					properties?: nosso.domains.v1.IUpdateDomainRequest
				): nosso.domains.v1.UpdateDomainRequest;

				/**
				 * Encodes the specified UpdateDomainRequest message. Does not implicitly {@link nosso.domains.v1.UpdateDomainRequest.verify|verify} messages.
				 * @param message UpdateDomainRequest message or plain object to encode
				 * @param [writer] Writer to encode to
				 * @returns Writer
				 */
				public static encode(
					message: nosso.domains.v1.IUpdateDomainRequest,
					writer?: $protobuf.Writer
				): $protobuf.Writer;

				/**
				 * Encodes the specified UpdateDomainRequest message, length delimited. Does not implicitly {@link nosso.domains.v1.UpdateDomainRequest.verify|verify} messages.
				 * @param message UpdateDomainRequest message or plain object to encode
				 * @param [writer] Writer to encode to
				 * @returns Writer
				 */
				public static encodeDelimited(
					message: nosso.domains.v1.IUpdateDomainRequest,
					writer?: $protobuf.Writer
				): $protobuf.Writer;

				/**
				 * Decodes an UpdateDomainRequest message from the specified reader or buffer.
				 * @param reader Reader or buffer to decode from
				 * @param [length] Message length if known beforehand
				 * @returns UpdateDomainRequest
				 * @throws {Error} If the payload is not a reader or valid buffer
				 * @throws {$protobuf.util.ProtocolError} If required fields are missing
				 */
				public static decode(
					reader: $protobuf.Reader | Uint8Array,
					length?: number
				): nosso.domains.v1.UpdateDomainRequest;

				/**
				 * Decodes an UpdateDomainRequest message from the specified reader or buffer, length delimited.
				 * @param reader Reader or buffer to decode from
				 * @returns UpdateDomainRequest
				 * @throws {Error} If the payload is not a reader or valid buffer
				 * @throws {$protobuf.util.ProtocolError} If required fields are missing
				 */
				public static decodeDelimited(
					reader: $protobuf.Reader | Uint8Array
				): nosso.domains.v1.UpdateDomainRequest;

				/**
				 * Verifies an UpdateDomainRequest message.
				 * @param message Plain object to verify
				 * @returns `null` if valid, otherwise the reason why it is not
				 */
				public static verify(message: { [k: string]: any }): string | null;

				/**
				 * Creates an UpdateDomainRequest message from a plain object. Also converts values to their respective internal types.
				 * @param object Plain object
				 * @returns UpdateDomainRequest
				 */
				public static fromObject(object: {
					[k: string]: any;
				}): nosso.domains.v1.UpdateDomainRequest;

				/**
				 * Creates a plain object from an UpdateDomainRequest message. Also converts values to other types if specified.
				 * @param message UpdateDomainRequest
				 * @param [options] Conversion options
				 * @returns Plain object
				 */
				public static toObject(
					message: nosso.domains.v1.UpdateDomainRequest,
					options?: $protobuf.IConversionOptions
				): { [k: string]: any };

				/**
				 * Converts this UpdateDomainRequest to JSON.
				 * @returns JSON object
				 */
				public toJSON(): { [k: string]: any };
			}

			/** Properties of an UpdateDomainResponse. */
			interface IUpdateDomainResponse {
				/** UpdateDomainResponse domain */
				domain?: nosso.domains.v1.IDomain | null;
			}

			/** Represents an UpdateDomainResponse. */
			class UpdateDomainResponse implements IUpdateDomainResponse {
				/**
				 * Constructs a new UpdateDomainResponse.
				 * @param [properties] Properties to set
				 */
				constructor(properties?: nosso.domains.v1.IUpdateDomainResponse);

				/** UpdateDomainResponse domain. */
				public domain?: nosso.domains.v1.IDomain | null;

				/**
				 * Creates a new UpdateDomainResponse instance using the specified properties.
				 * @param [properties] Properties to set
				 * @returns UpdateDomainResponse instance
				 */
				public static create(
					properties?: nosso.domains.v1.IUpdateDomainResponse
				): nosso.domains.v1.UpdateDomainResponse;

				/**
				 * Encodes the specified UpdateDomainResponse message. Does not implicitly {@link nosso.domains.v1.UpdateDomainResponse.verify|verify} messages.
				 * @param message UpdateDomainResponse message or plain object to encode
				 * @param [writer] Writer to encode to
				 * @returns Writer
				 */
				public static encode(
					message: nosso.domains.v1.IUpdateDomainResponse,
					writer?: $protobuf.Writer
				): $protobuf.Writer;

				/**
				 * Encodes the specified UpdateDomainResponse message, length delimited. Does not implicitly {@link nosso.domains.v1.UpdateDomainResponse.verify|verify} messages.
				 * @param message UpdateDomainResponse message or plain object to encode
				 * @param [writer] Writer to encode to
				 * @returns Writer
				 */
				public static encodeDelimited(
					message: nosso.domains.v1.IUpdateDomainResponse,
					writer?: $protobuf.Writer
				): $protobuf.Writer;

				/**
				 * Decodes an UpdateDomainResponse message from the specified reader or buffer.
				 * @param reader Reader or buffer to decode from
				 * @param [length] Message length if known beforehand
				 * @returns UpdateDomainResponse
				 * @throws {Error} If the payload is not a reader or valid buffer
				 * @throws {$protobuf.util.ProtocolError} If required fields are missing
				 */
				public static decode(
					reader: $protobuf.Reader | Uint8Array,
					length?: number
				): nosso.domains.v1.UpdateDomainResponse;

				/**
				 * Decodes an UpdateDomainResponse message from the specified reader or buffer, length delimited.
				 * @param reader Reader or buffer to decode from
				 * @returns UpdateDomainResponse
				 * @throws {Error} If the payload is not a reader or valid buffer
				 * @throws {$protobuf.util.ProtocolError} If required fields are missing
				 */
				public static decodeDelimited(
					reader: $protobuf.Reader | Uint8Array
				): nosso.domains.v1.UpdateDomainResponse;

				/**
				 * Verifies an UpdateDomainResponse message.
				 * @param message Plain object to verify
				 * @returns `null` if valid, otherwise the reason why it is not
				 */
				public static verify(message: { [k: string]: any }): string | null;

				/**
				 * Creates an UpdateDomainResponse message from a plain object. Also converts values to their respective internal types.
				 * @param object Plain object
				 * @returns UpdateDomainResponse
				 */
				public static fromObject(object: {
					[k: string]: any;
				}): nosso.domains.v1.UpdateDomainResponse;

				/**
				 * Creates a plain object from an UpdateDomainResponse message. Also converts values to other types if specified.
				 * @param message UpdateDomainResponse
				 * @param [options] Conversion options
				 * @returns Plain object
				 */
				public static toObject(
					message: nosso.domains.v1.UpdateDomainResponse,
					options?: $protobuf.IConversionOptions
				): { [k: string]: any };

				/**
				 * Converts this UpdateDomainResponse to JSON.
				 * @returns JSON object
				 */
				public toJSON(): { [k: string]: any };
			}

			/** Properties of a ListDomainsRequest. */
			interface IListDomainsRequest {
				/** ListDomainsRequest pageRequest */
				pageRequest?: nosso.util.v1.IPageRequest | null;
			}

			/** Represents a ListDomainsRequest. */
			class ListDomainsRequest implements IListDomainsRequest {
				/**
				 * Constructs a new ListDomainsRequest.
				 * @param [properties] Properties to set
				 */
				constructor(properties?: nosso.domains.v1.IListDomainsRequest);

				/** ListDomainsRequest pageRequest. */
				public pageRequest?: nosso.util.v1.IPageRequest | null;

				/**
				 * Creates a new ListDomainsRequest instance using the specified properties.
				 * @param [properties] Properties to set
				 * @returns ListDomainsRequest instance
				 */
				public static create(
					properties?: nosso.domains.v1.IListDomainsRequest
				): nosso.domains.v1.ListDomainsRequest;

				/**
				 * Encodes the specified ListDomainsRequest message. Does not implicitly {@link nosso.domains.v1.ListDomainsRequest.verify|verify} messages.
				 * @param message ListDomainsRequest message or plain object to encode
				 * @param [writer] Writer to encode to
				 * @returns Writer
				 */
				public static encode(
					message: nosso.domains.v1.IListDomainsRequest,
					writer?: $protobuf.Writer
				): $protobuf.Writer;

				/**
				 * Encodes the specified ListDomainsRequest message, length delimited. Does not implicitly {@link nosso.domains.v1.ListDomainsRequest.verify|verify} messages.
				 * @param message ListDomainsRequest message or plain object to encode
				 * @param [writer] Writer to encode to
				 * @returns Writer
				 */
				public static encodeDelimited(
					message: nosso.domains.v1.IListDomainsRequest,
					writer?: $protobuf.Writer
				): $protobuf.Writer;

				/**
				 * Decodes a ListDomainsRequest message from the specified reader or buffer.
				 * @param reader Reader or buffer to decode from
				 * @param [length] Message length if known beforehand
				 * @returns ListDomainsRequest
				 * @throws {Error} If the payload is not a reader or valid buffer
				 * @throws {$protobuf.util.ProtocolError} If required fields are missing
				 */
				public static decode(
					reader: $protobuf.Reader | Uint8Array,
					length?: number
				): nosso.domains.v1.ListDomainsRequest;

				/**
				 * Decodes a ListDomainsRequest message from the specified reader or buffer, length delimited.
				 * @param reader Reader or buffer to decode from
				 * @returns ListDomainsRequest
				 * @throws {Error} If the payload is not a reader or valid buffer
				 * @throws {$protobuf.util.ProtocolError} If required fields are missing
				 */
				public static decodeDelimited(
					reader: $protobuf.Reader | Uint8Array
				): nosso.domains.v1.ListDomainsRequest;

				/**
				 * Verifies a ListDomainsRequest message.
				 * @param message Plain object to verify
				 * @returns `null` if valid, otherwise the reason why it is not
				 */
				public static verify(message: { [k: string]: any }): string | null;

				/**
				 * Creates a ListDomainsRequest message from a plain object. Also converts values to their respective internal types.
				 * @param object Plain object
				 * @returns ListDomainsRequest
				 */
				public static fromObject(object: {
					[k: string]: any;
				}): nosso.domains.v1.ListDomainsRequest;

				/**
				 * Creates a plain object from a ListDomainsRequest message. Also converts values to other types if specified.
				 * @param message ListDomainsRequest
				 * @param [options] Conversion options
				 * @returns Plain object
				 */
				public static toObject(
					message: nosso.domains.v1.ListDomainsRequest,
					options?: $protobuf.IConversionOptions
				): { [k: string]: any };

				/**
				 * Converts this ListDomainsRequest to JSON.
				 * @returns JSON object
				 */
				public toJSON(): { [k: string]: any };
			}

			/** Properties of a ListDomainsResponse. */
			interface IListDomainsResponse {
				/** ListDomainsResponse pageInfo */
				pageInfo?: nosso.util.v1.IPageInfo | null;

				/** ListDomainsResponse domains */
				domains?: nosso.domains.v1.IDomain[] | null;
			}

			/** Represents a ListDomainsResponse. */
			class ListDomainsResponse implements IListDomainsResponse {
				/**
				 * Constructs a new ListDomainsResponse.
				 * @param [properties] Properties to set
				 */
				constructor(properties?: nosso.domains.v1.IListDomainsResponse);

				/** ListDomainsResponse pageInfo. */
				public pageInfo?: nosso.util.v1.IPageInfo | null;

				/** ListDomainsResponse domains. */
				public domains: nosso.domains.v1.IDomain[];

				/**
				 * Creates a new ListDomainsResponse instance using the specified properties.
				 * @param [properties] Properties to set
				 * @returns ListDomainsResponse instance
				 */
				public static create(
					properties?: nosso.domains.v1.IListDomainsResponse
				): nosso.domains.v1.ListDomainsResponse;

				/**
				 * Encodes the specified ListDomainsResponse message. Does not implicitly {@link nosso.domains.v1.ListDomainsResponse.verify|verify} messages.
				 * @param message ListDomainsResponse message or plain object to encode
				 * @param [writer] Writer to encode to
				 * @returns Writer
				 */
				public static encode(
					message: nosso.domains.v1.IListDomainsResponse,
					writer?: $protobuf.Writer
				): $protobuf.Writer;

				/**
				 * Encodes the specified ListDomainsResponse message, length delimited. Does not implicitly {@link nosso.domains.v1.ListDomainsResponse.verify|verify} messages.
				 * @param message ListDomainsResponse message or plain object to encode
				 * @param [writer] Writer to encode to
				 * @returns Writer
				 */
				public static encodeDelimited(
					message: nosso.domains.v1.IListDomainsResponse,
					writer?: $protobuf.Writer
				): $protobuf.Writer;

				/**
				 * Decodes a ListDomainsResponse message from the specified reader or buffer.
				 * @param reader Reader or buffer to decode from
				 * @param [length] Message length if known beforehand
				 * @returns ListDomainsResponse
				 * @throws {Error} If the payload is not a reader or valid buffer
				 * @throws {$protobuf.util.ProtocolError} If required fields are missing
				 */
				public static decode(
					reader: $protobuf.Reader | Uint8Array,
					length?: number
				): nosso.domains.v1.ListDomainsResponse;

				/**
				 * Decodes a ListDomainsResponse message from the specified reader or buffer, length delimited.
				 * @param reader Reader or buffer to decode from
				 * @returns ListDomainsResponse
				 * @throws {Error} If the payload is not a reader or valid buffer
				 * @throws {$protobuf.util.ProtocolError} If required fields are missing
				 */
				public static decodeDelimited(
					reader: $protobuf.Reader | Uint8Array
				): nosso.domains.v1.ListDomainsResponse;

				/**
				 * Verifies a ListDomainsResponse message.
				 * @param message Plain object to verify
				 * @returns `null` if valid, otherwise the reason why it is not
				 */
				public static verify(message: { [k: string]: any }): string | null;

				/**
				 * Creates a ListDomainsResponse message from a plain object. Also converts values to their respective internal types.
				 * @param object Plain object
				 * @returns ListDomainsResponse
				 */
				public static fromObject(object: {
					[k: string]: any;
				}): nosso.domains.v1.ListDomainsResponse;

				/**
				 * Creates a plain object from a ListDomainsResponse message. Also converts values to other types if specified.
				 * @param message ListDomainsResponse
				 * @param [options] Conversion options
				 * @returns Plain object
				 */
				public static toObject(
					message: nosso.domains.v1.ListDomainsResponse,
					options?: $protobuf.IConversionOptions
				): { [k: string]: any };

				/**
				 * Converts this ListDomainsResponse to JSON.
				 * @returns JSON object
				 */
				public toJSON(): { [k: string]: any };
			}

			/** Properties of a GetDomainByIdRequest. */
			interface IGetDomainByIdRequest {
				/** GetDomainByIdRequest id */
				id?: number | null;
			}

			/** Represents a GetDomainByIdRequest. */
			class GetDomainByIdRequest implements IGetDomainByIdRequest {
				/**
				 * Constructs a new GetDomainByIdRequest.
				 * @param [properties] Properties to set
				 */
				constructor(properties?: nosso.domains.v1.IGetDomainByIdRequest);

				/** GetDomainByIdRequest id. */
				public id: number;

				/**
				 * Creates a new GetDomainByIdRequest instance using the specified properties.
				 * @param [properties] Properties to set
				 * @returns GetDomainByIdRequest instance
				 */
				public static create(
					properties?: nosso.domains.v1.IGetDomainByIdRequest
				): nosso.domains.v1.GetDomainByIdRequest;

				/**
				 * Encodes the specified GetDomainByIdRequest message. Does not implicitly {@link nosso.domains.v1.GetDomainByIdRequest.verify|verify} messages.
				 * @param message GetDomainByIdRequest message or plain object to encode
				 * @param [writer] Writer to encode to
				 * @returns Writer
				 */
				public static encode(
					message: nosso.domains.v1.IGetDomainByIdRequest,
					writer?: $protobuf.Writer
				): $protobuf.Writer;

				/**
				 * Encodes the specified GetDomainByIdRequest message, length delimited. Does not implicitly {@link nosso.domains.v1.GetDomainByIdRequest.verify|verify} messages.
				 * @param message GetDomainByIdRequest message or plain object to encode
				 * @param [writer] Writer to encode to
				 * @returns Writer
				 */
				public static encodeDelimited(
					message: nosso.domains.v1.IGetDomainByIdRequest,
					writer?: $protobuf.Writer
				): $protobuf.Writer;

				/**
				 * Decodes a GetDomainByIdRequest message from the specified reader or buffer.
				 * @param reader Reader or buffer to decode from
				 * @param [length] Message length if known beforehand
				 * @returns GetDomainByIdRequest
				 * @throws {Error} If the payload is not a reader or valid buffer
				 * @throws {$protobuf.util.ProtocolError} If required fields are missing
				 */
				public static decode(
					reader: $protobuf.Reader | Uint8Array,
					length?: number
				): nosso.domains.v1.GetDomainByIdRequest;

				/**
				 * Decodes a GetDomainByIdRequest message from the specified reader or buffer, length delimited.
				 * @param reader Reader or buffer to decode from
				 * @returns GetDomainByIdRequest
				 * @throws {Error} If the payload is not a reader or valid buffer
				 * @throws {$protobuf.util.ProtocolError} If required fields are missing
				 */
				public static decodeDelimited(
					reader: $protobuf.Reader | Uint8Array
				): nosso.domains.v1.GetDomainByIdRequest;

				/**
				 * Verifies a GetDomainByIdRequest message.
				 * @param message Plain object to verify
				 * @returns `null` if valid, otherwise the reason why it is not
				 */
				public static verify(message: { [k: string]: any }): string | null;

				/**
				 * Creates a GetDomainByIdRequest message from a plain object. Also converts values to their respective internal types.
				 * @param object Plain object
				 * @returns GetDomainByIdRequest
				 */
				public static fromObject(object: {
					[k: string]: any;
				}): nosso.domains.v1.GetDomainByIdRequest;

				/**
				 * Creates a plain object from a GetDomainByIdRequest message. Also converts values to other types if specified.
				 * @param message GetDomainByIdRequest
				 * @param [options] Conversion options
				 * @returns Plain object
				 */
				public static toObject(
					message: nosso.domains.v1.GetDomainByIdRequest,
					options?: $protobuf.IConversionOptions
				): { [k: string]: any };

				/**
				 * Converts this GetDomainByIdRequest to JSON.
				 * @returns JSON object
				 */
				public toJSON(): { [k: string]: any };
			}

			/** Properties of a GetDomainByIdResponse. */
			interface IGetDomainByIdResponse {
				/** GetDomainByIdResponse domain */
				domain?: nosso.domains.v1.IDomain | null;
			}

			/** Represents a GetDomainByIdResponse. */
			class GetDomainByIdResponse implements IGetDomainByIdResponse {
				/**
				 * Constructs a new GetDomainByIdResponse.
				 * @param [properties] Properties to set
				 */
				constructor(properties?: nosso.domains.v1.IGetDomainByIdResponse);

				/** GetDomainByIdResponse domain. */
				public domain?: nosso.domains.v1.IDomain | null;

				/**
				 * Creates a new GetDomainByIdResponse instance using the specified properties.
				 * @param [properties] Properties to set
				 * @returns GetDomainByIdResponse instance
				 */
				public static create(
					properties?: nosso.domains.v1.IGetDomainByIdResponse
				): nosso.domains.v1.GetDomainByIdResponse;

				/**
				 * Encodes the specified GetDomainByIdResponse message. Does not implicitly {@link nosso.domains.v1.GetDomainByIdResponse.verify|verify} messages.
				 * @param message GetDomainByIdResponse message or plain object to encode
				 * @param [writer] Writer to encode to
				 * @returns Writer
				 */
				public static encode(
					message: nosso.domains.v1.IGetDomainByIdResponse,
					writer?: $protobuf.Writer
				): $protobuf.Writer;

				/**
				 * Encodes the specified GetDomainByIdResponse message, length delimited. Does not implicitly {@link nosso.domains.v1.GetDomainByIdResponse.verify|verify} messages.
				 * @param message GetDomainByIdResponse message or plain object to encode
				 * @param [writer] Writer to encode to
				 * @returns Writer
				 */
				public static encodeDelimited(
					message: nosso.domains.v1.IGetDomainByIdResponse,
					writer?: $protobuf.Writer
				): $protobuf.Writer;

				/**
				 * Decodes a GetDomainByIdResponse message from the specified reader or buffer.
				 * @param reader Reader or buffer to decode from
				 * @param [length] Message length if known beforehand
				 * @returns GetDomainByIdResponse
				 * @throws {Error} If the payload is not a reader or valid buffer
				 * @throws {$protobuf.util.ProtocolError} If required fields are missing
				 */
				public static decode(
					reader: $protobuf.Reader | Uint8Array,
					length?: number
				): nosso.domains.v1.GetDomainByIdResponse;

				/**
				 * Decodes a GetDomainByIdResponse message from the specified reader or buffer, length delimited.
				 * @param reader Reader or buffer to decode from
				 * @returns GetDomainByIdResponse
				 * @throws {Error} If the payload is not a reader or valid buffer
				 * @throws {$protobuf.util.ProtocolError} If required fields are missing
				 */
				public static decodeDelimited(
					reader: $protobuf.Reader | Uint8Array
				): nosso.domains.v1.GetDomainByIdResponse;

				/**
				 * Verifies a GetDomainByIdResponse message.
				 * @param message Plain object to verify
				 * @returns `null` if valid, otherwise the reason why it is not
				 */
				public static verify(message: { [k: string]: any }): string | null;

				/**
				 * Creates a GetDomainByIdResponse message from a plain object. Also converts values to their respective internal types.
				 * @param object Plain object
				 * @returns GetDomainByIdResponse
				 */
				public static fromObject(object: {
					[k: string]: any;
				}): nosso.domains.v1.GetDomainByIdResponse;

				/**
				 * Creates a plain object from a GetDomainByIdResponse message. Also converts values to other types if specified.
				 * @param message GetDomainByIdResponse
				 * @param [options] Conversion options
				 * @returns Plain object
				 */
				public static toObject(
					message: nosso.domains.v1.GetDomainByIdResponse,
					options?: $protobuf.IConversionOptions
				): { [k: string]: any };

				/**
				 * Converts this GetDomainByIdResponse to JSON.
				 * @returns JSON object
				 */
				public toJSON(): { [k: string]: any };
			}

			/** Properties of a GetDomainByIdsRequest. */
			interface IGetDomainByIdsRequest {
				/** GetDomainByIdsRequest ids */
				ids?: number[] | null;
			}

			/** Represents a GetDomainByIdsRequest. */
			class GetDomainByIdsRequest implements IGetDomainByIdsRequest {
				/**
				 * Constructs a new GetDomainByIdsRequest.
				 * @param [properties] Properties to set
				 */
				constructor(properties?: nosso.domains.v1.IGetDomainByIdsRequest);

				/** GetDomainByIdsRequest ids. */
				public ids: number[];

				/**
				 * Creates a new GetDomainByIdsRequest instance using the specified properties.
				 * @param [properties] Properties to set
				 * @returns GetDomainByIdsRequest instance
				 */
				public static create(
					properties?: nosso.domains.v1.IGetDomainByIdsRequest
				): nosso.domains.v1.GetDomainByIdsRequest;

				/**
				 * Encodes the specified GetDomainByIdsRequest message. Does not implicitly {@link nosso.domains.v1.GetDomainByIdsRequest.verify|verify} messages.
				 * @param message GetDomainByIdsRequest message or plain object to encode
				 * @param [writer] Writer to encode to
				 * @returns Writer
				 */
				public static encode(
					message: nosso.domains.v1.IGetDomainByIdsRequest,
					writer?: $protobuf.Writer
				): $protobuf.Writer;

				/**
				 * Encodes the specified GetDomainByIdsRequest message, length delimited. Does not implicitly {@link nosso.domains.v1.GetDomainByIdsRequest.verify|verify} messages.
				 * @param message GetDomainByIdsRequest message or plain object to encode
				 * @param [writer] Writer to encode to
				 * @returns Writer
				 */
				public static encodeDelimited(
					message: nosso.domains.v1.IGetDomainByIdsRequest,
					writer?: $protobuf.Writer
				): $protobuf.Writer;

				/**
				 * Decodes a GetDomainByIdsRequest message from the specified reader or buffer.
				 * @param reader Reader or buffer to decode from
				 * @param [length] Message length if known beforehand
				 * @returns GetDomainByIdsRequest
				 * @throws {Error} If the payload is not a reader or valid buffer
				 * @throws {$protobuf.util.ProtocolError} If required fields are missing
				 */
				public static decode(
					reader: $protobuf.Reader | Uint8Array,
					length?: number
				): nosso.domains.v1.GetDomainByIdsRequest;

				/**
				 * Decodes a GetDomainByIdsRequest message from the specified reader or buffer, length delimited.
				 * @param reader Reader or buffer to decode from
				 * @returns GetDomainByIdsRequest
				 * @throws {Error} If the payload is not a reader or valid buffer
				 * @throws {$protobuf.util.ProtocolError} If required fields are missing
				 */
				public static decodeDelimited(
					reader: $protobuf.Reader | Uint8Array
				): nosso.domains.v1.GetDomainByIdsRequest;

				/**
				 * Verifies a GetDomainByIdsRequest message.
				 * @param message Plain object to verify
				 * @returns `null` if valid, otherwise the reason why it is not
				 */
				public static verify(message: { [k: string]: any }): string | null;

				/**
				 * Creates a GetDomainByIdsRequest message from a plain object. Also converts values to their respective internal types.
				 * @param object Plain object
				 * @returns GetDomainByIdsRequest
				 */
				public static fromObject(object: {
					[k: string]: any;
				}): nosso.domains.v1.GetDomainByIdsRequest;

				/**
				 * Creates a plain object from a GetDomainByIdsRequest message. Also converts values to other types if specified.
				 * @param message GetDomainByIdsRequest
				 * @param [options] Conversion options
				 * @returns Plain object
				 */
				public static toObject(
					message: nosso.domains.v1.GetDomainByIdsRequest,
					options?: $protobuf.IConversionOptions
				): { [k: string]: any };

				/**
				 * Converts this GetDomainByIdsRequest to JSON.
				 * @returns JSON object
				 */
				public toJSON(): { [k: string]: any };
			}

			/** Properties of a GetDomainByIdsResponse. */
			interface IGetDomainByIdsResponse {
				/** GetDomainByIdsResponse domains */
				domains?: nosso.domains.v1.IDomain[] | null;
			}

			/** Represents a GetDomainByIdsResponse. */
			class GetDomainByIdsResponse implements IGetDomainByIdsResponse {
				/**
				 * Constructs a new GetDomainByIdsResponse.
				 * @param [properties] Properties to set
				 */
				constructor(properties?: nosso.domains.v1.IGetDomainByIdsResponse);

				/** GetDomainByIdsResponse domains. */
				public domains: nosso.domains.v1.IDomain[];

				/**
				 * Creates a new GetDomainByIdsResponse instance using the specified properties.
				 * @param [properties] Properties to set
				 * @returns GetDomainByIdsResponse instance
				 */
				public static create(
					properties?: nosso.domains.v1.IGetDomainByIdsResponse
				): nosso.domains.v1.GetDomainByIdsResponse;

				/**
				 * Encodes the specified GetDomainByIdsResponse message. Does not implicitly {@link nosso.domains.v1.GetDomainByIdsResponse.verify|verify} messages.
				 * @param message GetDomainByIdsResponse message or plain object to encode
				 * @param [writer] Writer to encode to
				 * @returns Writer
				 */
				public static encode(
					message: nosso.domains.v1.IGetDomainByIdsResponse,
					writer?: $protobuf.Writer
				): $protobuf.Writer;

				/**
				 * Encodes the specified GetDomainByIdsResponse message, length delimited. Does not implicitly {@link nosso.domains.v1.GetDomainByIdsResponse.verify|verify} messages.
				 * @param message GetDomainByIdsResponse message or plain object to encode
				 * @param [writer] Writer to encode to
				 * @returns Writer
				 */
				public static encodeDelimited(
					message: nosso.domains.v1.IGetDomainByIdsResponse,
					writer?: $protobuf.Writer
				): $protobuf.Writer;

				/**
				 * Decodes a GetDomainByIdsResponse message from the specified reader or buffer.
				 * @param reader Reader or buffer to decode from
				 * @param [length] Message length if known beforehand
				 * @returns GetDomainByIdsResponse
				 * @throws {Error} If the payload is not a reader or valid buffer
				 * @throws {$protobuf.util.ProtocolError} If required fields are missing
				 */
				public static decode(
					reader: $protobuf.Reader | Uint8Array,
					length?: number
				): nosso.domains.v1.GetDomainByIdsResponse;

				/**
				 * Decodes a GetDomainByIdsResponse message from the specified reader or buffer, length delimited.
				 * @param reader Reader or buffer to decode from
				 * @returns GetDomainByIdsResponse
				 * @throws {Error} If the payload is not a reader or valid buffer
				 * @throws {$protobuf.util.ProtocolError} If required fields are missing
				 */
				public static decodeDelimited(
					reader: $protobuf.Reader | Uint8Array
				): nosso.domains.v1.GetDomainByIdsResponse;

				/**
				 * Verifies a GetDomainByIdsResponse message.
				 * @param message Plain object to verify
				 * @returns `null` if valid, otherwise the reason why it is not
				 */
				public static verify(message: { [k: string]: any }): string | null;

				/**
				 * Creates a GetDomainByIdsResponse message from a plain object. Also converts values to their respective internal types.
				 * @param object Plain object
				 * @returns GetDomainByIdsResponse
				 */
				public static fromObject(object: {
					[k: string]: any;
				}): nosso.domains.v1.GetDomainByIdsResponse;

				/**
				 * Creates a plain object from a GetDomainByIdsResponse message. Also converts values to other types if specified.
				 * @param message GetDomainByIdsResponse
				 * @param [options] Conversion options
				 * @returns Plain object
				 */
				public static toObject(
					message: nosso.domains.v1.GetDomainByIdsResponse,
					options?: $protobuf.IConversionOptions
				): { [k: string]: any };

				/**
				 * Converts this GetDomainByIdsResponse to JSON.
				 * @returns JSON object
				 */
				public toJSON(): { [k: string]: any };
			}
		}
	}

	/** Namespace events. */
	namespace events {
		/** Namespace v1. */
		namespace v1 {
			/** Properties of a RegisterUserEvent. */
			interface IRegisterUserEvent {
				/** RegisterUserEvent email */
				email?: string | null;

				/** RegisterUserEvent code */
				code?: string | null;

				/** RegisterUserEvent locale */
				locale?: string | null;
			}

			/** Represents a RegisterUserEvent. */
			class RegisterUserEvent implements IRegisterUserEvent {
				/**
				 * Constructs a new RegisterUserEvent.
				 * @param [properties] Properties to set
				 */
				constructor(properties?: nosso.events.v1.IRegisterUserEvent);

				/** RegisterUserEvent email. */
				public email: string;

				/** RegisterUserEvent code. */
				public code: string;

				/** RegisterUserEvent locale. */
				public locale: string;

				/**
				 * Creates a new RegisterUserEvent instance using the specified properties.
				 * @param [properties] Properties to set
				 * @returns RegisterUserEvent instance
				 */
				public static create(
					properties?: nosso.events.v1.IRegisterUserEvent
				): nosso.events.v1.RegisterUserEvent;

				/**
				 * Encodes the specified RegisterUserEvent message. Does not implicitly {@link nosso.events.v1.RegisterUserEvent.verify|verify} messages.
				 * @param message RegisterUserEvent message or plain object to encode
				 * @param [writer] Writer to encode to
				 * @returns Writer
				 */
				public static encode(
					message: nosso.events.v1.IRegisterUserEvent,
					writer?: $protobuf.Writer
				): $protobuf.Writer;

				/**
				 * Encodes the specified RegisterUserEvent message, length delimited. Does not implicitly {@link nosso.events.v1.RegisterUserEvent.verify|verify} messages.
				 * @param message RegisterUserEvent message or plain object to encode
				 * @param [writer] Writer to encode to
				 * @returns Writer
				 */
				public static encodeDelimited(
					message: nosso.events.v1.IRegisterUserEvent,
					writer?: $protobuf.Writer
				): $protobuf.Writer;

				/**
				 * Decodes a RegisterUserEvent message from the specified reader or buffer.
				 * @param reader Reader or buffer to decode from
				 * @param [length] Message length if known beforehand
				 * @returns RegisterUserEvent
				 * @throws {Error} If the payload is not a reader or valid buffer
				 * @throws {$protobuf.util.ProtocolError} If required fields are missing
				 */
				public static decode(
					reader: $protobuf.Reader | Uint8Array,
					length?: number
				): nosso.events.v1.RegisterUserEvent;

				/**
				 * Decodes a RegisterUserEvent message from the specified reader or buffer, length delimited.
				 * @param reader Reader or buffer to decode from
				 * @returns RegisterUserEvent
				 * @throws {Error} If the payload is not a reader or valid buffer
				 * @throws {$protobuf.util.ProtocolError} If required fields are missing
				 */
				public static decodeDelimited(
					reader: $protobuf.Reader | Uint8Array
				): nosso.events.v1.RegisterUserEvent;

				/**
				 * Verifies a RegisterUserEvent message.
				 * @param message Plain object to verify
				 * @returns `null` if valid, otherwise the reason why it is not
				 */
				public static verify(message: { [k: string]: any }): string | null;

				/**
				 * Creates a RegisterUserEvent message from a plain object. Also converts values to their respective internal types.
				 * @param object Plain object
				 * @returns RegisterUserEvent
				 */
				public static fromObject(object: {
					[k: string]: any;
				}): nosso.events.v1.RegisterUserEvent;

				/**
				 * Creates a plain object from a RegisterUserEvent message. Also converts values to other types if specified.
				 * @param message RegisterUserEvent
				 * @param [options] Conversion options
				 * @returns Plain object
				 */
				public static toObject(
					message: nosso.events.v1.RegisterUserEvent,
					options?: $protobuf.IConversionOptions
				): { [k: string]: any };

				/**
				 * Converts this RegisterUserEvent to JSON.
				 * @returns JSON object
				 */
				public toJSON(): { [k: string]: any };
			}

			/** Properties of a GetCodeEvent. */
			interface IGetCodeEvent {
				/** GetCodeEvent email */
				email?: string | null;

				/** GetCodeEvent code */
				code?: string | null;

				/** GetCodeEvent locale */
				locale?: string | null;
			}

			/** Represents a GetCodeEvent. */
			class GetCodeEvent implements IGetCodeEvent {
				/**
				 * Constructs a new GetCodeEvent.
				 * @param [properties] Properties to set
				 */
				constructor(properties?: nosso.events.v1.IGetCodeEvent);

				/** GetCodeEvent email. */
				public email: string;

				/** GetCodeEvent code. */
				public code: string;

				/** GetCodeEvent locale. */
				public locale: string;

				/**
				 * Creates a new GetCodeEvent instance using the specified properties.
				 * @param [properties] Properties to set
				 * @returns GetCodeEvent instance
				 */
				public static create(
					properties?: nosso.events.v1.IGetCodeEvent
				): nosso.events.v1.GetCodeEvent;

				/**
				 * Encodes the specified GetCodeEvent message. Does not implicitly {@link nosso.events.v1.GetCodeEvent.verify|verify} messages.
				 * @param message GetCodeEvent message or plain object to encode
				 * @param [writer] Writer to encode to
				 * @returns Writer
				 */
				public static encode(
					message: nosso.events.v1.IGetCodeEvent,
					writer?: $protobuf.Writer
				): $protobuf.Writer;

				/**
				 * Encodes the specified GetCodeEvent message, length delimited. Does not implicitly {@link nosso.events.v1.GetCodeEvent.verify|verify} messages.
				 * @param message GetCodeEvent message or plain object to encode
				 * @param [writer] Writer to encode to
				 * @returns Writer
				 */
				public static encodeDelimited(
					message: nosso.events.v1.IGetCodeEvent,
					writer?: $protobuf.Writer
				): $protobuf.Writer;

				/**
				 * Decodes a GetCodeEvent message from the specified reader or buffer.
				 * @param reader Reader or buffer to decode from
				 * @param [length] Message length if known beforehand
				 * @returns GetCodeEvent
				 * @throws {Error} If the payload is not a reader or valid buffer
				 * @throws {$protobuf.util.ProtocolError} If required fields are missing
				 */
				public static decode(
					reader: $protobuf.Reader | Uint8Array,
					length?: number
				): nosso.events.v1.GetCodeEvent;

				/**
				 * Decodes a GetCodeEvent message from the specified reader or buffer, length delimited.
				 * @param reader Reader or buffer to decode from
				 * @returns GetCodeEvent
				 * @throws {Error} If the payload is not a reader or valid buffer
				 * @throws {$protobuf.util.ProtocolError} If required fields are missing
				 */
				public static decodeDelimited(
					reader: $protobuf.Reader | Uint8Array
				): nosso.events.v1.GetCodeEvent;

				/**
				 * Verifies a GetCodeEvent message.
				 * @param message Plain object to verify
				 * @returns `null` if valid, otherwise the reason why it is not
				 */
				public static verify(message: { [k: string]: any }): string | null;

				/**
				 * Creates a GetCodeEvent message from a plain object. Also converts values to their respective internal types.
				 * @param object Plain object
				 * @returns GetCodeEvent
				 */
				public static fromObject(object: {
					[k: string]: any;
				}): nosso.events.v1.GetCodeEvent;

				/**
				 * Creates a plain object from a GetCodeEvent message. Also converts values to other types if specified.
				 * @param message GetCodeEvent
				 * @param [options] Conversion options
				 * @returns Plain object
				 */
				public static toObject(
					message: nosso.events.v1.GetCodeEvent,
					options?: $protobuf.IConversionOptions
				): { [k: string]: any };

				/**
				 * Converts this GetCodeEvent to JSON.
				 * @returns JSON object
				 */
				public toJSON(): { [k: string]: any };
			}
		}
	}

	/** Namespace users. */
	namespace users {
		/** Namespace v1. */
		namespace v1 {
			/** Represents a UsersService */
			class UsersService extends $protobuf.rpc.Service {
				/**
				 * Constructs a new UsersService service.
				 * @param rpcImpl RPC implementation
				 * @param [requestDelimited=false] Whether requests are length-delimited
				 * @param [responseDelimited=false] Whether responses are length-delimited
				 */
				constructor(
					rpcImpl: $protobuf.RPCImpl,
					requestDelimited?: boolean,
					responseDelimited?: boolean
				);

				/**
				 * Creates new UsersService service using the specified rpc implementation.
				 * @param rpcImpl RPC implementation
				 * @param [requestDelimited=false] Whether requests are length-delimited
				 * @param [responseDelimited=false] Whether responses are length-delimited
				 * @returns RPC service. Useful where requests and/or responses are streamed.
				 */
				public static create(
					rpcImpl: $protobuf.RPCImpl,
					requestDelimited?: boolean,
					responseDelimited?: boolean
				): UsersService;

				/**
				 * Calls RegisterUser.
				 * @param request RegisterUserRequest message or plain object
				 * @param callback Node-style callback called with the error, if any, and RegisterUserResponse
				 */
				public registerUser(
					request: nosso.users.v1.IRegisterUserRequest,
					callback: nosso.users.v1.UsersService.RegisterUserCallback
				): void;

				/**
				 * Calls RegisterUser.
				 * @param request RegisterUserRequest message or plain object
				 * @returns Promise
				 */
				public registerUser(
					request: nosso.users.v1.IRegisterUserRequest
				): Promise<nosso.users.v1.RegisterUserResponse>;

				/**
				 * Calls GetCode.
				 * @param request GetCodeRequest message or plain object
				 * @param callback Node-style callback called with the error, if any, and GetCodeResponse
				 */
				public getCode(
					request: nosso.users.v1.IGetCodeRequest,
					callback: nosso.users.v1.UsersService.GetCodeCallback
				): void;

				/**
				 * Calls GetCode.
				 * @param request GetCodeRequest message or plain object
				 * @returns Promise
				 */
				public getCode(
					request: nosso.users.v1.IGetCodeRequest
				): Promise<nosso.users.v1.GetCodeResponse>;

				/**
				 * Calls GetAuthenticationToken.
				 * @param request GetAuthenticationTokenRequest message or plain object
				 * @param callback Node-style callback called with the error, if any, and GetAuthenticationTokenResponse
				 */
				public getAuthenticationToken(
					request: nosso.users.v1.IGetAuthenticationTokenRequest,
					callback: nosso.users.v1.UsersService.GetAuthenticationTokenCallback
				): void;

				/**
				 * Calls GetAuthenticationToken.
				 * @param request GetAuthenticationTokenRequest message or plain object
				 * @returns Promise
				 */
				public getAuthenticationToken(
					request: nosso.users.v1.IGetAuthenticationTokenRequest
				): Promise<nosso.users.v1.GetAuthenticationTokenResponse>;

				/**
				 * Calls GetUserProfile.
				 * @param request GetUserProfileRequest message or plain object
				 * @param callback Node-style callback called with the error, if any, and GetUserProfileResponse
				 */
				public getUserProfile(
					request: nosso.users.v1.IGetUserProfileRequest,
					callback: nosso.users.v1.UsersService.GetUserProfileCallback
				): void;

				/**
				 * Calls GetUserProfile.
				 * @param request GetUserProfileRequest message or plain object
				 * @returns Promise
				 */
				public getUserProfile(
					request: nosso.users.v1.IGetUserProfileRequest
				): Promise<nosso.users.v1.GetUserProfileResponse>;

				/**
				 * Calls ListUsers.
				 * @param request ListUsersRequest message or plain object
				 * @param callback Node-style callback called with the error, if any, and ListUsersResponse
				 */
				public listUsers(
					request: nosso.users.v1.IListUsersRequest,
					callback: nosso.users.v1.UsersService.ListUsersCallback
				): void;

				/**
				 * Calls ListUsers.
				 * @param request ListUsersRequest message or plain object
				 * @returns Promise
				 */
				public listUsers(
					request: nosso.users.v1.IListUsersRequest
				): Promise<nosso.users.v1.ListUsersResponse>;
			}

			namespace UsersService {
				/**
				 * Callback as used by {@link nosso.users.v1.UsersService#registerUser}.
				 * @param error Error, if any
				 * @param [response] RegisterUserResponse
				 */
				type RegisterUserCallback = (
					error: Error | null,
					response?: nosso.users.v1.RegisterUserResponse
				) => void;

				/**
				 * Callback as used by {@link nosso.users.v1.UsersService#getCode}.
				 * @param error Error, if any
				 * @param [response] GetCodeResponse
				 */
				type GetCodeCallback = (
					error: Error | null,
					response?: nosso.users.v1.GetCodeResponse
				) => void;

				/**
				 * Callback as used by {@link nosso.users.v1.UsersService#getAuthenticationToken}.
				 * @param error Error, if any
				 * @param [response] GetAuthenticationTokenResponse
				 */
				type GetAuthenticationTokenCallback = (
					error: Error | null,
					response?: nosso.users.v1.GetAuthenticationTokenResponse
				) => void;

				/**
				 * Callback as used by {@link nosso.users.v1.UsersService#getUserProfile}.
				 * @param error Error, if any
				 * @param [response] GetUserProfileResponse
				 */
				type GetUserProfileCallback = (
					error: Error | null,
					response?: nosso.users.v1.GetUserProfileResponse
				) => void;

				/**
				 * Callback as used by {@link nosso.users.v1.UsersService#listUsers}.
				 * @param error Error, if any
				 * @param [response] ListUsersResponse
				 */
				type ListUsersCallback = (
					error: Error | null,
					response?: nosso.users.v1.ListUsersResponse
				) => void;
			}

			/** Properties of a GetCodeRequest. */
			interface IGetCodeRequest {
				/** GetCodeRequest email */
				email?: string | null;
			}

			/** Represents a GetCodeRequest. */
			class GetCodeRequest implements IGetCodeRequest {
				/**
				 * Constructs a new GetCodeRequest.
				 * @param [properties] Properties to set
				 */
				constructor(properties?: nosso.users.v1.IGetCodeRequest);

				/** GetCodeRequest email. */
				public email: string;

				/**
				 * Creates a new GetCodeRequest instance using the specified properties.
				 * @param [properties] Properties to set
				 * @returns GetCodeRequest instance
				 */
				public static create(
					properties?: nosso.users.v1.IGetCodeRequest
				): nosso.users.v1.GetCodeRequest;

				/**
				 * Encodes the specified GetCodeRequest message. Does not implicitly {@link nosso.users.v1.GetCodeRequest.verify|verify} messages.
				 * @param message GetCodeRequest message or plain object to encode
				 * @param [writer] Writer to encode to
				 * @returns Writer
				 */
				public static encode(
					message: nosso.users.v1.IGetCodeRequest,
					writer?: $protobuf.Writer
				): $protobuf.Writer;

				/**
				 * Encodes the specified GetCodeRequest message, length delimited. Does not implicitly {@link nosso.users.v1.GetCodeRequest.verify|verify} messages.
				 * @param message GetCodeRequest message or plain object to encode
				 * @param [writer] Writer to encode to
				 * @returns Writer
				 */
				public static encodeDelimited(
					message: nosso.users.v1.IGetCodeRequest,
					writer?: $protobuf.Writer
				): $protobuf.Writer;

				/**
				 * Decodes a GetCodeRequest message from the specified reader or buffer.
				 * @param reader Reader or buffer to decode from
				 * @param [length] Message length if known beforehand
				 * @returns GetCodeRequest
				 * @throws {Error} If the payload is not a reader or valid buffer
				 * @throws {$protobuf.util.ProtocolError} If required fields are missing
				 */
				public static decode(
					reader: $protobuf.Reader | Uint8Array,
					length?: number
				): nosso.users.v1.GetCodeRequest;

				/**
				 * Decodes a GetCodeRequest message from the specified reader or buffer, length delimited.
				 * @param reader Reader or buffer to decode from
				 * @returns GetCodeRequest
				 * @throws {Error} If the payload is not a reader or valid buffer
				 * @throws {$protobuf.util.ProtocolError} If required fields are missing
				 */
				public static decodeDelimited(
					reader: $protobuf.Reader | Uint8Array
				): nosso.users.v1.GetCodeRequest;

				/**
				 * Verifies a GetCodeRequest message.
				 * @param message Plain object to verify
				 * @returns `null` if valid, otherwise the reason why it is not
				 */
				public static verify(message: { [k: string]: any }): string | null;

				/**
				 * Creates a GetCodeRequest message from a plain object. Also converts values to their respective internal types.
				 * @param object Plain object
				 * @returns GetCodeRequest
				 */
				public static fromObject(object: {
					[k: string]: any;
				}): nosso.users.v1.GetCodeRequest;

				/**
				 * Creates a plain object from a GetCodeRequest message. Also converts values to other types if specified.
				 * @param message GetCodeRequest
				 * @param [options] Conversion options
				 * @returns Plain object
				 */
				public static toObject(
					message: nosso.users.v1.GetCodeRequest,
					options?: $protobuf.IConversionOptions
				): { [k: string]: any };

				/**
				 * Converts this GetCodeRequest to JSON.
				 * @returns JSON object
				 */
				public toJSON(): { [k: string]: any };
			}

			/** Properties of a GetCodeResponse. */
			interface IGetCodeResponse {
				/** GetCodeResponse sent */
				sent?: boolean | null;
			}

			/** Represents a GetCodeResponse. */
			class GetCodeResponse implements IGetCodeResponse {
				/**
				 * Constructs a new GetCodeResponse.
				 * @param [properties] Properties to set
				 */
				constructor(properties?: nosso.users.v1.IGetCodeResponse);

				/** GetCodeResponse sent. */
				public sent: boolean;

				/**
				 * Creates a new GetCodeResponse instance using the specified properties.
				 * @param [properties] Properties to set
				 * @returns GetCodeResponse instance
				 */
				public static create(
					properties?: nosso.users.v1.IGetCodeResponse
				): nosso.users.v1.GetCodeResponse;

				/**
				 * Encodes the specified GetCodeResponse message. Does not implicitly {@link nosso.users.v1.GetCodeResponse.verify|verify} messages.
				 * @param message GetCodeResponse message or plain object to encode
				 * @param [writer] Writer to encode to
				 * @returns Writer
				 */
				public static encode(
					message: nosso.users.v1.IGetCodeResponse,
					writer?: $protobuf.Writer
				): $protobuf.Writer;

				/**
				 * Encodes the specified GetCodeResponse message, length delimited. Does not implicitly {@link nosso.users.v1.GetCodeResponse.verify|verify} messages.
				 * @param message GetCodeResponse message or plain object to encode
				 * @param [writer] Writer to encode to
				 * @returns Writer
				 */
				public static encodeDelimited(
					message: nosso.users.v1.IGetCodeResponse,
					writer?: $protobuf.Writer
				): $protobuf.Writer;

				/**
				 * Decodes a GetCodeResponse message from the specified reader or buffer.
				 * @param reader Reader or buffer to decode from
				 * @param [length] Message length if known beforehand
				 * @returns GetCodeResponse
				 * @throws {Error} If the payload is not a reader or valid buffer
				 * @throws {$protobuf.util.ProtocolError} If required fields are missing
				 */
				public static decode(
					reader: $protobuf.Reader | Uint8Array,
					length?: number
				): nosso.users.v1.GetCodeResponse;

				/**
				 * Decodes a GetCodeResponse message from the specified reader or buffer, length delimited.
				 * @param reader Reader or buffer to decode from
				 * @returns GetCodeResponse
				 * @throws {Error} If the payload is not a reader or valid buffer
				 * @throws {$protobuf.util.ProtocolError} If required fields are missing
				 */
				public static decodeDelimited(
					reader: $protobuf.Reader | Uint8Array
				): nosso.users.v1.GetCodeResponse;

				/**
				 * Verifies a GetCodeResponse message.
				 * @param message Plain object to verify
				 * @returns `null` if valid, otherwise the reason why it is not
				 */
				public static verify(message: { [k: string]: any }): string | null;

				/**
				 * Creates a GetCodeResponse message from a plain object. Also converts values to their respective internal types.
				 * @param object Plain object
				 * @returns GetCodeResponse
				 */
				public static fromObject(object: {
					[k: string]: any;
				}): nosso.users.v1.GetCodeResponse;

				/**
				 * Creates a plain object from a GetCodeResponse message. Also converts values to other types if specified.
				 * @param message GetCodeResponse
				 * @param [options] Conversion options
				 * @returns Plain object
				 */
				public static toObject(
					message: nosso.users.v1.GetCodeResponse,
					options?: $protobuf.IConversionOptions
				): { [k: string]: any };

				/**
				 * Converts this GetCodeResponse to JSON.
				 * @returns JSON object
				 */
				public toJSON(): { [k: string]: any };
			}

			/** Properties of a GetAuthenticationTokenRequest. */
			interface IGetAuthenticationTokenRequest {
				/** GetAuthenticationTokenRequest email */
				email?: string | null;

				/** GetAuthenticationTokenRequest token */
				token?: string | null;
			}

			/** Represents a GetAuthenticationTokenRequest. */
			class GetAuthenticationTokenRequest implements IGetAuthenticationTokenRequest {
				/**
				 * Constructs a new GetAuthenticationTokenRequest.
				 * @param [properties] Properties to set
				 */
				constructor(properties?: nosso.users.v1.IGetAuthenticationTokenRequest);

				/** GetAuthenticationTokenRequest email. */
				public email: string;

				/** GetAuthenticationTokenRequest token. */
				public token: string;

				/**
				 * Creates a new GetAuthenticationTokenRequest instance using the specified properties.
				 * @param [properties] Properties to set
				 * @returns GetAuthenticationTokenRequest instance
				 */
				public static create(
					properties?: nosso.users.v1.IGetAuthenticationTokenRequest
				): nosso.users.v1.GetAuthenticationTokenRequest;

				/**
				 * Encodes the specified GetAuthenticationTokenRequest message. Does not implicitly {@link nosso.users.v1.GetAuthenticationTokenRequest.verify|verify} messages.
				 * @param message GetAuthenticationTokenRequest message or plain object to encode
				 * @param [writer] Writer to encode to
				 * @returns Writer
				 */
				public static encode(
					message: nosso.users.v1.IGetAuthenticationTokenRequest,
					writer?: $protobuf.Writer
				): $protobuf.Writer;

				/**
				 * Encodes the specified GetAuthenticationTokenRequest message, length delimited. Does not implicitly {@link nosso.users.v1.GetAuthenticationTokenRequest.verify|verify} messages.
				 * @param message GetAuthenticationTokenRequest message or plain object to encode
				 * @param [writer] Writer to encode to
				 * @returns Writer
				 */
				public static encodeDelimited(
					message: nosso.users.v1.IGetAuthenticationTokenRequest,
					writer?: $protobuf.Writer
				): $protobuf.Writer;

				/**
				 * Decodes a GetAuthenticationTokenRequest message from the specified reader or buffer.
				 * @param reader Reader or buffer to decode from
				 * @param [length] Message length if known beforehand
				 * @returns GetAuthenticationTokenRequest
				 * @throws {Error} If the payload is not a reader or valid buffer
				 * @throws {$protobuf.util.ProtocolError} If required fields are missing
				 */
				public static decode(
					reader: $protobuf.Reader | Uint8Array,
					length?: number
				): nosso.users.v1.GetAuthenticationTokenRequest;

				/**
				 * Decodes a GetAuthenticationTokenRequest message from the specified reader or buffer, length delimited.
				 * @param reader Reader or buffer to decode from
				 * @returns GetAuthenticationTokenRequest
				 * @throws {Error} If the payload is not a reader or valid buffer
				 * @throws {$protobuf.util.ProtocolError} If required fields are missing
				 */
				public static decodeDelimited(
					reader: $protobuf.Reader | Uint8Array
				): nosso.users.v1.GetAuthenticationTokenRequest;

				/**
				 * Verifies a GetAuthenticationTokenRequest message.
				 * @param message Plain object to verify
				 * @returns `null` if valid, otherwise the reason why it is not
				 */
				public static verify(message: { [k: string]: any }): string | null;

				/**
				 * Creates a GetAuthenticationTokenRequest message from a plain object. Also converts values to their respective internal types.
				 * @param object Plain object
				 * @returns GetAuthenticationTokenRequest
				 */
				public static fromObject(object: {
					[k: string]: any;
				}): nosso.users.v1.GetAuthenticationTokenRequest;

				/**
				 * Creates a plain object from a GetAuthenticationTokenRequest message. Also converts values to other types if specified.
				 * @param message GetAuthenticationTokenRequest
				 * @param [options] Conversion options
				 * @returns Plain object
				 */
				public static toObject(
					message: nosso.users.v1.GetAuthenticationTokenRequest,
					options?: $protobuf.IConversionOptions
				): { [k: string]: any };

				/**
				 * Converts this GetAuthenticationTokenRequest to JSON.
				 * @returns JSON object
				 */
				public toJSON(): { [k: string]: any };
			}

			/** Properties of a GetAuthenticationTokenResponse. */
			interface IGetAuthenticationTokenResponse {
				/** GetAuthenticationTokenResponse jwt */
				jwt?: string | null;
			}

			/** Represents a GetAuthenticationTokenResponse. */
			class GetAuthenticationTokenResponse implements IGetAuthenticationTokenResponse {
				/**
				 * Constructs a new GetAuthenticationTokenResponse.
				 * @param [properties] Properties to set
				 */
				constructor(properties?: nosso.users.v1.IGetAuthenticationTokenResponse);

				/** GetAuthenticationTokenResponse jwt. */
				public jwt: string;

				/**
				 * Creates a new GetAuthenticationTokenResponse instance using the specified properties.
				 * @param [properties] Properties to set
				 * @returns GetAuthenticationTokenResponse instance
				 */
				public static create(
					properties?: nosso.users.v1.IGetAuthenticationTokenResponse
				): nosso.users.v1.GetAuthenticationTokenResponse;

				/**
				 * Encodes the specified GetAuthenticationTokenResponse message. Does not implicitly {@link nosso.users.v1.GetAuthenticationTokenResponse.verify|verify} messages.
				 * @param message GetAuthenticationTokenResponse message or plain object to encode
				 * @param [writer] Writer to encode to
				 * @returns Writer
				 */
				public static encode(
					message: nosso.users.v1.IGetAuthenticationTokenResponse,
					writer?: $protobuf.Writer
				): $protobuf.Writer;

				/**
				 * Encodes the specified GetAuthenticationTokenResponse message, length delimited. Does not implicitly {@link nosso.users.v1.GetAuthenticationTokenResponse.verify|verify} messages.
				 * @param message GetAuthenticationTokenResponse message or plain object to encode
				 * @param [writer] Writer to encode to
				 * @returns Writer
				 */
				public static encodeDelimited(
					message: nosso.users.v1.IGetAuthenticationTokenResponse,
					writer?: $protobuf.Writer
				): $protobuf.Writer;

				/**
				 * Decodes a GetAuthenticationTokenResponse message from the specified reader or buffer.
				 * @param reader Reader or buffer to decode from
				 * @param [length] Message length if known beforehand
				 * @returns GetAuthenticationTokenResponse
				 * @throws {Error} If the payload is not a reader or valid buffer
				 * @throws {$protobuf.util.ProtocolError} If required fields are missing
				 */
				public static decode(
					reader: $protobuf.Reader | Uint8Array,
					length?: number
				): nosso.users.v1.GetAuthenticationTokenResponse;

				/**
				 * Decodes a GetAuthenticationTokenResponse message from the specified reader or buffer, length delimited.
				 * @param reader Reader or buffer to decode from
				 * @returns GetAuthenticationTokenResponse
				 * @throws {Error} If the payload is not a reader or valid buffer
				 * @throws {$protobuf.util.ProtocolError} If required fields are missing
				 */
				public static decodeDelimited(
					reader: $protobuf.Reader | Uint8Array
				): nosso.users.v1.GetAuthenticationTokenResponse;

				/**
				 * Verifies a GetAuthenticationTokenResponse message.
				 * @param message Plain object to verify
				 * @returns `null` if valid, otherwise the reason why it is not
				 */
				public static verify(message: { [k: string]: any }): string | null;

				/**
				 * Creates a GetAuthenticationTokenResponse message from a plain object. Also converts values to their respective internal types.
				 * @param object Plain object
				 * @returns GetAuthenticationTokenResponse
				 */
				public static fromObject(object: {
					[k: string]: any;
				}): nosso.users.v1.GetAuthenticationTokenResponse;

				/**
				 * Creates a plain object from a GetAuthenticationTokenResponse message. Also converts values to other types if specified.
				 * @param message GetAuthenticationTokenResponse
				 * @param [options] Conversion options
				 * @returns Plain object
				 */
				public static toObject(
					message: nosso.users.v1.GetAuthenticationTokenResponse,
					options?: $protobuf.IConversionOptions
				): { [k: string]: any };

				/**
				 * Converts this GetAuthenticationTokenResponse to JSON.
				 * @returns JSON object
				 */
				public toJSON(): { [k: string]: any };
			}

			/** Properties of a RegisterUserRequest. */
			interface IRegisterUserRequest {
				/** RegisterUserRequest email */
				email?: string | null;
			}

			/** Represents a RegisterUserRequest. */
			class RegisterUserRequest implements IRegisterUserRequest {
				/**
				 * Constructs a new RegisterUserRequest.
				 * @param [properties] Properties to set
				 */
				constructor(properties?: nosso.users.v1.IRegisterUserRequest);

				/** RegisterUserRequest email. */
				public email: string;

				/**
				 * Creates a new RegisterUserRequest instance using the specified properties.
				 * @param [properties] Properties to set
				 * @returns RegisterUserRequest instance
				 */
				public static create(
					properties?: nosso.users.v1.IRegisterUserRequest
				): nosso.users.v1.RegisterUserRequest;

				/**
				 * Encodes the specified RegisterUserRequest message. Does not implicitly {@link nosso.users.v1.RegisterUserRequest.verify|verify} messages.
				 * @param message RegisterUserRequest message or plain object to encode
				 * @param [writer] Writer to encode to
				 * @returns Writer
				 */
				public static encode(
					message: nosso.users.v1.IRegisterUserRequest,
					writer?: $protobuf.Writer
				): $protobuf.Writer;

				/**
				 * Encodes the specified RegisterUserRequest message, length delimited. Does not implicitly {@link nosso.users.v1.RegisterUserRequest.verify|verify} messages.
				 * @param message RegisterUserRequest message or plain object to encode
				 * @param [writer] Writer to encode to
				 * @returns Writer
				 */
				public static encodeDelimited(
					message: nosso.users.v1.IRegisterUserRequest,
					writer?: $protobuf.Writer
				): $protobuf.Writer;

				/**
				 * Decodes a RegisterUserRequest message from the specified reader or buffer.
				 * @param reader Reader or buffer to decode from
				 * @param [length] Message length if known beforehand
				 * @returns RegisterUserRequest
				 * @throws {Error} If the payload is not a reader or valid buffer
				 * @throws {$protobuf.util.ProtocolError} If required fields are missing
				 */
				public static decode(
					reader: $protobuf.Reader | Uint8Array,
					length?: number
				): nosso.users.v1.RegisterUserRequest;

				/**
				 * Decodes a RegisterUserRequest message from the specified reader or buffer, length delimited.
				 * @param reader Reader or buffer to decode from
				 * @returns RegisterUserRequest
				 * @throws {Error} If the payload is not a reader or valid buffer
				 * @throws {$protobuf.util.ProtocolError} If required fields are missing
				 */
				public static decodeDelimited(
					reader: $protobuf.Reader | Uint8Array
				): nosso.users.v1.RegisterUserRequest;

				/**
				 * Verifies a RegisterUserRequest message.
				 * @param message Plain object to verify
				 * @returns `null` if valid, otherwise the reason why it is not
				 */
				public static verify(message: { [k: string]: any }): string | null;

				/**
				 * Creates a RegisterUserRequest message from a plain object. Also converts values to their respective internal types.
				 * @param object Plain object
				 * @returns RegisterUserRequest
				 */
				public static fromObject(object: {
					[k: string]: any;
				}): nosso.users.v1.RegisterUserRequest;

				/**
				 * Creates a plain object from a RegisterUserRequest message. Also converts values to other types if specified.
				 * @param message RegisterUserRequest
				 * @param [options] Conversion options
				 * @returns Plain object
				 */
				public static toObject(
					message: nosso.users.v1.RegisterUserRequest,
					options?: $protobuf.IConversionOptions
				): { [k: string]: any };

				/**
				 * Converts this RegisterUserRequest to JSON.
				 * @returns JSON object
				 */
				public toJSON(): { [k: string]: any };
			}

			/** Properties of a RegisterUserResponse. */
			interface IRegisterUserResponse {
				/** RegisterUserResponse sent */
				sent?: boolean | null;
			}

			/** Represents a RegisterUserResponse. */
			class RegisterUserResponse implements IRegisterUserResponse {
				/**
				 * Constructs a new RegisterUserResponse.
				 * @param [properties] Properties to set
				 */
				constructor(properties?: nosso.users.v1.IRegisterUserResponse);

				/** RegisterUserResponse sent. */
				public sent: boolean;

				/**
				 * Creates a new RegisterUserResponse instance using the specified properties.
				 * @param [properties] Properties to set
				 * @returns RegisterUserResponse instance
				 */
				public static create(
					properties?: nosso.users.v1.IRegisterUserResponse
				): nosso.users.v1.RegisterUserResponse;

				/**
				 * Encodes the specified RegisterUserResponse message. Does not implicitly {@link nosso.users.v1.RegisterUserResponse.verify|verify} messages.
				 * @param message RegisterUserResponse message or plain object to encode
				 * @param [writer] Writer to encode to
				 * @returns Writer
				 */
				public static encode(
					message: nosso.users.v1.IRegisterUserResponse,
					writer?: $protobuf.Writer
				): $protobuf.Writer;

				/**
				 * Encodes the specified RegisterUserResponse message, length delimited. Does not implicitly {@link nosso.users.v1.RegisterUserResponse.verify|verify} messages.
				 * @param message RegisterUserResponse message or plain object to encode
				 * @param [writer] Writer to encode to
				 * @returns Writer
				 */
				public static encodeDelimited(
					message: nosso.users.v1.IRegisterUserResponse,
					writer?: $protobuf.Writer
				): $protobuf.Writer;

				/**
				 * Decodes a RegisterUserResponse message from the specified reader or buffer.
				 * @param reader Reader or buffer to decode from
				 * @param [length] Message length if known beforehand
				 * @returns RegisterUserResponse
				 * @throws {Error} If the payload is not a reader or valid buffer
				 * @throws {$protobuf.util.ProtocolError} If required fields are missing
				 */
				public static decode(
					reader: $protobuf.Reader | Uint8Array,
					length?: number
				): nosso.users.v1.RegisterUserResponse;

				/**
				 * Decodes a RegisterUserResponse message from the specified reader or buffer, length delimited.
				 * @param reader Reader or buffer to decode from
				 * @returns RegisterUserResponse
				 * @throws {Error} If the payload is not a reader or valid buffer
				 * @throws {$protobuf.util.ProtocolError} If required fields are missing
				 */
				public static decodeDelimited(
					reader: $protobuf.Reader | Uint8Array
				): nosso.users.v1.RegisterUserResponse;

				/**
				 * Verifies a RegisterUserResponse message.
				 * @param message Plain object to verify
				 * @returns `null` if valid, otherwise the reason why it is not
				 */
				public static verify(message: { [k: string]: any }): string | null;

				/**
				 * Creates a RegisterUserResponse message from a plain object. Also converts values to their respective internal types.
				 * @param object Plain object
				 * @returns RegisterUserResponse
				 */
				public static fromObject(object: {
					[k: string]: any;
				}): nosso.users.v1.RegisterUserResponse;

				/**
				 * Creates a plain object from a RegisterUserResponse message. Also converts values to other types if specified.
				 * @param message RegisterUserResponse
				 * @param [options] Conversion options
				 * @returns Plain object
				 */
				public static toObject(
					message: nosso.users.v1.RegisterUserResponse,
					options?: $protobuf.IConversionOptions
				): { [k: string]: any };

				/**
				 * Converts this RegisterUserResponse to JSON.
				 * @returns JSON object
				 */
				public toJSON(): { [k: string]: any };
			}

			/** Properties of a GetUserProfileRequest. */
			interface IGetUserProfileRequest {}

			/** Represents a GetUserProfileRequest. */
			class GetUserProfileRequest implements IGetUserProfileRequest {
				/**
				 * Constructs a new GetUserProfileRequest.
				 * @param [properties] Properties to set
				 */
				constructor(properties?: nosso.users.v1.IGetUserProfileRequest);

				/**
				 * Creates a new GetUserProfileRequest instance using the specified properties.
				 * @param [properties] Properties to set
				 * @returns GetUserProfileRequest instance
				 */
				public static create(
					properties?: nosso.users.v1.IGetUserProfileRequest
				): nosso.users.v1.GetUserProfileRequest;

				/**
				 * Encodes the specified GetUserProfileRequest message. Does not implicitly {@link nosso.users.v1.GetUserProfileRequest.verify|verify} messages.
				 * @param message GetUserProfileRequest message or plain object to encode
				 * @param [writer] Writer to encode to
				 * @returns Writer
				 */
				public static encode(
					message: nosso.users.v1.IGetUserProfileRequest,
					writer?: $protobuf.Writer
				): $protobuf.Writer;

				/**
				 * Encodes the specified GetUserProfileRequest message, length delimited. Does not implicitly {@link nosso.users.v1.GetUserProfileRequest.verify|verify} messages.
				 * @param message GetUserProfileRequest message or plain object to encode
				 * @param [writer] Writer to encode to
				 * @returns Writer
				 */
				public static encodeDelimited(
					message: nosso.users.v1.IGetUserProfileRequest,
					writer?: $protobuf.Writer
				): $protobuf.Writer;

				/**
				 * Decodes a GetUserProfileRequest message from the specified reader or buffer.
				 * @param reader Reader or buffer to decode from
				 * @param [length] Message length if known beforehand
				 * @returns GetUserProfileRequest
				 * @throws {Error} If the payload is not a reader or valid buffer
				 * @throws {$protobuf.util.ProtocolError} If required fields are missing
				 */
				public static decode(
					reader: $protobuf.Reader | Uint8Array,
					length?: number
				): nosso.users.v1.GetUserProfileRequest;

				/**
				 * Decodes a GetUserProfileRequest message from the specified reader or buffer, length delimited.
				 * @param reader Reader or buffer to decode from
				 * @returns GetUserProfileRequest
				 * @throws {Error} If the payload is not a reader or valid buffer
				 * @throws {$protobuf.util.ProtocolError} If required fields are missing
				 */
				public static decodeDelimited(
					reader: $protobuf.Reader | Uint8Array
				): nosso.users.v1.GetUserProfileRequest;

				/**
				 * Verifies a GetUserProfileRequest message.
				 * @param message Plain object to verify
				 * @returns `null` if valid, otherwise the reason why it is not
				 */
				public static verify(message: { [k: string]: any }): string | null;

				/**
				 * Creates a GetUserProfileRequest message from a plain object. Also converts values to their respective internal types.
				 * @param object Plain object
				 * @returns GetUserProfileRequest
				 */
				public static fromObject(object: {
					[k: string]: any;
				}): nosso.users.v1.GetUserProfileRequest;

				/**
				 * Creates a plain object from a GetUserProfileRequest message. Also converts values to other types if specified.
				 * @param message GetUserProfileRequest
				 * @param [options] Conversion options
				 * @returns Plain object
				 */
				public static toObject(
					message: nosso.users.v1.GetUserProfileRequest,
					options?: $protobuf.IConversionOptions
				): { [k: string]: any };

				/**
				 * Converts this GetUserProfileRequest to JSON.
				 * @returns JSON object
				 */
				public toJSON(): { [k: string]: any };
			}

			/** Properties of a GetUserProfileResponse. */
			interface IGetUserProfileResponse {
				/** GetUserProfileResponse email */
				email?: string | null;

				/** GetUserProfileResponse displayName */
				displayName?: string | null;

				/** GetUserProfileResponse roles */
				roles?: string[] | null;
			}

			/** Represents a GetUserProfileResponse. */
			class GetUserProfileResponse implements IGetUserProfileResponse {
				/**
				 * Constructs a new GetUserProfileResponse.
				 * @param [properties] Properties to set
				 */
				constructor(properties?: nosso.users.v1.IGetUserProfileResponse);

				/** GetUserProfileResponse email. */
				public email: string;

				/** GetUserProfileResponse displayName. */
				public displayName: string;

				/** GetUserProfileResponse roles. */
				public roles: string[];

				/**
				 * Creates a new GetUserProfileResponse instance using the specified properties.
				 * @param [properties] Properties to set
				 * @returns GetUserProfileResponse instance
				 */
				public static create(
					properties?: nosso.users.v1.IGetUserProfileResponse
				): nosso.users.v1.GetUserProfileResponse;

				/**
				 * Encodes the specified GetUserProfileResponse message. Does not implicitly {@link nosso.users.v1.GetUserProfileResponse.verify|verify} messages.
				 * @param message GetUserProfileResponse message or plain object to encode
				 * @param [writer] Writer to encode to
				 * @returns Writer
				 */
				public static encode(
					message: nosso.users.v1.IGetUserProfileResponse,
					writer?: $protobuf.Writer
				): $protobuf.Writer;

				/**
				 * Encodes the specified GetUserProfileResponse message, length delimited. Does not implicitly {@link nosso.users.v1.GetUserProfileResponse.verify|verify} messages.
				 * @param message GetUserProfileResponse message or plain object to encode
				 * @param [writer] Writer to encode to
				 * @returns Writer
				 */
				public static encodeDelimited(
					message: nosso.users.v1.IGetUserProfileResponse,
					writer?: $protobuf.Writer
				): $protobuf.Writer;

				/**
				 * Decodes a GetUserProfileResponse message from the specified reader or buffer.
				 * @param reader Reader or buffer to decode from
				 * @param [length] Message length if known beforehand
				 * @returns GetUserProfileResponse
				 * @throws {Error} If the payload is not a reader or valid buffer
				 * @throws {$protobuf.util.ProtocolError} If required fields are missing
				 */
				public static decode(
					reader: $protobuf.Reader | Uint8Array,
					length?: number
				): nosso.users.v1.GetUserProfileResponse;

				/**
				 * Decodes a GetUserProfileResponse message from the specified reader or buffer, length delimited.
				 * @param reader Reader or buffer to decode from
				 * @returns GetUserProfileResponse
				 * @throws {Error} If the payload is not a reader or valid buffer
				 * @throws {$protobuf.util.ProtocolError} If required fields are missing
				 */
				public static decodeDelimited(
					reader: $protobuf.Reader | Uint8Array
				): nosso.users.v1.GetUserProfileResponse;

				/**
				 * Verifies a GetUserProfileResponse message.
				 * @param message Plain object to verify
				 * @returns `null` if valid, otherwise the reason why it is not
				 */
				public static verify(message: { [k: string]: any }): string | null;

				/**
				 * Creates a GetUserProfileResponse message from a plain object. Also converts values to their respective internal types.
				 * @param object Plain object
				 * @returns GetUserProfileResponse
				 */
				public static fromObject(object: {
					[k: string]: any;
				}): nosso.users.v1.GetUserProfileResponse;

				/**
				 * Creates a plain object from a GetUserProfileResponse message. Also converts values to other types if specified.
				 * @param message GetUserProfileResponse
				 * @param [options] Conversion options
				 * @returns Plain object
				 */
				public static toObject(
					message: nosso.users.v1.GetUserProfileResponse,
					options?: $protobuf.IConversionOptions
				): { [k: string]: any };

				/**
				 * Converts this GetUserProfileResponse to JSON.
				 * @returns JSON object
				 */
				public toJSON(): { [k: string]: any };
			}

			/** Properties of a ListUsersRequest. */
			interface IListUsersRequest {
				/** ListUsersRequest pageRequest */
				pageRequest?: nosso.util.v1.IPageRequest | null;
			}

			/** Represents a ListUsersRequest. */
			class ListUsersRequest implements IListUsersRequest {
				/**
				 * Constructs a new ListUsersRequest.
				 * @param [properties] Properties to set
				 */
				constructor(properties?: nosso.users.v1.IListUsersRequest);

				/** ListUsersRequest pageRequest. */
				public pageRequest?: nosso.util.v1.IPageRequest | null;

				/**
				 * Creates a new ListUsersRequest instance using the specified properties.
				 * @param [properties] Properties to set
				 * @returns ListUsersRequest instance
				 */
				public static create(
					properties?: nosso.users.v1.IListUsersRequest
				): nosso.users.v1.ListUsersRequest;

				/**
				 * Encodes the specified ListUsersRequest message. Does not implicitly {@link nosso.users.v1.ListUsersRequest.verify|verify} messages.
				 * @param message ListUsersRequest message or plain object to encode
				 * @param [writer] Writer to encode to
				 * @returns Writer
				 */
				public static encode(
					message: nosso.users.v1.IListUsersRequest,
					writer?: $protobuf.Writer
				): $protobuf.Writer;

				/**
				 * Encodes the specified ListUsersRequest message, length delimited. Does not implicitly {@link nosso.users.v1.ListUsersRequest.verify|verify} messages.
				 * @param message ListUsersRequest message or plain object to encode
				 * @param [writer] Writer to encode to
				 * @returns Writer
				 */
				public static encodeDelimited(
					message: nosso.users.v1.IListUsersRequest,
					writer?: $protobuf.Writer
				): $protobuf.Writer;

				/**
				 * Decodes a ListUsersRequest message from the specified reader or buffer.
				 * @param reader Reader or buffer to decode from
				 * @param [length] Message length if known beforehand
				 * @returns ListUsersRequest
				 * @throws {Error} If the payload is not a reader or valid buffer
				 * @throws {$protobuf.util.ProtocolError} If required fields are missing
				 */
				public static decode(
					reader: $protobuf.Reader | Uint8Array,
					length?: number
				): nosso.users.v1.ListUsersRequest;

				/**
				 * Decodes a ListUsersRequest message from the specified reader or buffer, length delimited.
				 * @param reader Reader or buffer to decode from
				 * @returns ListUsersRequest
				 * @throws {Error} If the payload is not a reader or valid buffer
				 * @throws {$protobuf.util.ProtocolError} If required fields are missing
				 */
				public static decodeDelimited(
					reader: $protobuf.Reader | Uint8Array
				): nosso.users.v1.ListUsersRequest;

				/**
				 * Verifies a ListUsersRequest message.
				 * @param message Plain object to verify
				 * @returns `null` if valid, otherwise the reason why it is not
				 */
				public static verify(message: { [k: string]: any }): string | null;

				/**
				 * Creates a ListUsersRequest message from a plain object. Also converts values to their respective internal types.
				 * @param object Plain object
				 * @returns ListUsersRequest
				 */
				public static fromObject(object: {
					[k: string]: any;
				}): nosso.users.v1.ListUsersRequest;

				/**
				 * Creates a plain object from a ListUsersRequest message. Also converts values to other types if specified.
				 * @param message ListUsersRequest
				 * @param [options] Conversion options
				 * @returns Plain object
				 */
				public static toObject(
					message: nosso.users.v1.ListUsersRequest,
					options?: $protobuf.IConversionOptions
				): { [k: string]: any };

				/**
				 * Converts this ListUsersRequest to JSON.
				 * @returns JSON object
				 */
				public toJSON(): { [k: string]: any };
			}

			/** Properties of a ListUsersResponse. */
			interface IListUsersResponse {
				/** ListUsersResponse pageInfo */
				pageInfo?: nosso.util.v1.IPageInfo | null;

				/** ListUsersResponse users */
				users?: nosso.users.v1.IUser[] | null;
			}

			/** Represents a ListUsersResponse. */
			class ListUsersResponse implements IListUsersResponse {
				/**
				 * Constructs a new ListUsersResponse.
				 * @param [properties] Properties to set
				 */
				constructor(properties?: nosso.users.v1.IListUsersResponse);

				/** ListUsersResponse pageInfo. */
				public pageInfo?: nosso.util.v1.IPageInfo | null;

				/** ListUsersResponse users. */
				public users: nosso.users.v1.IUser[];

				/**
				 * Creates a new ListUsersResponse instance using the specified properties.
				 * @param [properties] Properties to set
				 * @returns ListUsersResponse instance
				 */
				public static create(
					properties?: nosso.users.v1.IListUsersResponse
				): nosso.users.v1.ListUsersResponse;

				/**
				 * Encodes the specified ListUsersResponse message. Does not implicitly {@link nosso.users.v1.ListUsersResponse.verify|verify} messages.
				 * @param message ListUsersResponse message or plain object to encode
				 * @param [writer] Writer to encode to
				 * @returns Writer
				 */
				public static encode(
					message: nosso.users.v1.IListUsersResponse,
					writer?: $protobuf.Writer
				): $protobuf.Writer;

				/**
				 * Encodes the specified ListUsersResponse message, length delimited. Does not implicitly {@link nosso.users.v1.ListUsersResponse.verify|verify} messages.
				 * @param message ListUsersResponse message or plain object to encode
				 * @param [writer] Writer to encode to
				 * @returns Writer
				 */
				public static encodeDelimited(
					message: nosso.users.v1.IListUsersResponse,
					writer?: $protobuf.Writer
				): $protobuf.Writer;

				/**
				 * Decodes a ListUsersResponse message from the specified reader or buffer.
				 * @param reader Reader or buffer to decode from
				 * @param [length] Message length if known beforehand
				 * @returns ListUsersResponse
				 * @throws {Error} If the payload is not a reader or valid buffer
				 * @throws {$protobuf.util.ProtocolError} If required fields are missing
				 */
				public static decode(
					reader: $protobuf.Reader | Uint8Array,
					length?: number
				): nosso.users.v1.ListUsersResponse;

				/**
				 * Decodes a ListUsersResponse message from the specified reader or buffer, length delimited.
				 * @param reader Reader or buffer to decode from
				 * @returns ListUsersResponse
				 * @throws {Error} If the payload is not a reader or valid buffer
				 * @throws {$protobuf.util.ProtocolError} If required fields are missing
				 */
				public static decodeDelimited(
					reader: $protobuf.Reader | Uint8Array
				): nosso.users.v1.ListUsersResponse;

				/**
				 * Verifies a ListUsersResponse message.
				 * @param message Plain object to verify
				 * @returns `null` if valid, otherwise the reason why it is not
				 */
				public static verify(message: { [k: string]: any }): string | null;

				/**
				 * Creates a ListUsersResponse message from a plain object. Also converts values to their respective internal types.
				 * @param object Plain object
				 * @returns ListUsersResponse
				 */
				public static fromObject(object: {
					[k: string]: any;
				}): nosso.users.v1.ListUsersResponse;

				/**
				 * Creates a plain object from a ListUsersResponse message. Also converts values to other types if specified.
				 * @param message ListUsersResponse
				 * @param [options] Conversion options
				 * @returns Plain object
				 */
				public static toObject(
					message: nosso.users.v1.ListUsersResponse,
					options?: $protobuf.IConversionOptions
				): { [k: string]: any };

				/**
				 * Converts this ListUsersResponse to JSON.
				 * @returns JSON object
				 */
				public toJSON(): { [k: string]: any };
			}

			/** Properties of a User. */
			interface IUser {
				/** User id */
				id?: number | Long | null;

				/** User email */
				email?: string | null;

				/** User displayName */
				displayName?: string | null;

				/** User domainId */
				domainId?: number | null;

				/** User roles */
				roles?: string[] | null;

				/** User createdAt */
				createdAt?: google.protobuf.ITimestamp | null;

				/** User updatedAt */
				updatedAt?: google.protobuf.ITimestamp | null;
			}

			/** Represents a User. */
			class User implements IUser {
				/**
				 * Constructs a new User.
				 * @param [properties] Properties to set
				 */
				constructor(properties?: nosso.users.v1.IUser);

				/** User id. */
				public id: number | Long;

				/** User email. */
				public email: string;

				/** User displayName. */
				public displayName: string;

				/** User domainId. */
				public domainId: number;

				/** User roles. */
				public roles: string[];

				/** User createdAt. */
				public createdAt?: google.protobuf.ITimestamp | null;

				/** User updatedAt. */
				public updatedAt?: google.protobuf.ITimestamp | null;

				/**
				 * Creates a new User instance using the specified properties.
				 * @param [properties] Properties to set
				 * @returns User instance
				 */
				public static create(properties?: nosso.users.v1.IUser): nosso.users.v1.User;

				/**
				 * Encodes the specified User message. Does not implicitly {@link nosso.users.v1.User.verify|verify} messages.
				 * @param message User message or plain object to encode
				 * @param [writer] Writer to encode to
				 * @returns Writer
				 */
				public static encode(
					message: nosso.users.v1.IUser,
					writer?: $protobuf.Writer
				): $protobuf.Writer;

				/**
				 * Encodes the specified User message, length delimited. Does not implicitly {@link nosso.users.v1.User.verify|verify} messages.
				 * @param message User message or plain object to encode
				 * @param [writer] Writer to encode to
				 * @returns Writer
				 */
				public static encodeDelimited(
					message: nosso.users.v1.IUser,
					writer?: $protobuf.Writer
				): $protobuf.Writer;

				/**
				 * Decodes a User message from the specified reader or buffer.
				 * @param reader Reader or buffer to decode from
				 * @param [length] Message length if known beforehand
				 * @returns User
				 * @throws {Error} If the payload is not a reader or valid buffer
				 * @throws {$protobuf.util.ProtocolError} If required fields are missing
				 */
				public static decode(
					reader: $protobuf.Reader | Uint8Array,
					length?: number
				): nosso.users.v1.User;

				/**
				 * Decodes a User message from the specified reader or buffer, length delimited.
				 * @param reader Reader or buffer to decode from
				 * @returns User
				 * @throws {Error} If the payload is not a reader or valid buffer
				 * @throws {$protobuf.util.ProtocolError} If required fields are missing
				 */
				public static decodeDelimited(
					reader: $protobuf.Reader | Uint8Array
				): nosso.users.v1.User;

				/**
				 * Verifies a User message.
				 * @param message Plain object to verify
				 * @returns `null` if valid, otherwise the reason why it is not
				 */
				public static verify(message: { [k: string]: any }): string | null;

				/**
				 * Creates a User message from a plain object. Also converts values to their respective internal types.
				 * @param object Plain object
				 * @returns User
				 */
				public static fromObject(object: { [k: string]: any }): nosso.users.v1.User;

				/**
				 * Creates a plain object from a User message. Also converts values to other types if specified.
				 * @param message User
				 * @param [options] Conversion options
				 * @returns Plain object
				 */
				public static toObject(
					message: nosso.users.v1.User,
					options?: $protobuf.IConversionOptions
				): { [k: string]: any };

				/**
				 * Converts this User to JSON.
				 * @returns JSON object
				 */
				public toJSON(): { [k: string]: any };
			}
		}
	}

	/** Namespace util. */
	namespace util {
		/** Namespace v1. */
		namespace v1 {
			/** Properties of a PageRequest. */
			interface IPageRequest {
				/** PageRequest page */
				page?: number | Long | null;

				/** PageRequest size */
				size?: number | Long | null;
			}

			/** Represents a PageRequest. */
			class PageRequest implements IPageRequest {
				/**
				 * Constructs a new PageRequest.
				 * @param [properties] Properties to set
				 */
				constructor(properties?: nosso.util.v1.IPageRequest);

				/** PageRequest page. */
				public page: number | Long;

				/** PageRequest size. */
				public size: number | Long;

				/**
				 * Creates a new PageRequest instance using the specified properties.
				 * @param [properties] Properties to set
				 * @returns PageRequest instance
				 */
				public static create(
					properties?: nosso.util.v1.IPageRequest
				): nosso.util.v1.PageRequest;

				/**
				 * Encodes the specified PageRequest message. Does not implicitly {@link nosso.util.v1.PageRequest.verify|verify} messages.
				 * @param message PageRequest message or plain object to encode
				 * @param [writer] Writer to encode to
				 * @returns Writer
				 */
				public static encode(
					message: nosso.util.v1.IPageRequest,
					writer?: $protobuf.Writer
				): $protobuf.Writer;

				/**
				 * Encodes the specified PageRequest message, length delimited. Does not implicitly {@link nosso.util.v1.PageRequest.verify|verify} messages.
				 * @param message PageRequest message or plain object to encode
				 * @param [writer] Writer to encode to
				 * @returns Writer
				 */
				public static encodeDelimited(
					message: nosso.util.v1.IPageRequest,
					writer?: $protobuf.Writer
				): $protobuf.Writer;

				/**
				 * Decodes a PageRequest message from the specified reader or buffer.
				 * @param reader Reader or buffer to decode from
				 * @param [length] Message length if known beforehand
				 * @returns PageRequest
				 * @throws {Error} If the payload is not a reader or valid buffer
				 * @throws {$protobuf.util.ProtocolError} If required fields are missing
				 */
				public static decode(
					reader: $protobuf.Reader | Uint8Array,
					length?: number
				): nosso.util.v1.PageRequest;

				/**
				 * Decodes a PageRequest message from the specified reader or buffer, length delimited.
				 * @param reader Reader or buffer to decode from
				 * @returns PageRequest
				 * @throws {Error} If the payload is not a reader or valid buffer
				 * @throws {$protobuf.util.ProtocolError} If required fields are missing
				 */
				public static decodeDelimited(
					reader: $protobuf.Reader | Uint8Array
				): nosso.util.v1.PageRequest;

				/**
				 * Verifies a PageRequest message.
				 * @param message Plain object to verify
				 * @returns `null` if valid, otherwise the reason why it is not
				 */
				public static verify(message: { [k: string]: any }): string | null;

				/**
				 * Creates a PageRequest message from a plain object. Also converts values to their respective internal types.
				 * @param object Plain object
				 * @returns PageRequest
				 */
				public static fromObject(object: { [k: string]: any }): nosso.util.v1.PageRequest;

				/**
				 * Creates a plain object from a PageRequest message. Also converts values to other types if specified.
				 * @param message PageRequest
				 * @param [options] Conversion options
				 * @returns Plain object
				 */
				public static toObject(
					message: nosso.util.v1.PageRequest,
					options?: $protobuf.IConversionOptions
				): { [k: string]: any };

				/**
				 * Converts this PageRequest to JSON.
				 * @returns JSON object
				 */
				public toJSON(): { [k: string]: any };
			}

			/** Properties of a PageInfo. */
			interface IPageInfo {
				/** PageInfo total */
				total?: number | Long | null;

				/** PageInfo nextPage */
				nextPage?: number | Long | null;

				/** PageInfo prevPage */
				prevPage?: number | Long | null;
			}

			/** Represents a PageInfo. */
			class PageInfo implements IPageInfo {
				/**
				 * Constructs a new PageInfo.
				 * @param [properties] Properties to set
				 */
				constructor(properties?: nosso.util.v1.IPageInfo);

				/** PageInfo total. */
				public total: number | Long;

				/** PageInfo nextPage. */
				public nextPage: number | Long;

				/** PageInfo prevPage. */
				public prevPage: number | Long;

				/**
				 * Creates a new PageInfo instance using the specified properties.
				 * @param [properties] Properties to set
				 * @returns PageInfo instance
				 */
				public static create(properties?: nosso.util.v1.IPageInfo): nosso.util.v1.PageInfo;

				/**
				 * Encodes the specified PageInfo message. Does not implicitly {@link nosso.util.v1.PageInfo.verify|verify} messages.
				 * @param message PageInfo message or plain object to encode
				 * @param [writer] Writer to encode to
				 * @returns Writer
				 */
				public static encode(
					message: nosso.util.v1.IPageInfo,
					writer?: $protobuf.Writer
				): $protobuf.Writer;

				/**
				 * Encodes the specified PageInfo message, length delimited. Does not implicitly {@link nosso.util.v1.PageInfo.verify|verify} messages.
				 * @param message PageInfo message or plain object to encode
				 * @param [writer] Writer to encode to
				 * @returns Writer
				 */
				public static encodeDelimited(
					message: nosso.util.v1.IPageInfo,
					writer?: $protobuf.Writer
				): $protobuf.Writer;

				/**
				 * Decodes a PageInfo message from the specified reader or buffer.
				 * @param reader Reader or buffer to decode from
				 * @param [length] Message length if known beforehand
				 * @returns PageInfo
				 * @throws {Error} If the payload is not a reader or valid buffer
				 * @throws {$protobuf.util.ProtocolError} If required fields are missing
				 */
				public static decode(
					reader: $protobuf.Reader | Uint8Array,
					length?: number
				): nosso.util.v1.PageInfo;

				/**
				 * Decodes a PageInfo message from the specified reader or buffer, length delimited.
				 * @param reader Reader or buffer to decode from
				 * @returns PageInfo
				 * @throws {Error} If the payload is not a reader or valid buffer
				 * @throws {$protobuf.util.ProtocolError} If required fields are missing
				 */
				public static decodeDelimited(
					reader: $protobuf.Reader | Uint8Array
				): nosso.util.v1.PageInfo;

				/**
				 * Verifies a PageInfo message.
				 * @param message Plain object to verify
				 * @returns `null` if valid, otherwise the reason why it is not
				 */
				public static verify(message: { [k: string]: any }): string | null;

				/**
				 * Creates a PageInfo message from a plain object. Also converts values to their respective internal types.
				 * @param object Plain object
				 * @returns PageInfo
				 */
				public static fromObject(object: { [k: string]: any }): nosso.util.v1.PageInfo;

				/**
				 * Creates a plain object from a PageInfo message. Also converts values to other types if specified.
				 * @param message PageInfo
				 * @param [options] Conversion options
				 * @returns Plain object
				 */
				public static toObject(
					message: nosso.util.v1.PageInfo,
					options?: $protobuf.IConversionOptions
				): { [k: string]: any };

				/**
				 * Converts this PageInfo to JSON.
				 * @returns JSON object
				 */
				public toJSON(): { [k: string]: any };
			}
		}
	}
}

/** Namespace google. */
export namespace google {
	/** Namespace protobuf. */
	namespace protobuf {
		/** Properties of a Timestamp. */
		interface ITimestamp {
			/** Timestamp seconds */
			seconds?: number | Long | null;

			/** Timestamp nanos */
			nanos?: number | null;
		}

		/** Represents a Timestamp. */
		class Timestamp implements ITimestamp {
			/**
			 * Constructs a new Timestamp.
			 * @param [properties] Properties to set
			 */
			constructor(properties?: google.protobuf.ITimestamp);

			/** Timestamp seconds. */
			public seconds: number | Long;

			/** Timestamp nanos. */
			public nanos: number;

			/**
			 * Creates a new Timestamp instance using the specified properties.
			 * @param [properties] Properties to set
			 * @returns Timestamp instance
			 */
			public static create(
				properties?: google.protobuf.ITimestamp
			): google.protobuf.Timestamp;

			/**
			 * Encodes the specified Timestamp message. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
			 * @param message Timestamp message or plain object to encode
			 * @param [writer] Writer to encode to
			 * @returns Writer
			 */
			public static encode(
				message: google.protobuf.ITimestamp,
				writer?: $protobuf.Writer
			): $protobuf.Writer;

			/**
			 * Encodes the specified Timestamp message, length delimited. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
			 * @param message Timestamp message or plain object to encode
			 * @param [writer] Writer to encode to
			 * @returns Writer
			 */
			public static encodeDelimited(
				message: google.protobuf.ITimestamp,
				writer?: $protobuf.Writer
			): $protobuf.Writer;

			/**
			 * Decodes a Timestamp message from the specified reader or buffer.
			 * @param reader Reader or buffer to decode from
			 * @param [length] Message length if known beforehand
			 * @returns Timestamp
			 * @throws {Error} If the payload is not a reader or valid buffer
			 * @throws {$protobuf.util.ProtocolError} If required fields are missing
			 */
			public static decode(
				reader: $protobuf.Reader | Uint8Array,
				length?: number
			): google.protobuf.Timestamp;

			/**
			 * Decodes a Timestamp message from the specified reader or buffer, length delimited.
			 * @param reader Reader or buffer to decode from
			 * @returns Timestamp
			 * @throws {Error} If the payload is not a reader or valid buffer
			 * @throws {$protobuf.util.ProtocolError} If required fields are missing
			 */
			public static decodeDelimited(
				reader: $protobuf.Reader | Uint8Array
			): google.protobuf.Timestamp;

			/**
			 * Verifies a Timestamp message.
			 * @param message Plain object to verify
			 * @returns `null` if valid, otherwise the reason why it is not
			 */
			public static verify(message: { [k: string]: any }): string | null;

			/**
			 * Creates a Timestamp message from a plain object. Also converts values to their respective internal types.
			 * @param object Plain object
			 * @returns Timestamp
			 */
			public static fromObject(object: { [k: string]: any }): google.protobuf.Timestamp;

			/**
			 * Creates a plain object from a Timestamp message. Also converts values to other types if specified.
			 * @param message Timestamp
			 * @param [options] Conversion options
			 * @returns Plain object
			 */
			public static toObject(
				message: google.protobuf.Timestamp,
				options?: $protobuf.IConversionOptions
			): { [k: string]: any };

			/**
			 * Converts this Timestamp to JSON.
			 * @returns JSON object
			 */
			public toJSON(): { [k: string]: any };
		}
	}
}
