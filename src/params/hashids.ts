import type { ParamMatcher } from '@sveltejs/kit';
import Hashids from 'hashids';

export const hashids = new Hashids();

export const match = ((param) => {
	return hashids.isValidId(param);
}) satisfies ParamMatcher;
