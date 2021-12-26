const path = require('path');
const fs = require('fs');
const pbjs = require('protobufjs/cli/pbjs');
const pbts = require('protobufjs/cli/pbts');

const protobuf_path = path.join(__dirname, '../../protobufs/**/*.proto');

pbjs.main(
	['--target', 'static', '--es6', '--wrap closure', '--no-comments', protobuf_path],
	function (err, output) {
		if (err) throw err;

		const append = `
import * as protobufsjs from 'protobufjs';

// @ts-ignore
const $protobuf = protobufsjs.default;
$protobuf.roots['default'] = new $protobuf.Root();
`;

		fs.writeFileSync(path.join(__dirname, '../src/lib/protos.js'), append + output);
	}
);

pbjs.main(['--target', 'static-module', protobuf_path], function (err, output) {
	if (err) throw err;

	fs.writeFileSync('/tmp/tmpgenerated.js', output);

	const target = path.join(__dirname, '../src/lib/protos.d.ts');

	pbts.main(['-o', target, '/tmp/tmpgenerated.js'], function (err, tsOutput) {
		if (err) throw err;
	});
});
