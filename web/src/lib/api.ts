import wretch from 'wretch';

/**
 * Single entrypoint for frontend to edge calls.
 */
export const api = wretch('/api').options({ credentials: 'include' });
