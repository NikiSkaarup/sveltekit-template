import { dev } from '$app/environment';
import type { HandleClientError } from '@sveltejs/kit';

export const handleError = (({ error, event }) => {
	if (dev) console.log(error);
	const errorId = crypto.randomUUID();
	// example integration with https://sentry.io/
	//Sentry.captureException(error, { event, errorId });
	return {
		message: 'Whoops!',
		errorId
	};
}) satisfies HandleClientError;
