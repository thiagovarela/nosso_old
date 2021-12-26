import * as protobufsjs from 'protobufjs';

// @ts-ignore
const $protobuf = protobufsjs.default;
$protobuf.roots['default'] = new $protobuf.Root();
const $Reader = $protobuf.Reader,
	$Writer = $protobuf.Writer,
	$util = $protobuf.util;

const $root = $protobuf.roots['default'] || ($protobuf.roots['default'] = {});

export const nosso = ($root.nosso = (() => {
	const nosso = {};

	nosso.domains = (function () {
		const domains = {};

		domains.v1 = (function () {
			const v1 = {};

			v1.Domain = (function () {
				function Domain(properties) {
					if (properties)
						for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
							if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
				}

				Domain.prototype.id = 0;
				Domain.prototype.name = '';
				Domain.prototype.allowedHost = '';
				Domain.prototype.createdAt = null;
				Domain.prototype.updatedAt = null;

				Domain.create = function create(properties) {
					return new Domain(properties);
				};

				Domain.encode = function encode(message, writer) {
					if (!writer) writer = $Writer.create();
					if (message.id != null && Object.hasOwnProperty.call(message, 'id'))
						writer.uint32(8).int32(message.id);
					if (message.name != null && Object.hasOwnProperty.call(message, 'name'))
						writer.uint32(18).string(message.name);
					if (
						message.allowedHost != null &&
						Object.hasOwnProperty.call(message, 'allowedHost')
					)
						writer.uint32(26).string(message.allowedHost);
					if (
						message.createdAt != null &&
						Object.hasOwnProperty.call(message, 'createdAt')
					)
						$root.google.protobuf.Timestamp.encode(
							message.createdAt,
							writer.uint32(34).fork()
						).ldelim();
					if (
						message.updatedAt != null &&
						Object.hasOwnProperty.call(message, 'updatedAt')
					)
						$root.google.protobuf.Timestamp.encode(
							message.updatedAt,
							writer.uint32(42).fork()
						).ldelim();
					return writer;
				};

				Domain.encodeDelimited = function encodeDelimited(message, writer) {
					return this.encode(message, writer).ldelim();
				};

				Domain.decode = function decode(reader, length) {
					if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
					let end = length === undefined ? reader.len : reader.pos + length,
						message = new $root.nosso.domains.v1.Domain();
					while (reader.pos < end) {
						let tag = reader.uint32();
						switch (tag >>> 3) {
							case 1:
								message.id = reader.int32();
								break;
							case 2:
								message.name = reader.string();
								break;
							case 3:
								message.allowedHost = reader.string();
								break;
							case 4:
								message.createdAt = $root.google.protobuf.Timestamp.decode(
									reader,
									reader.uint32()
								);
								break;
							case 5:
								message.updatedAt = $root.google.protobuf.Timestamp.decode(
									reader,
									reader.uint32()
								);
								break;
							default:
								reader.skipType(tag & 7);
								break;
						}
					}
					return message;
				};

				Domain.decodeDelimited = function decodeDelimited(reader) {
					if (!(reader instanceof $Reader)) reader = new $Reader(reader);
					return this.decode(reader, reader.uint32());
				};

				Domain.verify = function verify(message) {
					if (typeof message !== 'object' || message === null) return 'object expected';
					if (message.id != null && message.hasOwnProperty('id'))
						if (!$util.isInteger(message.id)) return 'id: integer expected';
					if (message.name != null && message.hasOwnProperty('name'))
						if (!$util.isString(message.name)) return 'name: string expected';
					if (message.allowedHost != null && message.hasOwnProperty('allowedHost'))
						if (!$util.isString(message.allowedHost))
							return 'allowedHost: string expected';
					if (message.createdAt != null && message.hasOwnProperty('createdAt')) {
						let error = $root.google.protobuf.Timestamp.verify(message.createdAt);
						if (error) return 'createdAt.' + error;
					}
					if (message.updatedAt != null && message.hasOwnProperty('updatedAt')) {
						let error = $root.google.protobuf.Timestamp.verify(message.updatedAt);
						if (error) return 'updatedAt.' + error;
					}
					return null;
				};

				Domain.fromObject = function fromObject(object) {
					if (object instanceof $root.nosso.domains.v1.Domain) return object;
					let message = new $root.nosso.domains.v1.Domain();
					if (object.id != null) message.id = object.id | 0;
					if (object.name != null) message.name = String(object.name);
					if (object.allowedHost != null)
						message.allowedHost = String(object.allowedHost);
					if (object.createdAt != null) {
						if (typeof object.createdAt !== 'object')
							throw TypeError('.nosso.domains.v1.Domain.createdAt: object expected');
						message.createdAt = $root.google.protobuf.Timestamp.fromObject(
							object.createdAt
						);
					}
					if (object.updatedAt != null) {
						if (typeof object.updatedAt !== 'object')
							throw TypeError('.nosso.domains.v1.Domain.updatedAt: object expected');
						message.updatedAt = $root.google.protobuf.Timestamp.fromObject(
							object.updatedAt
						);
					}
					return message;
				};

				Domain.toObject = function toObject(message, options) {
					if (!options) options = {};
					let object = {};
					if (options.defaults) {
						object.id = 0;
						object.name = '';
						object.allowedHost = '';
						object.createdAt = null;
						object.updatedAt = null;
					}
					if (message.id != null && message.hasOwnProperty('id')) object.id = message.id;
					if (message.name != null && message.hasOwnProperty('name'))
						object.name = message.name;
					if (message.allowedHost != null && message.hasOwnProperty('allowedHost'))
						object.allowedHost = message.allowedHost;
					if (message.createdAt != null && message.hasOwnProperty('createdAt'))
						object.createdAt = $root.google.protobuf.Timestamp.toObject(
							message.createdAt,
							options
						);
					if (message.updatedAt != null && message.hasOwnProperty('updatedAt'))
						object.updatedAt = $root.google.protobuf.Timestamp.toObject(
							message.updatedAt,
							options
						);
					return object;
				};

				Domain.prototype.toJSON = function toJSON() {
					return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
				};

				return Domain;
			})();

			v1.DomainsService = (function () {
				function DomainsService(rpcImpl, requestDelimited, responseDelimited) {
					$protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
				}

				(DomainsService.prototype = Object.create(
					$protobuf.rpc.Service.prototype
				)).constructor = DomainsService;

				DomainsService.create = function create(
					rpcImpl,
					requestDelimited,
					responseDelimited
				) {
					return new this(rpcImpl, requestDelimited, responseDelimited);
				};

				Object.defineProperty(
					(DomainsService.prototype.addDomain = function addDomain(request, callback) {
						return this.rpcCall(
							addDomain,
							$root.nosso.domains.v1.AddDomainRequest,
							$root.nosso.domains.v1.AddDomainResponse,
							request,
							callback
						);
					}),
					'name',
					{ value: 'AddDomain' }
				);

				Object.defineProperty(
					(DomainsService.prototype.updateDomain = function updateDomain(
						request,
						callback
					) {
						return this.rpcCall(
							updateDomain,
							$root.nosso.domains.v1.UpdateDomainRequest,
							$root.nosso.domains.v1.UpdateDomainResponse,
							request,
							callback
						);
					}),
					'name',
					{ value: 'UpdateDomain' }
				);

				Object.defineProperty(
					(DomainsService.prototype.listDomains = function listDomains(
						request,
						callback
					) {
						return this.rpcCall(
							listDomains,
							$root.nosso.domains.v1.ListDomainsRequest,
							$root.nosso.domains.v1.ListDomainsResponse,
							request,
							callback
						);
					}),
					'name',
					{ value: 'ListDomains' }
				);

				Object.defineProperty(
					(DomainsService.prototype.getDomainById = function getDomainById(
						request,
						callback
					) {
						return this.rpcCall(
							getDomainById,
							$root.nosso.domains.v1.GetDomainByIdRequest,
							$root.nosso.domains.v1.GetDomainByIdResponse,
							request,
							callback
						);
					}),
					'name',
					{ value: 'GetDomainById' }
				);

				Object.defineProperty(
					(DomainsService.prototype.getDomainByIds = function getDomainByIds(
						request,
						callback
					) {
						return this.rpcCall(
							getDomainByIds,
							$root.nosso.domains.v1.GetDomainByIdsRequest,
							$root.nosso.domains.v1.GetDomainByIdsResponse,
							request,
							callback
						);
					}),
					'name',
					{ value: 'GetDomainByIds' }
				);

				return DomainsService;
			})();

			v1.AddDomainRequest = (function () {
				function AddDomainRequest(properties) {
					if (properties)
						for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
							if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
				}

				AddDomainRequest.prototype.name = '';
				AddDomainRequest.prototype.allowedHost = '';

				AddDomainRequest.create = function create(properties) {
					return new AddDomainRequest(properties);
				};

				AddDomainRequest.encode = function encode(message, writer) {
					if (!writer) writer = $Writer.create();
					if (message.name != null && Object.hasOwnProperty.call(message, 'name'))
						writer.uint32(10).string(message.name);
					if (
						message.allowedHost != null &&
						Object.hasOwnProperty.call(message, 'allowedHost')
					)
						writer.uint32(18).string(message.allowedHost);
					return writer;
				};

				AddDomainRequest.encodeDelimited = function encodeDelimited(message, writer) {
					return this.encode(message, writer).ldelim();
				};

				AddDomainRequest.decode = function decode(reader, length) {
					if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
					let end = length === undefined ? reader.len : reader.pos + length,
						message = new $root.nosso.domains.v1.AddDomainRequest();
					while (reader.pos < end) {
						let tag = reader.uint32();
						switch (tag >>> 3) {
							case 1:
								message.name = reader.string();
								break;
							case 2:
								message.allowedHost = reader.string();
								break;
							default:
								reader.skipType(tag & 7);
								break;
						}
					}
					return message;
				};

				AddDomainRequest.decodeDelimited = function decodeDelimited(reader) {
					if (!(reader instanceof $Reader)) reader = new $Reader(reader);
					return this.decode(reader, reader.uint32());
				};

				AddDomainRequest.verify = function verify(message) {
					if (typeof message !== 'object' || message === null) return 'object expected';
					if (message.name != null && message.hasOwnProperty('name'))
						if (!$util.isString(message.name)) return 'name: string expected';
					if (message.allowedHost != null && message.hasOwnProperty('allowedHost'))
						if (!$util.isString(message.allowedHost))
							return 'allowedHost: string expected';
					return null;
				};

				AddDomainRequest.fromObject = function fromObject(object) {
					if (object instanceof $root.nosso.domains.v1.AddDomainRequest) return object;
					let message = new $root.nosso.domains.v1.AddDomainRequest();
					if (object.name != null) message.name = String(object.name);
					if (object.allowedHost != null)
						message.allowedHost = String(object.allowedHost);
					return message;
				};

				AddDomainRequest.toObject = function toObject(message, options) {
					if (!options) options = {};
					let object = {};
					if (options.defaults) {
						object.name = '';
						object.allowedHost = '';
					}
					if (message.name != null && message.hasOwnProperty('name'))
						object.name = message.name;
					if (message.allowedHost != null && message.hasOwnProperty('allowedHost'))
						object.allowedHost = message.allowedHost;
					return object;
				};

				AddDomainRequest.prototype.toJSON = function toJSON() {
					return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
				};

				return AddDomainRequest;
			})();

			v1.AddDomainResponse = (function () {
				function AddDomainResponse(properties) {
					if (properties)
						for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
							if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
				}

				AddDomainResponse.prototype.domain = null;

				AddDomainResponse.create = function create(properties) {
					return new AddDomainResponse(properties);
				};

				AddDomainResponse.encode = function encode(message, writer) {
					if (!writer) writer = $Writer.create();
					if (message.domain != null && Object.hasOwnProperty.call(message, 'domain'))
						$root.nosso.domains.v1.Domain.encode(
							message.domain,
							writer.uint32(10).fork()
						).ldelim();
					return writer;
				};

				AddDomainResponse.encodeDelimited = function encodeDelimited(message, writer) {
					return this.encode(message, writer).ldelim();
				};

				AddDomainResponse.decode = function decode(reader, length) {
					if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
					let end = length === undefined ? reader.len : reader.pos + length,
						message = new $root.nosso.domains.v1.AddDomainResponse();
					while (reader.pos < end) {
						let tag = reader.uint32();
						switch (tag >>> 3) {
							case 1:
								message.domain = $root.nosso.domains.v1.Domain.decode(
									reader,
									reader.uint32()
								);
								break;
							default:
								reader.skipType(tag & 7);
								break;
						}
					}
					return message;
				};

				AddDomainResponse.decodeDelimited = function decodeDelimited(reader) {
					if (!(reader instanceof $Reader)) reader = new $Reader(reader);
					return this.decode(reader, reader.uint32());
				};

				AddDomainResponse.verify = function verify(message) {
					if (typeof message !== 'object' || message === null) return 'object expected';
					if (message.domain != null && message.hasOwnProperty('domain')) {
						let error = $root.nosso.domains.v1.Domain.verify(message.domain);
						if (error) return 'domain.' + error;
					}
					return null;
				};

				AddDomainResponse.fromObject = function fromObject(object) {
					if (object instanceof $root.nosso.domains.v1.AddDomainResponse) return object;
					let message = new $root.nosso.domains.v1.AddDomainResponse();
					if (object.domain != null) {
						if (typeof object.domain !== 'object')
							throw TypeError(
								'.nosso.domains.v1.AddDomainResponse.domain: object expected'
							);
						message.domain = $root.nosso.domains.v1.Domain.fromObject(object.domain);
					}
					return message;
				};

				AddDomainResponse.toObject = function toObject(message, options) {
					if (!options) options = {};
					let object = {};
					if (options.defaults) object.domain = null;
					if (message.domain != null && message.hasOwnProperty('domain'))
						object.domain = $root.nosso.domains.v1.Domain.toObject(
							message.domain,
							options
						);
					return object;
				};

				AddDomainResponse.prototype.toJSON = function toJSON() {
					return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
				};

				return AddDomainResponse;
			})();

			v1.UpdateDomainRequest = (function () {
				function UpdateDomainRequest(properties) {
					if (properties)
						for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
							if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
				}

				UpdateDomainRequest.prototype.domain = null;

				UpdateDomainRequest.create = function create(properties) {
					return new UpdateDomainRequest(properties);
				};

				UpdateDomainRequest.encode = function encode(message, writer) {
					if (!writer) writer = $Writer.create();
					if (message.domain != null && Object.hasOwnProperty.call(message, 'domain'))
						$root.nosso.domains.v1.Domain.encode(
							message.domain,
							writer.uint32(10).fork()
						).ldelim();
					return writer;
				};

				UpdateDomainRequest.encodeDelimited = function encodeDelimited(message, writer) {
					return this.encode(message, writer).ldelim();
				};

				UpdateDomainRequest.decode = function decode(reader, length) {
					if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
					let end = length === undefined ? reader.len : reader.pos + length,
						message = new $root.nosso.domains.v1.UpdateDomainRequest();
					while (reader.pos < end) {
						let tag = reader.uint32();
						switch (tag >>> 3) {
							case 1:
								message.domain = $root.nosso.domains.v1.Domain.decode(
									reader,
									reader.uint32()
								);
								break;
							default:
								reader.skipType(tag & 7);
								break;
						}
					}
					return message;
				};

				UpdateDomainRequest.decodeDelimited = function decodeDelimited(reader) {
					if (!(reader instanceof $Reader)) reader = new $Reader(reader);
					return this.decode(reader, reader.uint32());
				};

				UpdateDomainRequest.verify = function verify(message) {
					if (typeof message !== 'object' || message === null) return 'object expected';
					if (message.domain != null && message.hasOwnProperty('domain')) {
						let error = $root.nosso.domains.v1.Domain.verify(message.domain);
						if (error) return 'domain.' + error;
					}
					return null;
				};

				UpdateDomainRequest.fromObject = function fromObject(object) {
					if (object instanceof $root.nosso.domains.v1.UpdateDomainRequest) return object;
					let message = new $root.nosso.domains.v1.UpdateDomainRequest();
					if (object.domain != null) {
						if (typeof object.domain !== 'object')
							throw TypeError(
								'.nosso.domains.v1.UpdateDomainRequest.domain: object expected'
							);
						message.domain = $root.nosso.domains.v1.Domain.fromObject(object.domain);
					}
					return message;
				};

				UpdateDomainRequest.toObject = function toObject(message, options) {
					if (!options) options = {};
					let object = {};
					if (options.defaults) object.domain = null;
					if (message.domain != null && message.hasOwnProperty('domain'))
						object.domain = $root.nosso.domains.v1.Domain.toObject(
							message.domain,
							options
						);
					return object;
				};

				UpdateDomainRequest.prototype.toJSON = function toJSON() {
					return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
				};

				return UpdateDomainRequest;
			})();

			v1.UpdateDomainResponse = (function () {
				function UpdateDomainResponse(properties) {
					if (properties)
						for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
							if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
				}

				UpdateDomainResponse.prototype.domain = null;

				UpdateDomainResponse.create = function create(properties) {
					return new UpdateDomainResponse(properties);
				};

				UpdateDomainResponse.encode = function encode(message, writer) {
					if (!writer) writer = $Writer.create();
					if (message.domain != null && Object.hasOwnProperty.call(message, 'domain'))
						$root.nosso.domains.v1.Domain.encode(
							message.domain,
							writer.uint32(10).fork()
						).ldelim();
					return writer;
				};

				UpdateDomainResponse.encodeDelimited = function encodeDelimited(message, writer) {
					return this.encode(message, writer).ldelim();
				};

				UpdateDomainResponse.decode = function decode(reader, length) {
					if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
					let end = length === undefined ? reader.len : reader.pos + length,
						message = new $root.nosso.domains.v1.UpdateDomainResponse();
					while (reader.pos < end) {
						let tag = reader.uint32();
						switch (tag >>> 3) {
							case 1:
								message.domain = $root.nosso.domains.v1.Domain.decode(
									reader,
									reader.uint32()
								);
								break;
							default:
								reader.skipType(tag & 7);
								break;
						}
					}
					return message;
				};

				UpdateDomainResponse.decodeDelimited = function decodeDelimited(reader) {
					if (!(reader instanceof $Reader)) reader = new $Reader(reader);
					return this.decode(reader, reader.uint32());
				};

				UpdateDomainResponse.verify = function verify(message) {
					if (typeof message !== 'object' || message === null) return 'object expected';
					if (message.domain != null && message.hasOwnProperty('domain')) {
						let error = $root.nosso.domains.v1.Domain.verify(message.domain);
						if (error) return 'domain.' + error;
					}
					return null;
				};

				UpdateDomainResponse.fromObject = function fromObject(object) {
					if (object instanceof $root.nosso.domains.v1.UpdateDomainResponse)
						return object;
					let message = new $root.nosso.domains.v1.UpdateDomainResponse();
					if (object.domain != null) {
						if (typeof object.domain !== 'object')
							throw TypeError(
								'.nosso.domains.v1.UpdateDomainResponse.domain: object expected'
							);
						message.domain = $root.nosso.domains.v1.Domain.fromObject(object.domain);
					}
					return message;
				};

				UpdateDomainResponse.toObject = function toObject(message, options) {
					if (!options) options = {};
					let object = {};
					if (options.defaults) object.domain = null;
					if (message.domain != null && message.hasOwnProperty('domain'))
						object.domain = $root.nosso.domains.v1.Domain.toObject(
							message.domain,
							options
						);
					return object;
				};

				UpdateDomainResponse.prototype.toJSON = function toJSON() {
					return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
				};

				return UpdateDomainResponse;
			})();

			v1.ListDomainsRequest = (function () {
				function ListDomainsRequest(properties) {
					if (properties)
						for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
							if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
				}

				ListDomainsRequest.prototype.pageRequest = null;

				ListDomainsRequest.create = function create(properties) {
					return new ListDomainsRequest(properties);
				};

				ListDomainsRequest.encode = function encode(message, writer) {
					if (!writer) writer = $Writer.create();
					if (
						message.pageRequest != null &&
						Object.hasOwnProperty.call(message, 'pageRequest')
					)
						$root.nosso.util.v1.PageRequest.encode(
							message.pageRequest,
							writer.uint32(10).fork()
						).ldelim();
					return writer;
				};

				ListDomainsRequest.encodeDelimited = function encodeDelimited(message, writer) {
					return this.encode(message, writer).ldelim();
				};

				ListDomainsRequest.decode = function decode(reader, length) {
					if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
					let end = length === undefined ? reader.len : reader.pos + length,
						message = new $root.nosso.domains.v1.ListDomainsRequest();
					while (reader.pos < end) {
						let tag = reader.uint32();
						switch (tag >>> 3) {
							case 1:
								message.pageRequest = $root.nosso.util.v1.PageRequest.decode(
									reader,
									reader.uint32()
								);
								break;
							default:
								reader.skipType(tag & 7);
								break;
						}
					}
					return message;
				};

				ListDomainsRequest.decodeDelimited = function decodeDelimited(reader) {
					if (!(reader instanceof $Reader)) reader = new $Reader(reader);
					return this.decode(reader, reader.uint32());
				};

				ListDomainsRequest.verify = function verify(message) {
					if (typeof message !== 'object' || message === null) return 'object expected';
					if (message.pageRequest != null && message.hasOwnProperty('pageRequest')) {
						let error = $root.nosso.util.v1.PageRequest.verify(message.pageRequest);
						if (error) return 'pageRequest.' + error;
					}
					return null;
				};

				ListDomainsRequest.fromObject = function fromObject(object) {
					if (object instanceof $root.nosso.domains.v1.ListDomainsRequest) return object;
					let message = new $root.nosso.domains.v1.ListDomainsRequest();
					if (object.pageRequest != null) {
						if (typeof object.pageRequest !== 'object')
							throw TypeError(
								'.nosso.domains.v1.ListDomainsRequest.pageRequest: object expected'
							);
						message.pageRequest = $root.nosso.util.v1.PageRequest.fromObject(
							object.pageRequest
						);
					}
					return message;
				};

				ListDomainsRequest.toObject = function toObject(message, options) {
					if (!options) options = {};
					let object = {};
					if (options.defaults) object.pageRequest = null;
					if (message.pageRequest != null && message.hasOwnProperty('pageRequest'))
						object.pageRequest = $root.nosso.util.v1.PageRequest.toObject(
							message.pageRequest,
							options
						);
					return object;
				};

				ListDomainsRequest.prototype.toJSON = function toJSON() {
					return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
				};

				return ListDomainsRequest;
			})();

			v1.ListDomainsResponse = (function () {
				function ListDomainsResponse(properties) {
					this.domains = [];
					if (properties)
						for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
							if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
				}

				ListDomainsResponse.prototype.pageInfo = null;
				ListDomainsResponse.prototype.domains = $util.emptyArray;

				ListDomainsResponse.create = function create(properties) {
					return new ListDomainsResponse(properties);
				};

				ListDomainsResponse.encode = function encode(message, writer) {
					if (!writer) writer = $Writer.create();
					if (message.pageInfo != null && Object.hasOwnProperty.call(message, 'pageInfo'))
						$root.nosso.util.v1.PageInfo.encode(
							message.pageInfo,
							writer.uint32(10).fork()
						).ldelim();
					if (message.domains != null && message.domains.length)
						for (let i = 0; i < message.domains.length; ++i)
							$root.nosso.domains.v1.Domain.encode(
								message.domains[i],
								writer.uint32(18).fork()
							).ldelim();
					return writer;
				};

				ListDomainsResponse.encodeDelimited = function encodeDelimited(message, writer) {
					return this.encode(message, writer).ldelim();
				};

				ListDomainsResponse.decode = function decode(reader, length) {
					if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
					let end = length === undefined ? reader.len : reader.pos + length,
						message = new $root.nosso.domains.v1.ListDomainsResponse();
					while (reader.pos < end) {
						let tag = reader.uint32();
						switch (tag >>> 3) {
							case 1:
								message.pageInfo = $root.nosso.util.v1.PageInfo.decode(
									reader,
									reader.uint32()
								);
								break;
							case 2:
								if (!(message.domains && message.domains.length))
									message.domains = [];
								message.domains.push(
									$root.nosso.domains.v1.Domain.decode(reader, reader.uint32())
								);
								break;
							default:
								reader.skipType(tag & 7);
								break;
						}
					}
					return message;
				};

				ListDomainsResponse.decodeDelimited = function decodeDelimited(reader) {
					if (!(reader instanceof $Reader)) reader = new $Reader(reader);
					return this.decode(reader, reader.uint32());
				};

				ListDomainsResponse.verify = function verify(message) {
					if (typeof message !== 'object' || message === null) return 'object expected';
					if (message.pageInfo != null && message.hasOwnProperty('pageInfo')) {
						let error = $root.nosso.util.v1.PageInfo.verify(message.pageInfo);
						if (error) return 'pageInfo.' + error;
					}
					if (message.domains != null && message.hasOwnProperty('domains')) {
						if (!Array.isArray(message.domains)) return 'domains: array expected';
						for (let i = 0; i < message.domains.length; ++i) {
							let error = $root.nosso.domains.v1.Domain.verify(message.domains[i]);
							if (error) return 'domains.' + error;
						}
					}
					return null;
				};

				ListDomainsResponse.fromObject = function fromObject(object) {
					if (object instanceof $root.nosso.domains.v1.ListDomainsResponse) return object;
					let message = new $root.nosso.domains.v1.ListDomainsResponse();
					if (object.pageInfo != null) {
						if (typeof object.pageInfo !== 'object')
							throw TypeError(
								'.nosso.domains.v1.ListDomainsResponse.pageInfo: object expected'
							);
						message.pageInfo = $root.nosso.util.v1.PageInfo.fromObject(object.pageInfo);
					}
					if (object.domains) {
						if (!Array.isArray(object.domains))
							throw TypeError(
								'.nosso.domains.v1.ListDomainsResponse.domains: array expected'
							);
						message.domains = [];
						for (let i = 0; i < object.domains.length; ++i) {
							if (typeof object.domains[i] !== 'object')
								throw TypeError(
									'.nosso.domains.v1.ListDomainsResponse.domains: object expected'
								);
							message.domains[i] = $root.nosso.domains.v1.Domain.fromObject(
								object.domains[i]
							);
						}
					}
					return message;
				};

				ListDomainsResponse.toObject = function toObject(message, options) {
					if (!options) options = {};
					let object = {};
					if (options.arrays || options.defaults) object.domains = [];
					if (options.defaults) object.pageInfo = null;
					if (message.pageInfo != null && message.hasOwnProperty('pageInfo'))
						object.pageInfo = $root.nosso.util.v1.PageInfo.toObject(
							message.pageInfo,
							options
						);
					if (message.domains && message.domains.length) {
						object.domains = [];
						for (let j = 0; j < message.domains.length; ++j)
							object.domains[j] = $root.nosso.domains.v1.Domain.toObject(
								message.domains[j],
								options
							);
					}
					return object;
				};

				ListDomainsResponse.prototype.toJSON = function toJSON() {
					return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
				};

				return ListDomainsResponse;
			})();

			v1.GetDomainByIdRequest = (function () {
				function GetDomainByIdRequest(properties) {
					if (properties)
						for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
							if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
				}

				GetDomainByIdRequest.prototype.id = 0;

				GetDomainByIdRequest.create = function create(properties) {
					return new GetDomainByIdRequest(properties);
				};

				GetDomainByIdRequest.encode = function encode(message, writer) {
					if (!writer) writer = $Writer.create();
					if (message.id != null && Object.hasOwnProperty.call(message, 'id'))
						writer.uint32(8).int32(message.id);
					return writer;
				};

				GetDomainByIdRequest.encodeDelimited = function encodeDelimited(message, writer) {
					return this.encode(message, writer).ldelim();
				};

				GetDomainByIdRequest.decode = function decode(reader, length) {
					if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
					let end = length === undefined ? reader.len : reader.pos + length,
						message = new $root.nosso.domains.v1.GetDomainByIdRequest();
					while (reader.pos < end) {
						let tag = reader.uint32();
						switch (tag >>> 3) {
							case 1:
								message.id = reader.int32();
								break;
							default:
								reader.skipType(tag & 7);
								break;
						}
					}
					return message;
				};

				GetDomainByIdRequest.decodeDelimited = function decodeDelimited(reader) {
					if (!(reader instanceof $Reader)) reader = new $Reader(reader);
					return this.decode(reader, reader.uint32());
				};

				GetDomainByIdRequest.verify = function verify(message) {
					if (typeof message !== 'object' || message === null) return 'object expected';
					if (message.id != null && message.hasOwnProperty('id'))
						if (!$util.isInteger(message.id)) return 'id: integer expected';
					return null;
				};

				GetDomainByIdRequest.fromObject = function fromObject(object) {
					if (object instanceof $root.nosso.domains.v1.GetDomainByIdRequest)
						return object;
					let message = new $root.nosso.domains.v1.GetDomainByIdRequest();
					if (object.id != null) message.id = object.id | 0;
					return message;
				};

				GetDomainByIdRequest.toObject = function toObject(message, options) {
					if (!options) options = {};
					let object = {};
					if (options.defaults) object.id = 0;
					if (message.id != null && message.hasOwnProperty('id')) object.id = message.id;
					return object;
				};

				GetDomainByIdRequest.prototype.toJSON = function toJSON() {
					return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
				};

				return GetDomainByIdRequest;
			})();

			v1.GetDomainByIdResponse = (function () {
				function GetDomainByIdResponse(properties) {
					if (properties)
						for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
							if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
				}

				GetDomainByIdResponse.prototype.domain = null;

				GetDomainByIdResponse.create = function create(properties) {
					return new GetDomainByIdResponse(properties);
				};

				GetDomainByIdResponse.encode = function encode(message, writer) {
					if (!writer) writer = $Writer.create();
					if (message.domain != null && Object.hasOwnProperty.call(message, 'domain'))
						$root.nosso.domains.v1.Domain.encode(
							message.domain,
							writer.uint32(10).fork()
						).ldelim();
					return writer;
				};

				GetDomainByIdResponse.encodeDelimited = function encodeDelimited(message, writer) {
					return this.encode(message, writer).ldelim();
				};

				GetDomainByIdResponse.decode = function decode(reader, length) {
					if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
					let end = length === undefined ? reader.len : reader.pos + length,
						message = new $root.nosso.domains.v1.GetDomainByIdResponse();
					while (reader.pos < end) {
						let tag = reader.uint32();
						switch (tag >>> 3) {
							case 1:
								message.domain = $root.nosso.domains.v1.Domain.decode(
									reader,
									reader.uint32()
								);
								break;
							default:
								reader.skipType(tag & 7);
								break;
						}
					}
					return message;
				};

				GetDomainByIdResponse.decodeDelimited = function decodeDelimited(reader) {
					if (!(reader instanceof $Reader)) reader = new $Reader(reader);
					return this.decode(reader, reader.uint32());
				};

				GetDomainByIdResponse.verify = function verify(message) {
					if (typeof message !== 'object' || message === null) return 'object expected';
					if (message.domain != null && message.hasOwnProperty('domain')) {
						let error = $root.nosso.domains.v1.Domain.verify(message.domain);
						if (error) return 'domain.' + error;
					}
					return null;
				};

				GetDomainByIdResponse.fromObject = function fromObject(object) {
					if (object instanceof $root.nosso.domains.v1.GetDomainByIdResponse)
						return object;
					let message = new $root.nosso.domains.v1.GetDomainByIdResponse();
					if (object.domain != null) {
						if (typeof object.domain !== 'object')
							throw TypeError(
								'.nosso.domains.v1.GetDomainByIdResponse.domain: object expected'
							);
						message.domain = $root.nosso.domains.v1.Domain.fromObject(object.domain);
					}
					return message;
				};

				GetDomainByIdResponse.toObject = function toObject(message, options) {
					if (!options) options = {};
					let object = {};
					if (options.defaults) object.domain = null;
					if (message.domain != null && message.hasOwnProperty('domain'))
						object.domain = $root.nosso.domains.v1.Domain.toObject(
							message.domain,
							options
						);
					return object;
				};

				GetDomainByIdResponse.prototype.toJSON = function toJSON() {
					return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
				};

				return GetDomainByIdResponse;
			})();

			v1.GetDomainByIdsRequest = (function () {
				function GetDomainByIdsRequest(properties) {
					this.ids = [];
					if (properties)
						for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
							if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
				}

				GetDomainByIdsRequest.prototype.ids = $util.emptyArray;

				GetDomainByIdsRequest.create = function create(properties) {
					return new GetDomainByIdsRequest(properties);
				};

				GetDomainByIdsRequest.encode = function encode(message, writer) {
					if (!writer) writer = $Writer.create();
					if (message.ids != null && message.ids.length) {
						writer.uint32(10).fork();
						for (let i = 0; i < message.ids.length; ++i) writer.int32(message.ids[i]);
						writer.ldelim();
					}
					return writer;
				};

				GetDomainByIdsRequest.encodeDelimited = function encodeDelimited(message, writer) {
					return this.encode(message, writer).ldelim();
				};

				GetDomainByIdsRequest.decode = function decode(reader, length) {
					if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
					let end = length === undefined ? reader.len : reader.pos + length,
						message = new $root.nosso.domains.v1.GetDomainByIdsRequest();
					while (reader.pos < end) {
						let tag = reader.uint32();
						switch (tag >>> 3) {
							case 1:
								if (!(message.ids && message.ids.length)) message.ids = [];
								if ((tag & 7) === 2) {
									let end2 = reader.uint32() + reader.pos;
									while (reader.pos < end2) message.ids.push(reader.int32());
								} else message.ids.push(reader.int32());
								break;
							default:
								reader.skipType(tag & 7);
								break;
						}
					}
					return message;
				};

				GetDomainByIdsRequest.decodeDelimited = function decodeDelimited(reader) {
					if (!(reader instanceof $Reader)) reader = new $Reader(reader);
					return this.decode(reader, reader.uint32());
				};

				GetDomainByIdsRequest.verify = function verify(message) {
					if (typeof message !== 'object' || message === null) return 'object expected';
					if (message.ids != null && message.hasOwnProperty('ids')) {
						if (!Array.isArray(message.ids)) return 'ids: array expected';
						for (let i = 0; i < message.ids.length; ++i)
							if (!$util.isInteger(message.ids[i])) return 'ids: integer[] expected';
					}
					return null;
				};

				GetDomainByIdsRequest.fromObject = function fromObject(object) {
					if (object instanceof $root.nosso.domains.v1.GetDomainByIdsRequest)
						return object;
					let message = new $root.nosso.domains.v1.GetDomainByIdsRequest();
					if (object.ids) {
						if (!Array.isArray(object.ids))
							throw TypeError(
								'.nosso.domains.v1.GetDomainByIdsRequest.ids: array expected'
							);
						message.ids = [];
						for (let i = 0; i < object.ids.length; ++i)
							message.ids[i] = object.ids[i] | 0;
					}
					return message;
				};

				GetDomainByIdsRequest.toObject = function toObject(message, options) {
					if (!options) options = {};
					let object = {};
					if (options.arrays || options.defaults) object.ids = [];
					if (message.ids && message.ids.length) {
						object.ids = [];
						for (let j = 0; j < message.ids.length; ++j) object.ids[j] = message.ids[j];
					}
					return object;
				};

				GetDomainByIdsRequest.prototype.toJSON = function toJSON() {
					return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
				};

				return GetDomainByIdsRequest;
			})();

			v1.GetDomainByIdsResponse = (function () {
				function GetDomainByIdsResponse(properties) {
					this.domains = [];
					if (properties)
						for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
							if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
				}

				GetDomainByIdsResponse.prototype.domains = $util.emptyArray;

				GetDomainByIdsResponse.create = function create(properties) {
					return new GetDomainByIdsResponse(properties);
				};

				GetDomainByIdsResponse.encode = function encode(message, writer) {
					if (!writer) writer = $Writer.create();
					if (message.domains != null && message.domains.length)
						for (let i = 0; i < message.domains.length; ++i)
							$root.nosso.domains.v1.Domain.encode(
								message.domains[i],
								writer.uint32(10).fork()
							).ldelim();
					return writer;
				};

				GetDomainByIdsResponse.encodeDelimited = function encodeDelimited(message, writer) {
					return this.encode(message, writer).ldelim();
				};

				GetDomainByIdsResponse.decode = function decode(reader, length) {
					if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
					let end = length === undefined ? reader.len : reader.pos + length,
						message = new $root.nosso.domains.v1.GetDomainByIdsResponse();
					while (reader.pos < end) {
						let tag = reader.uint32();
						switch (tag >>> 3) {
							case 1:
								if (!(message.domains && message.domains.length))
									message.domains = [];
								message.domains.push(
									$root.nosso.domains.v1.Domain.decode(reader, reader.uint32())
								);
								break;
							default:
								reader.skipType(tag & 7);
								break;
						}
					}
					return message;
				};

				GetDomainByIdsResponse.decodeDelimited = function decodeDelimited(reader) {
					if (!(reader instanceof $Reader)) reader = new $Reader(reader);
					return this.decode(reader, reader.uint32());
				};

				GetDomainByIdsResponse.verify = function verify(message) {
					if (typeof message !== 'object' || message === null) return 'object expected';
					if (message.domains != null && message.hasOwnProperty('domains')) {
						if (!Array.isArray(message.domains)) return 'domains: array expected';
						for (let i = 0; i < message.domains.length; ++i) {
							let error = $root.nosso.domains.v1.Domain.verify(message.domains[i]);
							if (error) return 'domains.' + error;
						}
					}
					return null;
				};

				GetDomainByIdsResponse.fromObject = function fromObject(object) {
					if (object instanceof $root.nosso.domains.v1.GetDomainByIdsResponse)
						return object;
					let message = new $root.nosso.domains.v1.GetDomainByIdsResponse();
					if (object.domains) {
						if (!Array.isArray(object.domains))
							throw TypeError(
								'.nosso.domains.v1.GetDomainByIdsResponse.domains: array expected'
							);
						message.domains = [];
						for (let i = 0; i < object.domains.length; ++i) {
							if (typeof object.domains[i] !== 'object')
								throw TypeError(
									'.nosso.domains.v1.GetDomainByIdsResponse.domains: object expected'
								);
							message.domains[i] = $root.nosso.domains.v1.Domain.fromObject(
								object.domains[i]
							);
						}
					}
					return message;
				};

				GetDomainByIdsResponse.toObject = function toObject(message, options) {
					if (!options) options = {};
					let object = {};
					if (options.arrays || options.defaults) object.domains = [];
					if (message.domains && message.domains.length) {
						object.domains = [];
						for (let j = 0; j < message.domains.length; ++j)
							object.domains[j] = $root.nosso.domains.v1.Domain.toObject(
								message.domains[j],
								options
							);
					}
					return object;
				};

				GetDomainByIdsResponse.prototype.toJSON = function toJSON() {
					return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
				};

				return GetDomainByIdsResponse;
			})();

			return v1;
		})();

		return domains;
	})();

	nosso.events = (function () {
		const events = {};

		events.v1 = (function () {
			const v1 = {};

			v1.RegisterUserEvent = (function () {
				function RegisterUserEvent(properties) {
					if (properties)
						for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
							if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
				}

				RegisterUserEvent.prototype.email = '';
				RegisterUserEvent.prototype.code = '';
				RegisterUserEvent.prototype.locale = '';

				RegisterUserEvent.create = function create(properties) {
					return new RegisterUserEvent(properties);
				};

				RegisterUserEvent.encode = function encode(message, writer) {
					if (!writer) writer = $Writer.create();
					if (message.email != null && Object.hasOwnProperty.call(message, 'email'))
						writer.uint32(10).string(message.email);
					if (message.code != null && Object.hasOwnProperty.call(message, 'code'))
						writer.uint32(18).string(message.code);
					if (message.locale != null && Object.hasOwnProperty.call(message, 'locale'))
						writer.uint32(26).string(message.locale);
					return writer;
				};

				RegisterUserEvent.encodeDelimited = function encodeDelimited(message, writer) {
					return this.encode(message, writer).ldelim();
				};

				RegisterUserEvent.decode = function decode(reader, length) {
					if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
					let end = length === undefined ? reader.len : reader.pos + length,
						message = new $root.nosso.events.v1.RegisterUserEvent();
					while (reader.pos < end) {
						let tag = reader.uint32();
						switch (tag >>> 3) {
							case 1:
								message.email = reader.string();
								break;
							case 2:
								message.code = reader.string();
								break;
							case 3:
								message.locale = reader.string();
								break;
							default:
								reader.skipType(tag & 7);
								break;
						}
					}
					return message;
				};

				RegisterUserEvent.decodeDelimited = function decodeDelimited(reader) {
					if (!(reader instanceof $Reader)) reader = new $Reader(reader);
					return this.decode(reader, reader.uint32());
				};

				RegisterUserEvent.verify = function verify(message) {
					if (typeof message !== 'object' || message === null) return 'object expected';
					if (message.email != null && message.hasOwnProperty('email'))
						if (!$util.isString(message.email)) return 'email: string expected';
					if (message.code != null && message.hasOwnProperty('code'))
						if (!$util.isString(message.code)) return 'code: string expected';
					if (message.locale != null && message.hasOwnProperty('locale'))
						if (!$util.isString(message.locale)) return 'locale: string expected';
					return null;
				};

				RegisterUserEvent.fromObject = function fromObject(object) {
					if (object instanceof $root.nosso.events.v1.RegisterUserEvent) return object;
					let message = new $root.nosso.events.v1.RegisterUserEvent();
					if (object.email != null) message.email = String(object.email);
					if (object.code != null) message.code = String(object.code);
					if (object.locale != null) message.locale = String(object.locale);
					return message;
				};

				RegisterUserEvent.toObject = function toObject(message, options) {
					if (!options) options = {};
					let object = {};
					if (options.defaults) {
						object.email = '';
						object.code = '';
						object.locale = '';
					}
					if (message.email != null && message.hasOwnProperty('email'))
						object.email = message.email;
					if (message.code != null && message.hasOwnProperty('code'))
						object.code = message.code;
					if (message.locale != null && message.hasOwnProperty('locale'))
						object.locale = message.locale;
					return object;
				};

				RegisterUserEvent.prototype.toJSON = function toJSON() {
					return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
				};

				return RegisterUserEvent;
			})();

			v1.GetCodeEvent = (function () {
				function GetCodeEvent(properties) {
					if (properties)
						for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
							if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
				}

				GetCodeEvent.prototype.email = '';
				GetCodeEvent.prototype.code = '';
				GetCodeEvent.prototype.locale = '';

				GetCodeEvent.create = function create(properties) {
					return new GetCodeEvent(properties);
				};

				GetCodeEvent.encode = function encode(message, writer) {
					if (!writer) writer = $Writer.create();
					if (message.email != null && Object.hasOwnProperty.call(message, 'email'))
						writer.uint32(10).string(message.email);
					if (message.code != null && Object.hasOwnProperty.call(message, 'code'))
						writer.uint32(18).string(message.code);
					if (message.locale != null && Object.hasOwnProperty.call(message, 'locale'))
						writer.uint32(26).string(message.locale);
					return writer;
				};

				GetCodeEvent.encodeDelimited = function encodeDelimited(message, writer) {
					return this.encode(message, writer).ldelim();
				};

				GetCodeEvent.decode = function decode(reader, length) {
					if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
					let end = length === undefined ? reader.len : reader.pos + length,
						message = new $root.nosso.events.v1.GetCodeEvent();
					while (reader.pos < end) {
						let tag = reader.uint32();
						switch (tag >>> 3) {
							case 1:
								message.email = reader.string();
								break;
							case 2:
								message.code = reader.string();
								break;
							case 3:
								message.locale = reader.string();
								break;
							default:
								reader.skipType(tag & 7);
								break;
						}
					}
					return message;
				};

				GetCodeEvent.decodeDelimited = function decodeDelimited(reader) {
					if (!(reader instanceof $Reader)) reader = new $Reader(reader);
					return this.decode(reader, reader.uint32());
				};

				GetCodeEvent.verify = function verify(message) {
					if (typeof message !== 'object' || message === null) return 'object expected';
					if (message.email != null && message.hasOwnProperty('email'))
						if (!$util.isString(message.email)) return 'email: string expected';
					if (message.code != null && message.hasOwnProperty('code'))
						if (!$util.isString(message.code)) return 'code: string expected';
					if (message.locale != null && message.hasOwnProperty('locale'))
						if (!$util.isString(message.locale)) return 'locale: string expected';
					return null;
				};

				GetCodeEvent.fromObject = function fromObject(object) {
					if (object instanceof $root.nosso.events.v1.GetCodeEvent) return object;
					let message = new $root.nosso.events.v1.GetCodeEvent();
					if (object.email != null) message.email = String(object.email);
					if (object.code != null) message.code = String(object.code);
					if (object.locale != null) message.locale = String(object.locale);
					return message;
				};

				GetCodeEvent.toObject = function toObject(message, options) {
					if (!options) options = {};
					let object = {};
					if (options.defaults) {
						object.email = '';
						object.code = '';
						object.locale = '';
					}
					if (message.email != null && message.hasOwnProperty('email'))
						object.email = message.email;
					if (message.code != null && message.hasOwnProperty('code'))
						object.code = message.code;
					if (message.locale != null && message.hasOwnProperty('locale'))
						object.locale = message.locale;
					return object;
				};

				GetCodeEvent.prototype.toJSON = function toJSON() {
					return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
				};

				return GetCodeEvent;
			})();

			return v1;
		})();

		return events;
	})();

	nosso.users = (function () {
		const users = {};

		users.v1 = (function () {
			const v1 = {};

			v1.UsersService = (function () {
				function UsersService(rpcImpl, requestDelimited, responseDelimited) {
					$protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
				}

				(UsersService.prototype = Object.create(
					$protobuf.rpc.Service.prototype
				)).constructor = UsersService;

				UsersService.create = function create(
					rpcImpl,
					requestDelimited,
					responseDelimited
				) {
					return new this(rpcImpl, requestDelimited, responseDelimited);
				};

				Object.defineProperty(
					(UsersService.prototype.registerUser = function registerUser(
						request,
						callback
					) {
						return this.rpcCall(
							registerUser,
							$root.nosso.users.v1.RegisterUserRequest,
							$root.nosso.users.v1.RegisterUserResponse,
							request,
							callback
						);
					}),
					'name',
					{ value: 'RegisterUser' }
				);

				Object.defineProperty(
					(UsersService.prototype.getCode = function getCode(request, callback) {
						return this.rpcCall(
							getCode,
							$root.nosso.users.v1.GetCodeRequest,
							$root.nosso.users.v1.GetCodeResponse,
							request,
							callback
						);
					}),
					'name',
					{ value: 'GetCode' }
				);

				Object.defineProperty(
					(UsersService.prototype.getAuthenticationToken =
						function getAuthenticationToken(request, callback) {
							return this.rpcCall(
								getAuthenticationToken,
								$root.nosso.users.v1.GetAuthenticationTokenRequest,
								$root.nosso.users.v1.GetAuthenticationTokenResponse,
								request,
								callback
							);
						}),
					'name',
					{ value: 'GetAuthenticationToken' }
				);

				Object.defineProperty(
					(UsersService.prototype.getUserProfile = function getUserProfile(
						request,
						callback
					) {
						return this.rpcCall(
							getUserProfile,
							$root.nosso.users.v1.GetUserProfileRequest,
							$root.nosso.users.v1.GetUserProfileResponse,
							request,
							callback
						);
					}),
					'name',
					{ value: 'GetUserProfile' }
				);

				Object.defineProperty(
					(UsersService.prototype.listUsers = function listUsers(request, callback) {
						return this.rpcCall(
							listUsers,
							$root.nosso.users.v1.ListUsersRequest,
							$root.nosso.users.v1.ListUsersResponse,
							request,
							callback
						);
					}),
					'name',
					{ value: 'ListUsers' }
				);

				return UsersService;
			})();

			v1.GetCodeRequest = (function () {
				function GetCodeRequest(properties) {
					if (properties)
						for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
							if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
				}

				GetCodeRequest.prototype.email = '';

				GetCodeRequest.create = function create(properties) {
					return new GetCodeRequest(properties);
				};

				GetCodeRequest.encode = function encode(message, writer) {
					if (!writer) writer = $Writer.create();
					if (message.email != null && Object.hasOwnProperty.call(message, 'email'))
						writer.uint32(10).string(message.email);
					return writer;
				};

				GetCodeRequest.encodeDelimited = function encodeDelimited(message, writer) {
					return this.encode(message, writer).ldelim();
				};

				GetCodeRequest.decode = function decode(reader, length) {
					if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
					let end = length === undefined ? reader.len : reader.pos + length,
						message = new $root.nosso.users.v1.GetCodeRequest();
					while (reader.pos < end) {
						let tag = reader.uint32();
						switch (tag >>> 3) {
							case 1:
								message.email = reader.string();
								break;
							default:
								reader.skipType(tag & 7);
								break;
						}
					}
					return message;
				};

				GetCodeRequest.decodeDelimited = function decodeDelimited(reader) {
					if (!(reader instanceof $Reader)) reader = new $Reader(reader);
					return this.decode(reader, reader.uint32());
				};

				GetCodeRequest.verify = function verify(message) {
					if (typeof message !== 'object' || message === null) return 'object expected';
					if (message.email != null && message.hasOwnProperty('email'))
						if (!$util.isString(message.email)) return 'email: string expected';
					return null;
				};

				GetCodeRequest.fromObject = function fromObject(object) {
					if (object instanceof $root.nosso.users.v1.GetCodeRequest) return object;
					let message = new $root.nosso.users.v1.GetCodeRequest();
					if (object.email != null) message.email = String(object.email);
					return message;
				};

				GetCodeRequest.toObject = function toObject(message, options) {
					if (!options) options = {};
					let object = {};
					if (options.defaults) object.email = '';
					if (message.email != null && message.hasOwnProperty('email'))
						object.email = message.email;
					return object;
				};

				GetCodeRequest.prototype.toJSON = function toJSON() {
					return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
				};

				return GetCodeRequest;
			})();

			v1.GetCodeResponse = (function () {
				function GetCodeResponse(properties) {
					if (properties)
						for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
							if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
				}

				GetCodeResponse.prototype.sent = false;

				GetCodeResponse.create = function create(properties) {
					return new GetCodeResponse(properties);
				};

				GetCodeResponse.encode = function encode(message, writer) {
					if (!writer) writer = $Writer.create();
					if (message.sent != null && Object.hasOwnProperty.call(message, 'sent'))
						writer.uint32(8).bool(message.sent);
					return writer;
				};

				GetCodeResponse.encodeDelimited = function encodeDelimited(message, writer) {
					return this.encode(message, writer).ldelim();
				};

				GetCodeResponse.decode = function decode(reader, length) {
					if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
					let end = length === undefined ? reader.len : reader.pos + length,
						message = new $root.nosso.users.v1.GetCodeResponse();
					while (reader.pos < end) {
						let tag = reader.uint32();
						switch (tag >>> 3) {
							case 1:
								message.sent = reader.bool();
								break;
							default:
								reader.skipType(tag & 7);
								break;
						}
					}
					return message;
				};

				GetCodeResponse.decodeDelimited = function decodeDelimited(reader) {
					if (!(reader instanceof $Reader)) reader = new $Reader(reader);
					return this.decode(reader, reader.uint32());
				};

				GetCodeResponse.verify = function verify(message) {
					if (typeof message !== 'object' || message === null) return 'object expected';
					if (message.sent != null && message.hasOwnProperty('sent'))
						if (typeof message.sent !== 'boolean') return 'sent: boolean expected';
					return null;
				};

				GetCodeResponse.fromObject = function fromObject(object) {
					if (object instanceof $root.nosso.users.v1.GetCodeResponse) return object;
					let message = new $root.nosso.users.v1.GetCodeResponse();
					if (object.sent != null) message.sent = Boolean(object.sent);
					return message;
				};

				GetCodeResponse.toObject = function toObject(message, options) {
					if (!options) options = {};
					let object = {};
					if (options.defaults) object.sent = false;
					if (message.sent != null && message.hasOwnProperty('sent'))
						object.sent = message.sent;
					return object;
				};

				GetCodeResponse.prototype.toJSON = function toJSON() {
					return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
				};

				return GetCodeResponse;
			})();

			v1.GetAuthenticationTokenRequest = (function () {
				function GetAuthenticationTokenRequest(properties) {
					if (properties)
						for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
							if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
				}

				GetAuthenticationTokenRequest.prototype.email = '';
				GetAuthenticationTokenRequest.prototype.token = '';

				GetAuthenticationTokenRequest.create = function create(properties) {
					return new GetAuthenticationTokenRequest(properties);
				};

				GetAuthenticationTokenRequest.encode = function encode(message, writer) {
					if (!writer) writer = $Writer.create();
					if (message.email != null && Object.hasOwnProperty.call(message, 'email'))
						writer.uint32(10).string(message.email);
					if (message.token != null && Object.hasOwnProperty.call(message, 'token'))
						writer.uint32(18).string(message.token);
					return writer;
				};

				GetAuthenticationTokenRequest.encodeDelimited = function encodeDelimited(
					message,
					writer
				) {
					return this.encode(message, writer).ldelim();
				};

				GetAuthenticationTokenRequest.decode = function decode(reader, length) {
					if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
					let end = length === undefined ? reader.len : reader.pos + length,
						message = new $root.nosso.users.v1.GetAuthenticationTokenRequest();
					while (reader.pos < end) {
						let tag = reader.uint32();
						switch (tag >>> 3) {
							case 1:
								message.email = reader.string();
								break;
							case 2:
								message.token = reader.string();
								break;
							default:
								reader.skipType(tag & 7);
								break;
						}
					}
					return message;
				};

				GetAuthenticationTokenRequest.decodeDelimited = function decodeDelimited(reader) {
					if (!(reader instanceof $Reader)) reader = new $Reader(reader);
					return this.decode(reader, reader.uint32());
				};

				GetAuthenticationTokenRequest.verify = function verify(message) {
					if (typeof message !== 'object' || message === null) return 'object expected';
					if (message.email != null && message.hasOwnProperty('email'))
						if (!$util.isString(message.email)) return 'email: string expected';
					if (message.token != null && message.hasOwnProperty('token'))
						if (!$util.isString(message.token)) return 'token: string expected';
					return null;
				};

				GetAuthenticationTokenRequest.fromObject = function fromObject(object) {
					if (object instanceof $root.nosso.users.v1.GetAuthenticationTokenRequest)
						return object;
					let message = new $root.nosso.users.v1.GetAuthenticationTokenRequest();
					if (object.email != null) message.email = String(object.email);
					if (object.token != null) message.token = String(object.token);
					return message;
				};

				GetAuthenticationTokenRequest.toObject = function toObject(message, options) {
					if (!options) options = {};
					let object = {};
					if (options.defaults) {
						object.email = '';
						object.token = '';
					}
					if (message.email != null && message.hasOwnProperty('email'))
						object.email = message.email;
					if (message.token != null && message.hasOwnProperty('token'))
						object.token = message.token;
					return object;
				};

				GetAuthenticationTokenRequest.prototype.toJSON = function toJSON() {
					return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
				};

				return GetAuthenticationTokenRequest;
			})();

			v1.GetAuthenticationTokenResponse = (function () {
				function GetAuthenticationTokenResponse(properties) {
					if (properties)
						for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
							if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
				}

				GetAuthenticationTokenResponse.prototype.jwt = '';

				GetAuthenticationTokenResponse.create = function create(properties) {
					return new GetAuthenticationTokenResponse(properties);
				};

				GetAuthenticationTokenResponse.encode = function encode(message, writer) {
					if (!writer) writer = $Writer.create();
					if (message.jwt != null && Object.hasOwnProperty.call(message, 'jwt'))
						writer.uint32(10).string(message.jwt);
					return writer;
				};

				GetAuthenticationTokenResponse.encodeDelimited = function encodeDelimited(
					message,
					writer
				) {
					return this.encode(message, writer).ldelim();
				};

				GetAuthenticationTokenResponse.decode = function decode(reader, length) {
					if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
					let end = length === undefined ? reader.len : reader.pos + length,
						message = new $root.nosso.users.v1.GetAuthenticationTokenResponse();
					while (reader.pos < end) {
						let tag = reader.uint32();
						switch (tag >>> 3) {
							case 1:
								message.jwt = reader.string();
								break;
							default:
								reader.skipType(tag & 7);
								break;
						}
					}
					return message;
				};

				GetAuthenticationTokenResponse.decodeDelimited = function decodeDelimited(reader) {
					if (!(reader instanceof $Reader)) reader = new $Reader(reader);
					return this.decode(reader, reader.uint32());
				};

				GetAuthenticationTokenResponse.verify = function verify(message) {
					if (typeof message !== 'object' || message === null) return 'object expected';
					if (message.jwt != null && message.hasOwnProperty('jwt'))
						if (!$util.isString(message.jwt)) return 'jwt: string expected';
					return null;
				};

				GetAuthenticationTokenResponse.fromObject = function fromObject(object) {
					if (object instanceof $root.nosso.users.v1.GetAuthenticationTokenResponse)
						return object;
					let message = new $root.nosso.users.v1.GetAuthenticationTokenResponse();
					if (object.jwt != null) message.jwt = String(object.jwt);
					return message;
				};

				GetAuthenticationTokenResponse.toObject = function toObject(message, options) {
					if (!options) options = {};
					let object = {};
					if (options.defaults) object.jwt = '';
					if (message.jwt != null && message.hasOwnProperty('jwt'))
						object.jwt = message.jwt;
					return object;
				};

				GetAuthenticationTokenResponse.prototype.toJSON = function toJSON() {
					return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
				};

				return GetAuthenticationTokenResponse;
			})();

			v1.RegisterUserRequest = (function () {
				function RegisterUserRequest(properties) {
					if (properties)
						for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
							if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
				}

				RegisterUserRequest.prototype.email = '';

				RegisterUserRequest.create = function create(properties) {
					return new RegisterUserRequest(properties);
				};

				RegisterUserRequest.encode = function encode(message, writer) {
					if (!writer) writer = $Writer.create();
					if (message.email != null && Object.hasOwnProperty.call(message, 'email'))
						writer.uint32(10).string(message.email);
					return writer;
				};

				RegisterUserRequest.encodeDelimited = function encodeDelimited(message, writer) {
					return this.encode(message, writer).ldelim();
				};

				RegisterUserRequest.decode = function decode(reader, length) {
					if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
					let end = length === undefined ? reader.len : reader.pos + length,
						message = new $root.nosso.users.v1.RegisterUserRequest();
					while (reader.pos < end) {
						let tag = reader.uint32();
						switch (tag >>> 3) {
							case 1:
								message.email = reader.string();
								break;
							default:
								reader.skipType(tag & 7);
								break;
						}
					}
					return message;
				};

				RegisterUserRequest.decodeDelimited = function decodeDelimited(reader) {
					if (!(reader instanceof $Reader)) reader = new $Reader(reader);
					return this.decode(reader, reader.uint32());
				};

				RegisterUserRequest.verify = function verify(message) {
					if (typeof message !== 'object' || message === null) return 'object expected';
					if (message.email != null && message.hasOwnProperty('email'))
						if (!$util.isString(message.email)) return 'email: string expected';
					return null;
				};

				RegisterUserRequest.fromObject = function fromObject(object) {
					if (object instanceof $root.nosso.users.v1.RegisterUserRequest) return object;
					let message = new $root.nosso.users.v1.RegisterUserRequest();
					if (object.email != null) message.email = String(object.email);
					return message;
				};

				RegisterUserRequest.toObject = function toObject(message, options) {
					if (!options) options = {};
					let object = {};
					if (options.defaults) object.email = '';
					if (message.email != null && message.hasOwnProperty('email'))
						object.email = message.email;
					return object;
				};

				RegisterUserRequest.prototype.toJSON = function toJSON() {
					return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
				};

				return RegisterUserRequest;
			})();

			v1.RegisterUserResponse = (function () {
				function RegisterUserResponse(properties) {
					if (properties)
						for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
							if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
				}

				RegisterUserResponse.prototype.sent = false;

				RegisterUserResponse.create = function create(properties) {
					return new RegisterUserResponse(properties);
				};

				RegisterUserResponse.encode = function encode(message, writer) {
					if (!writer) writer = $Writer.create();
					if (message.sent != null && Object.hasOwnProperty.call(message, 'sent'))
						writer.uint32(8).bool(message.sent);
					return writer;
				};

				RegisterUserResponse.encodeDelimited = function encodeDelimited(message, writer) {
					return this.encode(message, writer).ldelim();
				};

				RegisterUserResponse.decode = function decode(reader, length) {
					if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
					let end = length === undefined ? reader.len : reader.pos + length,
						message = new $root.nosso.users.v1.RegisterUserResponse();
					while (reader.pos < end) {
						let tag = reader.uint32();
						switch (tag >>> 3) {
							case 1:
								message.sent = reader.bool();
								break;
							default:
								reader.skipType(tag & 7);
								break;
						}
					}
					return message;
				};

				RegisterUserResponse.decodeDelimited = function decodeDelimited(reader) {
					if (!(reader instanceof $Reader)) reader = new $Reader(reader);
					return this.decode(reader, reader.uint32());
				};

				RegisterUserResponse.verify = function verify(message) {
					if (typeof message !== 'object' || message === null) return 'object expected';
					if (message.sent != null && message.hasOwnProperty('sent'))
						if (typeof message.sent !== 'boolean') return 'sent: boolean expected';
					return null;
				};

				RegisterUserResponse.fromObject = function fromObject(object) {
					if (object instanceof $root.nosso.users.v1.RegisterUserResponse) return object;
					let message = new $root.nosso.users.v1.RegisterUserResponse();
					if (object.sent != null) message.sent = Boolean(object.sent);
					return message;
				};

				RegisterUserResponse.toObject = function toObject(message, options) {
					if (!options) options = {};
					let object = {};
					if (options.defaults) object.sent = false;
					if (message.sent != null && message.hasOwnProperty('sent'))
						object.sent = message.sent;
					return object;
				};

				RegisterUserResponse.prototype.toJSON = function toJSON() {
					return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
				};

				return RegisterUserResponse;
			})();

			v1.GetUserProfileRequest = (function () {
				function GetUserProfileRequest(properties) {
					if (properties)
						for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
							if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
				}

				GetUserProfileRequest.create = function create(properties) {
					return new GetUserProfileRequest(properties);
				};

				GetUserProfileRequest.encode = function encode(message, writer) {
					if (!writer) writer = $Writer.create();
					return writer;
				};

				GetUserProfileRequest.encodeDelimited = function encodeDelimited(message, writer) {
					return this.encode(message, writer).ldelim();
				};

				GetUserProfileRequest.decode = function decode(reader, length) {
					if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
					let end = length === undefined ? reader.len : reader.pos + length,
						message = new $root.nosso.users.v1.GetUserProfileRequest();
					while (reader.pos < end) {
						let tag = reader.uint32();
						switch (tag >>> 3) {
							default:
								reader.skipType(tag & 7);
								break;
						}
					}
					return message;
				};

				GetUserProfileRequest.decodeDelimited = function decodeDelimited(reader) {
					if (!(reader instanceof $Reader)) reader = new $Reader(reader);
					return this.decode(reader, reader.uint32());
				};

				GetUserProfileRequest.verify = function verify(message) {
					if (typeof message !== 'object' || message === null) return 'object expected';
					return null;
				};

				GetUserProfileRequest.fromObject = function fromObject(object) {
					if (object instanceof $root.nosso.users.v1.GetUserProfileRequest) return object;
					return new $root.nosso.users.v1.GetUserProfileRequest();
				};

				GetUserProfileRequest.toObject = function toObject() {
					return {};
				};

				GetUserProfileRequest.prototype.toJSON = function toJSON() {
					return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
				};

				return GetUserProfileRequest;
			})();

			v1.GetUserProfileResponse = (function () {
				function GetUserProfileResponse(properties) {
					this.roles = [];
					if (properties)
						for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
							if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
				}

				GetUserProfileResponse.prototype.email = '';
				GetUserProfileResponse.prototype.displayName = '';
				GetUserProfileResponse.prototype.roles = $util.emptyArray;

				GetUserProfileResponse.create = function create(properties) {
					return new GetUserProfileResponse(properties);
				};

				GetUserProfileResponse.encode = function encode(message, writer) {
					if (!writer) writer = $Writer.create();
					if (message.email != null && Object.hasOwnProperty.call(message, 'email'))
						writer.uint32(10).string(message.email);
					if (
						message.displayName != null &&
						Object.hasOwnProperty.call(message, 'displayName')
					)
						writer.uint32(18).string(message.displayName);
					if (message.roles != null && message.roles.length)
						for (let i = 0; i < message.roles.length; ++i)
							writer.uint32(26).string(message.roles[i]);
					return writer;
				};

				GetUserProfileResponse.encodeDelimited = function encodeDelimited(message, writer) {
					return this.encode(message, writer).ldelim();
				};

				GetUserProfileResponse.decode = function decode(reader, length) {
					if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
					let end = length === undefined ? reader.len : reader.pos + length,
						message = new $root.nosso.users.v1.GetUserProfileResponse();
					while (reader.pos < end) {
						let tag = reader.uint32();
						switch (tag >>> 3) {
							case 1:
								message.email = reader.string();
								break;
							case 2:
								message.displayName = reader.string();
								break;
							case 3:
								if (!(message.roles && message.roles.length)) message.roles = [];
								message.roles.push(reader.string());
								break;
							default:
								reader.skipType(tag & 7);
								break;
						}
					}
					return message;
				};

				GetUserProfileResponse.decodeDelimited = function decodeDelimited(reader) {
					if (!(reader instanceof $Reader)) reader = new $Reader(reader);
					return this.decode(reader, reader.uint32());
				};

				GetUserProfileResponse.verify = function verify(message) {
					if (typeof message !== 'object' || message === null) return 'object expected';
					if (message.email != null && message.hasOwnProperty('email'))
						if (!$util.isString(message.email)) return 'email: string expected';
					if (message.displayName != null && message.hasOwnProperty('displayName'))
						if (!$util.isString(message.displayName))
							return 'displayName: string expected';
					if (message.roles != null && message.hasOwnProperty('roles')) {
						if (!Array.isArray(message.roles)) return 'roles: array expected';
						for (let i = 0; i < message.roles.length; ++i)
							if (!$util.isString(message.roles[i]))
								return 'roles: string[] expected';
					}
					return null;
				};

				GetUserProfileResponse.fromObject = function fromObject(object) {
					if (object instanceof $root.nosso.users.v1.GetUserProfileResponse)
						return object;
					let message = new $root.nosso.users.v1.GetUserProfileResponse();
					if (object.email != null) message.email = String(object.email);
					if (object.displayName != null)
						message.displayName = String(object.displayName);
					if (object.roles) {
						if (!Array.isArray(object.roles))
							throw TypeError(
								'.nosso.users.v1.GetUserProfileResponse.roles: array expected'
							);
						message.roles = [];
						for (let i = 0; i < object.roles.length; ++i)
							message.roles[i] = String(object.roles[i]);
					}
					return message;
				};

				GetUserProfileResponse.toObject = function toObject(message, options) {
					if (!options) options = {};
					let object = {};
					if (options.arrays || options.defaults) object.roles = [];
					if (options.defaults) {
						object.email = '';
						object.displayName = '';
					}
					if (message.email != null && message.hasOwnProperty('email'))
						object.email = message.email;
					if (message.displayName != null && message.hasOwnProperty('displayName'))
						object.displayName = message.displayName;
					if (message.roles && message.roles.length) {
						object.roles = [];
						for (let j = 0; j < message.roles.length; ++j)
							object.roles[j] = message.roles[j];
					}
					return object;
				};

				GetUserProfileResponse.prototype.toJSON = function toJSON() {
					return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
				};

				return GetUserProfileResponse;
			})();

			v1.ListUsersRequest = (function () {
				function ListUsersRequest(properties) {
					if (properties)
						for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
							if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
				}

				ListUsersRequest.prototype.pageRequest = null;

				ListUsersRequest.create = function create(properties) {
					return new ListUsersRequest(properties);
				};

				ListUsersRequest.encode = function encode(message, writer) {
					if (!writer) writer = $Writer.create();
					if (
						message.pageRequest != null &&
						Object.hasOwnProperty.call(message, 'pageRequest')
					)
						$root.nosso.util.v1.PageRequest.encode(
							message.pageRequest,
							writer.uint32(10).fork()
						).ldelim();
					return writer;
				};

				ListUsersRequest.encodeDelimited = function encodeDelimited(message, writer) {
					return this.encode(message, writer).ldelim();
				};

				ListUsersRequest.decode = function decode(reader, length) {
					if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
					let end = length === undefined ? reader.len : reader.pos + length,
						message = new $root.nosso.users.v1.ListUsersRequest();
					while (reader.pos < end) {
						let tag = reader.uint32();
						switch (tag >>> 3) {
							case 1:
								message.pageRequest = $root.nosso.util.v1.PageRequest.decode(
									reader,
									reader.uint32()
								);
								break;
							default:
								reader.skipType(tag & 7);
								break;
						}
					}
					return message;
				};

				ListUsersRequest.decodeDelimited = function decodeDelimited(reader) {
					if (!(reader instanceof $Reader)) reader = new $Reader(reader);
					return this.decode(reader, reader.uint32());
				};

				ListUsersRequest.verify = function verify(message) {
					if (typeof message !== 'object' || message === null) return 'object expected';
					if (message.pageRequest != null && message.hasOwnProperty('pageRequest')) {
						let error = $root.nosso.util.v1.PageRequest.verify(message.pageRequest);
						if (error) return 'pageRequest.' + error;
					}
					return null;
				};

				ListUsersRequest.fromObject = function fromObject(object) {
					if (object instanceof $root.nosso.users.v1.ListUsersRequest) return object;
					let message = new $root.nosso.users.v1.ListUsersRequest();
					if (object.pageRequest != null) {
						if (typeof object.pageRequest !== 'object')
							throw TypeError(
								'.nosso.users.v1.ListUsersRequest.pageRequest: object expected'
							);
						message.pageRequest = $root.nosso.util.v1.PageRequest.fromObject(
							object.pageRequest
						);
					}
					return message;
				};

				ListUsersRequest.toObject = function toObject(message, options) {
					if (!options) options = {};
					let object = {};
					if (options.defaults) object.pageRequest = null;
					if (message.pageRequest != null && message.hasOwnProperty('pageRequest'))
						object.pageRequest = $root.nosso.util.v1.PageRequest.toObject(
							message.pageRequest,
							options
						);
					return object;
				};

				ListUsersRequest.prototype.toJSON = function toJSON() {
					return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
				};

				return ListUsersRequest;
			})();

			v1.ListUsersResponse = (function () {
				function ListUsersResponse(properties) {
					this.users = [];
					if (properties)
						for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
							if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
				}

				ListUsersResponse.prototype.pageInfo = null;
				ListUsersResponse.prototype.users = $util.emptyArray;

				ListUsersResponse.create = function create(properties) {
					return new ListUsersResponse(properties);
				};

				ListUsersResponse.encode = function encode(message, writer) {
					if (!writer) writer = $Writer.create();
					if (message.pageInfo != null && Object.hasOwnProperty.call(message, 'pageInfo'))
						$root.nosso.util.v1.PageInfo.encode(
							message.pageInfo,
							writer.uint32(10).fork()
						).ldelim();
					if (message.users != null && message.users.length)
						for (let i = 0; i < message.users.length; ++i)
							$root.nosso.users.v1.User.encode(
								message.users[i],
								writer.uint32(18).fork()
							).ldelim();
					return writer;
				};

				ListUsersResponse.encodeDelimited = function encodeDelimited(message, writer) {
					return this.encode(message, writer).ldelim();
				};

				ListUsersResponse.decode = function decode(reader, length) {
					if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
					let end = length === undefined ? reader.len : reader.pos + length,
						message = new $root.nosso.users.v1.ListUsersResponse();
					while (reader.pos < end) {
						let tag = reader.uint32();
						switch (tag >>> 3) {
							case 1:
								message.pageInfo = $root.nosso.util.v1.PageInfo.decode(
									reader,
									reader.uint32()
								);
								break;
							case 2:
								if (!(message.users && message.users.length)) message.users = [];
								message.users.push(
									$root.nosso.users.v1.User.decode(reader, reader.uint32())
								);
								break;
							default:
								reader.skipType(tag & 7);
								break;
						}
					}
					return message;
				};

				ListUsersResponse.decodeDelimited = function decodeDelimited(reader) {
					if (!(reader instanceof $Reader)) reader = new $Reader(reader);
					return this.decode(reader, reader.uint32());
				};

				ListUsersResponse.verify = function verify(message) {
					if (typeof message !== 'object' || message === null) return 'object expected';
					if (message.pageInfo != null && message.hasOwnProperty('pageInfo')) {
						let error = $root.nosso.util.v1.PageInfo.verify(message.pageInfo);
						if (error) return 'pageInfo.' + error;
					}
					if (message.users != null && message.hasOwnProperty('users')) {
						if (!Array.isArray(message.users)) return 'users: array expected';
						for (let i = 0; i < message.users.length; ++i) {
							let error = $root.nosso.users.v1.User.verify(message.users[i]);
							if (error) return 'users.' + error;
						}
					}
					return null;
				};

				ListUsersResponse.fromObject = function fromObject(object) {
					if (object instanceof $root.nosso.users.v1.ListUsersResponse) return object;
					let message = new $root.nosso.users.v1.ListUsersResponse();
					if (object.pageInfo != null) {
						if (typeof object.pageInfo !== 'object')
							throw TypeError(
								'.nosso.users.v1.ListUsersResponse.pageInfo: object expected'
							);
						message.pageInfo = $root.nosso.util.v1.PageInfo.fromObject(object.pageInfo);
					}
					if (object.users) {
						if (!Array.isArray(object.users))
							throw TypeError(
								'.nosso.users.v1.ListUsersResponse.users: array expected'
							);
						message.users = [];
						for (let i = 0; i < object.users.length; ++i) {
							if (typeof object.users[i] !== 'object')
								throw TypeError(
									'.nosso.users.v1.ListUsersResponse.users: object expected'
								);
							message.users[i] = $root.nosso.users.v1.User.fromObject(
								object.users[i]
							);
						}
					}
					return message;
				};

				ListUsersResponse.toObject = function toObject(message, options) {
					if (!options) options = {};
					let object = {};
					if (options.arrays || options.defaults) object.users = [];
					if (options.defaults) object.pageInfo = null;
					if (message.pageInfo != null && message.hasOwnProperty('pageInfo'))
						object.pageInfo = $root.nosso.util.v1.PageInfo.toObject(
							message.pageInfo,
							options
						);
					if (message.users && message.users.length) {
						object.users = [];
						for (let j = 0; j < message.users.length; ++j)
							object.users[j] = $root.nosso.users.v1.User.toObject(
								message.users[j],
								options
							);
					}
					return object;
				};

				ListUsersResponse.prototype.toJSON = function toJSON() {
					return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
				};

				return ListUsersResponse;
			})();

			v1.User = (function () {
				function User(properties) {
					this.roles = [];
					if (properties)
						for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
							if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
				}

				User.prototype.id = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
				User.prototype.email = '';
				User.prototype.displayName = '';
				User.prototype.domainId = 0;
				User.prototype.roles = $util.emptyArray;
				User.prototype.createdAt = null;
				User.prototype.updatedAt = null;

				User.create = function create(properties) {
					return new User(properties);
				};

				User.encode = function encode(message, writer) {
					if (!writer) writer = $Writer.create();
					if (message.id != null && Object.hasOwnProperty.call(message, 'id'))
						writer.uint32(8).int64(message.id);
					if (message.email != null && Object.hasOwnProperty.call(message, 'email'))
						writer.uint32(18).string(message.email);
					if (
						message.displayName != null &&
						Object.hasOwnProperty.call(message, 'displayName')
					)
						writer.uint32(26).string(message.displayName);
					if (message.domainId != null && Object.hasOwnProperty.call(message, 'domainId'))
						writer.uint32(32).int32(message.domainId);
					if (message.roles != null && message.roles.length)
						for (let i = 0; i < message.roles.length; ++i)
							writer.uint32(42).string(message.roles[i]);
					if (
						message.createdAt != null &&
						Object.hasOwnProperty.call(message, 'createdAt')
					)
						$root.google.protobuf.Timestamp.encode(
							message.createdAt,
							writer.uint32(50).fork()
						).ldelim();
					if (
						message.updatedAt != null &&
						Object.hasOwnProperty.call(message, 'updatedAt')
					)
						$root.google.protobuf.Timestamp.encode(
							message.updatedAt,
							writer.uint32(58).fork()
						).ldelim();
					return writer;
				};

				User.encodeDelimited = function encodeDelimited(message, writer) {
					return this.encode(message, writer).ldelim();
				};

				User.decode = function decode(reader, length) {
					if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
					let end = length === undefined ? reader.len : reader.pos + length,
						message = new $root.nosso.users.v1.User();
					while (reader.pos < end) {
						let tag = reader.uint32();
						switch (tag >>> 3) {
							case 1:
								message.id = reader.int64();
								break;
							case 2:
								message.email = reader.string();
								break;
							case 3:
								message.displayName = reader.string();
								break;
							case 4:
								message.domainId = reader.int32();
								break;
							case 5:
								if (!(message.roles && message.roles.length)) message.roles = [];
								message.roles.push(reader.string());
								break;
							case 6:
								message.createdAt = $root.google.protobuf.Timestamp.decode(
									reader,
									reader.uint32()
								);
								break;
							case 7:
								message.updatedAt = $root.google.protobuf.Timestamp.decode(
									reader,
									reader.uint32()
								);
								break;
							default:
								reader.skipType(tag & 7);
								break;
						}
					}
					return message;
				};

				User.decodeDelimited = function decodeDelimited(reader) {
					if (!(reader instanceof $Reader)) reader = new $Reader(reader);
					return this.decode(reader, reader.uint32());
				};

				User.verify = function verify(message) {
					if (typeof message !== 'object' || message === null) return 'object expected';
					if (message.id != null && message.hasOwnProperty('id'))
						if (
							!$util.isInteger(message.id) &&
							!(
								message.id &&
								$util.isInteger(message.id.low) &&
								$util.isInteger(message.id.high)
							)
						)
							return 'id: integer|Long expected';
					if (message.email != null && message.hasOwnProperty('email'))
						if (!$util.isString(message.email)) return 'email: string expected';
					if (message.displayName != null && message.hasOwnProperty('displayName'))
						if (!$util.isString(message.displayName))
							return 'displayName: string expected';
					if (message.domainId != null && message.hasOwnProperty('domainId'))
						if (!$util.isInteger(message.domainId)) return 'domainId: integer expected';
					if (message.roles != null && message.hasOwnProperty('roles')) {
						if (!Array.isArray(message.roles)) return 'roles: array expected';
						for (let i = 0; i < message.roles.length; ++i)
							if (!$util.isString(message.roles[i]))
								return 'roles: string[] expected';
					}
					if (message.createdAt != null && message.hasOwnProperty('createdAt')) {
						let error = $root.google.protobuf.Timestamp.verify(message.createdAt);
						if (error) return 'createdAt.' + error;
					}
					if (message.updatedAt != null && message.hasOwnProperty('updatedAt')) {
						let error = $root.google.protobuf.Timestamp.verify(message.updatedAt);
						if (error) return 'updatedAt.' + error;
					}
					return null;
				};

				User.fromObject = function fromObject(object) {
					if (object instanceof $root.nosso.users.v1.User) return object;
					let message = new $root.nosso.users.v1.User();
					if (object.id != null)
						if ($util.Long)
							(message.id = $util.Long.fromValue(object.id)).unsigned = false;
						else if (typeof object.id === 'string')
							message.id = parseInt(object.id, 10);
						else if (typeof object.id === 'number') message.id = object.id;
						else if (typeof object.id === 'object')
							message.id = new $util.LongBits(
								object.id.low >>> 0,
								object.id.high >>> 0
							).toNumber();
					if (object.email != null) message.email = String(object.email);
					if (object.displayName != null)
						message.displayName = String(object.displayName);
					if (object.domainId != null) message.domainId = object.domainId | 0;
					if (object.roles) {
						if (!Array.isArray(object.roles))
							throw TypeError('.nosso.users.v1.User.roles: array expected');
						message.roles = [];
						for (let i = 0; i < object.roles.length; ++i)
							message.roles[i] = String(object.roles[i]);
					}
					if (object.createdAt != null) {
						if (typeof object.createdAt !== 'object')
							throw TypeError('.nosso.users.v1.User.createdAt: object expected');
						message.createdAt = $root.google.protobuf.Timestamp.fromObject(
							object.createdAt
						);
					}
					if (object.updatedAt != null) {
						if (typeof object.updatedAt !== 'object')
							throw TypeError('.nosso.users.v1.User.updatedAt: object expected');
						message.updatedAt = $root.google.protobuf.Timestamp.fromObject(
							object.updatedAt
						);
					}
					return message;
				};

				User.toObject = function toObject(message, options) {
					if (!options) options = {};
					let object = {};
					if (options.arrays || options.defaults) object.roles = [];
					if (options.defaults) {
						if ($util.Long) {
							let long = new $util.Long(0, 0, false);
							object.id =
								options.longs === String
									? long.toString()
									: options.longs === Number
									? long.toNumber()
									: long;
						} else object.id = options.longs === String ? '0' : 0;
						object.email = '';
						object.displayName = '';
						object.domainId = 0;
						object.createdAt = null;
						object.updatedAt = null;
					}
					if (message.id != null && message.hasOwnProperty('id'))
						if (typeof message.id === 'number')
							object.id = options.longs === String ? String(message.id) : message.id;
						else
							object.id =
								options.longs === String
									? $util.Long.prototype.toString.call(message.id)
									: options.longs === Number
									? new $util.LongBits(
											message.id.low >>> 0,
											message.id.high >>> 0
									  ).toNumber()
									: message.id;
					if (message.email != null && message.hasOwnProperty('email'))
						object.email = message.email;
					if (message.displayName != null && message.hasOwnProperty('displayName'))
						object.displayName = message.displayName;
					if (message.domainId != null && message.hasOwnProperty('domainId'))
						object.domainId = message.domainId;
					if (message.roles && message.roles.length) {
						object.roles = [];
						for (let j = 0; j < message.roles.length; ++j)
							object.roles[j] = message.roles[j];
					}
					if (message.createdAt != null && message.hasOwnProperty('createdAt'))
						object.createdAt = $root.google.protobuf.Timestamp.toObject(
							message.createdAt,
							options
						);
					if (message.updatedAt != null && message.hasOwnProperty('updatedAt'))
						object.updatedAt = $root.google.protobuf.Timestamp.toObject(
							message.updatedAt,
							options
						);
					return object;
				};

				User.prototype.toJSON = function toJSON() {
					return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
				};

				return User;
			})();

			return v1;
		})();

		return users;
	})();

	nosso.util = (function () {
		const util = {};

		util.v1 = (function () {
			const v1 = {};

			v1.PageRequest = (function () {
				function PageRequest(properties) {
					if (properties)
						for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
							if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
				}

				PageRequest.prototype.page = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
				PageRequest.prototype.size = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;

				PageRequest.create = function create(properties) {
					return new PageRequest(properties);
				};

				PageRequest.encode = function encode(message, writer) {
					if (!writer) writer = $Writer.create();
					if (message.page != null && Object.hasOwnProperty.call(message, 'page'))
						writer.uint32(8).int64(message.page);
					if (message.size != null && Object.hasOwnProperty.call(message, 'size'))
						writer.uint32(16).int64(message.size);
					return writer;
				};

				PageRequest.encodeDelimited = function encodeDelimited(message, writer) {
					return this.encode(message, writer).ldelim();
				};

				PageRequest.decode = function decode(reader, length) {
					if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
					let end = length === undefined ? reader.len : reader.pos + length,
						message = new $root.nosso.util.v1.PageRequest();
					while (reader.pos < end) {
						let tag = reader.uint32();
						switch (tag >>> 3) {
							case 1:
								message.page = reader.int64();
								break;
							case 2:
								message.size = reader.int64();
								break;
							default:
								reader.skipType(tag & 7);
								break;
						}
					}
					return message;
				};

				PageRequest.decodeDelimited = function decodeDelimited(reader) {
					if (!(reader instanceof $Reader)) reader = new $Reader(reader);
					return this.decode(reader, reader.uint32());
				};

				PageRequest.verify = function verify(message) {
					if (typeof message !== 'object' || message === null) return 'object expected';
					if (message.page != null && message.hasOwnProperty('page'))
						if (
							!$util.isInteger(message.page) &&
							!(
								message.page &&
								$util.isInteger(message.page.low) &&
								$util.isInteger(message.page.high)
							)
						)
							return 'page: integer|Long expected';
					if (message.size != null && message.hasOwnProperty('size'))
						if (
							!$util.isInteger(message.size) &&
							!(
								message.size &&
								$util.isInteger(message.size.low) &&
								$util.isInteger(message.size.high)
							)
						)
							return 'size: integer|Long expected';
					return null;
				};

				PageRequest.fromObject = function fromObject(object) {
					if (object instanceof $root.nosso.util.v1.PageRequest) return object;
					let message = new $root.nosso.util.v1.PageRequest();
					if (object.page != null)
						if ($util.Long)
							(message.page = $util.Long.fromValue(object.page)).unsigned = false;
						else if (typeof object.page === 'string')
							message.page = parseInt(object.page, 10);
						else if (typeof object.page === 'number') message.page = object.page;
						else if (typeof object.page === 'object')
							message.page = new $util.LongBits(
								object.page.low >>> 0,
								object.page.high >>> 0
							).toNumber();
					if (object.size != null)
						if ($util.Long)
							(message.size = $util.Long.fromValue(object.size)).unsigned = false;
						else if (typeof object.size === 'string')
							message.size = parseInt(object.size, 10);
						else if (typeof object.size === 'number') message.size = object.size;
						else if (typeof object.size === 'object')
							message.size = new $util.LongBits(
								object.size.low >>> 0,
								object.size.high >>> 0
							).toNumber();
					return message;
				};

				PageRequest.toObject = function toObject(message, options) {
					if (!options) options = {};
					let object = {};
					if (options.defaults) {
						if ($util.Long) {
							let long = new $util.Long(0, 0, false);
							object.page =
								options.longs === String
									? long.toString()
									: options.longs === Number
									? long.toNumber()
									: long;
						} else object.page = options.longs === String ? '0' : 0;
						if ($util.Long) {
							let long = new $util.Long(0, 0, false);
							object.size =
								options.longs === String
									? long.toString()
									: options.longs === Number
									? long.toNumber()
									: long;
						} else object.size = options.longs === String ? '0' : 0;
					}
					if (message.page != null && message.hasOwnProperty('page'))
						if (typeof message.page === 'number')
							object.page =
								options.longs === String ? String(message.page) : message.page;
						else
							object.page =
								options.longs === String
									? $util.Long.prototype.toString.call(message.page)
									: options.longs === Number
									? new $util.LongBits(
											message.page.low >>> 0,
											message.page.high >>> 0
									  ).toNumber()
									: message.page;
					if (message.size != null && message.hasOwnProperty('size'))
						if (typeof message.size === 'number')
							object.size =
								options.longs === String ? String(message.size) : message.size;
						else
							object.size =
								options.longs === String
									? $util.Long.prototype.toString.call(message.size)
									: options.longs === Number
									? new $util.LongBits(
											message.size.low >>> 0,
											message.size.high >>> 0
									  ).toNumber()
									: message.size;
					return object;
				};

				PageRequest.prototype.toJSON = function toJSON() {
					return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
				};

				return PageRequest;
			})();

			v1.PageInfo = (function () {
				function PageInfo(properties) {
					if (properties)
						for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
							if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
				}

				PageInfo.prototype.total = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
				PageInfo.prototype.nextPage = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
				PageInfo.prototype.prevPage = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;

				PageInfo.create = function create(properties) {
					return new PageInfo(properties);
				};

				PageInfo.encode = function encode(message, writer) {
					if (!writer) writer = $Writer.create();
					if (message.total != null && Object.hasOwnProperty.call(message, 'total'))
						writer.uint32(8).int64(message.total);
					if (message.nextPage != null && Object.hasOwnProperty.call(message, 'nextPage'))
						writer.uint32(16).int64(message.nextPage);
					if (message.prevPage != null && Object.hasOwnProperty.call(message, 'prevPage'))
						writer.uint32(24).int64(message.prevPage);
					return writer;
				};

				PageInfo.encodeDelimited = function encodeDelimited(message, writer) {
					return this.encode(message, writer).ldelim();
				};

				PageInfo.decode = function decode(reader, length) {
					if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
					let end = length === undefined ? reader.len : reader.pos + length,
						message = new $root.nosso.util.v1.PageInfo();
					while (reader.pos < end) {
						let tag = reader.uint32();
						switch (tag >>> 3) {
							case 1:
								message.total = reader.int64();
								break;
							case 2:
								message.nextPage = reader.int64();
								break;
							case 3:
								message.prevPage = reader.int64();
								break;
							default:
								reader.skipType(tag & 7);
								break;
						}
					}
					return message;
				};

				PageInfo.decodeDelimited = function decodeDelimited(reader) {
					if (!(reader instanceof $Reader)) reader = new $Reader(reader);
					return this.decode(reader, reader.uint32());
				};

				PageInfo.verify = function verify(message) {
					if (typeof message !== 'object' || message === null) return 'object expected';
					if (message.total != null && message.hasOwnProperty('total'))
						if (
							!$util.isInteger(message.total) &&
							!(
								message.total &&
								$util.isInteger(message.total.low) &&
								$util.isInteger(message.total.high)
							)
						)
							return 'total: integer|Long expected';
					if (message.nextPage != null && message.hasOwnProperty('nextPage'))
						if (
							!$util.isInteger(message.nextPage) &&
							!(
								message.nextPage &&
								$util.isInteger(message.nextPage.low) &&
								$util.isInteger(message.nextPage.high)
							)
						)
							return 'nextPage: integer|Long expected';
					if (message.prevPage != null && message.hasOwnProperty('prevPage'))
						if (
							!$util.isInteger(message.prevPage) &&
							!(
								message.prevPage &&
								$util.isInteger(message.prevPage.low) &&
								$util.isInteger(message.prevPage.high)
							)
						)
							return 'prevPage: integer|Long expected';
					return null;
				};

				PageInfo.fromObject = function fromObject(object) {
					if (object instanceof $root.nosso.util.v1.PageInfo) return object;
					let message = new $root.nosso.util.v1.PageInfo();
					if (object.total != null)
						if ($util.Long)
							(message.total = $util.Long.fromValue(object.total)).unsigned = false;
						else if (typeof object.total === 'string')
							message.total = parseInt(object.total, 10);
						else if (typeof object.total === 'number') message.total = object.total;
						else if (typeof object.total === 'object')
							message.total = new $util.LongBits(
								object.total.low >>> 0,
								object.total.high >>> 0
							).toNumber();
					if (object.nextPage != null)
						if ($util.Long)
							(message.nextPage = $util.Long.fromValue(
								object.nextPage
							)).unsigned = false;
						else if (typeof object.nextPage === 'string')
							message.nextPage = parseInt(object.nextPage, 10);
						else if (typeof object.nextPage === 'number')
							message.nextPage = object.nextPage;
						else if (typeof object.nextPage === 'object')
							message.nextPage = new $util.LongBits(
								object.nextPage.low >>> 0,
								object.nextPage.high >>> 0
							).toNumber();
					if (object.prevPage != null)
						if ($util.Long)
							(message.prevPage = $util.Long.fromValue(
								object.prevPage
							)).unsigned = false;
						else if (typeof object.prevPage === 'string')
							message.prevPage = parseInt(object.prevPage, 10);
						else if (typeof object.prevPage === 'number')
							message.prevPage = object.prevPage;
						else if (typeof object.prevPage === 'object')
							message.prevPage = new $util.LongBits(
								object.prevPage.low >>> 0,
								object.prevPage.high >>> 0
							).toNumber();
					return message;
				};

				PageInfo.toObject = function toObject(message, options) {
					if (!options) options = {};
					let object = {};
					if (options.defaults) {
						if ($util.Long) {
							let long = new $util.Long(0, 0, false);
							object.total =
								options.longs === String
									? long.toString()
									: options.longs === Number
									? long.toNumber()
									: long;
						} else object.total = options.longs === String ? '0' : 0;
						if ($util.Long) {
							let long = new $util.Long(0, 0, false);
							object.nextPage =
								options.longs === String
									? long.toString()
									: options.longs === Number
									? long.toNumber()
									: long;
						} else object.nextPage = options.longs === String ? '0' : 0;
						if ($util.Long) {
							let long = new $util.Long(0, 0, false);
							object.prevPage =
								options.longs === String
									? long.toString()
									: options.longs === Number
									? long.toNumber()
									: long;
						} else object.prevPage = options.longs === String ? '0' : 0;
					}
					if (message.total != null && message.hasOwnProperty('total'))
						if (typeof message.total === 'number')
							object.total =
								options.longs === String ? String(message.total) : message.total;
						else
							object.total =
								options.longs === String
									? $util.Long.prototype.toString.call(message.total)
									: options.longs === Number
									? new $util.LongBits(
											message.total.low >>> 0,
											message.total.high >>> 0
									  ).toNumber()
									: message.total;
					if (message.nextPage != null && message.hasOwnProperty('nextPage'))
						if (typeof message.nextPage === 'number')
							object.nextPage =
								options.longs === String
									? String(message.nextPage)
									: message.nextPage;
						else
							object.nextPage =
								options.longs === String
									? $util.Long.prototype.toString.call(message.nextPage)
									: options.longs === Number
									? new $util.LongBits(
											message.nextPage.low >>> 0,
											message.nextPage.high >>> 0
									  ).toNumber()
									: message.nextPage;
					if (message.prevPage != null && message.hasOwnProperty('prevPage'))
						if (typeof message.prevPage === 'number')
							object.prevPage =
								options.longs === String
									? String(message.prevPage)
									: message.prevPage;
						else
							object.prevPage =
								options.longs === String
									? $util.Long.prototype.toString.call(message.prevPage)
									: options.longs === Number
									? new $util.LongBits(
											message.prevPage.low >>> 0,
											message.prevPage.high >>> 0
									  ).toNumber()
									: message.prevPage;
					return object;
				};

				PageInfo.prototype.toJSON = function toJSON() {
					return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
				};

				return PageInfo;
			})();

			return v1;
		})();

		return util;
	})();

	return nosso;
})());

