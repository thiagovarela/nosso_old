export function objectDiff(
	original: Record<string, any>,
	dirty: Record<string, any>
): Record<string, any> {
	const keys1 = Object.keys(original);
	const keys2 = Object.keys(dirty);
	if (keys1.length !== keys2.length || keys1 !== keys2) {
		throw Error('cant compare objects with different keys');
	}
	const changes = {};
	for (const key of keys1) {
		if (original[key] !== dirty[key]) {
			changes[key] = dirty[key];
		}
	}
	return changes;
}

/**
 * Helper function to remove the jwt cookie using http response header.
 */
export function unsetAuthCookie() {
	return {
		Location: '/',
		'set-cookie': 'jwt=deleted; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT'
	};
}
