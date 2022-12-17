import { dev } from '$app/environment';
import type { Handle, HandleFetch, HandleServerError } from '@sveltejs/kit';

export const handle = (async ({ event, resolve }) => {
	const response = await resolve(event);
	return response;
}) satisfies Handle;

export const handleFetch = (async ({ request, fetch }) => {
	// if (request.url.startsWith('https://api.yourapp.com/')) {
	// 	request = new Request(
	// 		request.url.replace('https://api.yourapp.com/', 'http://localhost:9999/'),
	// 		request
	// 	);
	// }
	return fetch(request);
}) satisfies HandleFetch;

export const handleError = (({ error, event }) => {
	if (dev) console.log(error);
	const errorId = crypto.randomUUID();
	// example integration with https://sentry.io/
	//Sentry.captureException(error, { event, errorId });
	return {
		message: 'Whoops!',
		errorId
	};
}) satisfies HandleServerError;