export const google = ($root.google = (() => {
	const google = {};

	google.protobuf = (function () {
		const protobuf = {};

		protobuf.Timestamp = (function () {
			function Timestamp(properties) {
				if (properties)
					for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
						if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
			}

			Timestamp.prototype.seconds = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
			Timestamp.prototype.nanos = 0;

			Timestamp.create = function create(properties) {
				return new Timestamp(properties);
			};

			Timestamp.encode = function encode(message, writer) {
				if (!writer) writer = $Writer.create();
				if (message.seconds != null && Object.hasOwnProperty.call(message, 'seconds'))
					writer.uint32(8).int64(message.seconds);
				if (message.nanos != null && Object.hasOwnProperty.call(message, 'nanos'))
					writer.uint32(16).int32(message.nanos);
				return writer;
			};

			Timestamp.encodeDelimited = function encodeDelimited(message, writer) {
				return this.encode(message, writer).ldelim();
			};

			Timestamp.decode = function decode(reader, length) {
				if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
				let end = length === undefined ? reader.len : reader.pos + length,
					message = new $root.google.protobuf.Timestamp();
				while (reader.pos < end) {
					let tag = reader.uint32();
					switch (tag >>> 3) {
						case 1:
							message.seconds = reader.int64();
							break;
						case 2:
							message.nanos = reader.int32();
							break;
						default:
							reader.skipType(tag & 7);
							break;
					}
				}
				return message;
			};

			Timestamp.decodeDelimited = function decodeDelimited(reader) {
				if (!(reader instanceof $Reader)) reader = new $Reader(reader);
				return this.decode(reader, reader.uint32());
			};

			Timestamp.verify = function verify(message) {
				if (typeof message !== 'object' || message === null) return 'object expected';
				if (message.seconds != null && message.hasOwnProperty('seconds'))
					if (
						!$util.isInteger(message.seconds) &&
						!(
							message.seconds &&
							$util.isInteger(message.seconds.low) &&
							$util.isInteger(message.seconds.high)
						)
					)
						return 'seconds: integer|Long expected';
				if (message.nanos != null && message.hasOwnProperty('nanos'))
					if (!$util.isInteger(message.nanos)) return 'nanos: integer expected';
				return null;
			};

			Timestamp.fromObject = function fromObject(object) {
				if (object instanceof $root.google.protobuf.Timestamp) return object;
				let message = new $root.google.protobuf.Timestamp();
				if (object.seconds != null)
					if ($util.Long)
						(message.seconds = $util.Long.fromValue(object.seconds)).unsigned = false;
					else if (typeof object.seconds === 'string')
						message.seconds = parseInt(object.seconds, 10);
					else if (typeof object.seconds === 'number') message.seconds = object.seconds;
					else if (typeof object.seconds === 'object')
						message.seconds = new $util.LongBits(
							object.seconds.low >>> 0,
							object.seconds.high >>> 0
						).toNumber();
				if (object.nanos != null) message.nanos = object.nanos | 0;
				return message;
			};

			Timestamp.toObject = function toObject(message, options) {
				if (!options) options = {};
				let object = {};
				if (options.defaults) {
					if ($util.Long) {
						let long = new $util.Long(0, 0, false);
						object.seconds =
							options.longs === String
								? long.toString()
								: options.longs === Number
								? long.toNumber()
								: long;
					} else object.seconds = options.longs === String ? '0' : 0;
					object.nanos = 0;
				}
				if (message.seconds != null && message.hasOwnProperty('seconds'))
					if (typeof message.seconds === 'number')
						object.seconds =
							options.longs === String ? String(message.seconds) : message.seconds;
					else
						object.seconds =
							options.longs === String
								? $util.Long.prototype.toString.call(message.seconds)
								: options.longs === Number
								? new $util.LongBits(
										message.seconds.low >>> 0,
										message.seconds.high >>> 0
								  ).toNumber()
								: message.seconds;
				if (message.nanos != null && message.hasOwnProperty('nanos'))
					object.nanos = message.nanos;
				return object;
			};

			Timestamp.prototype.toJSON = function toJSON() {
				return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
			};

			return Timestamp;
		})();

		return protobuf;
	})();

	return google;
})());
