import { env } from '$env/dynamic/private';
import Hashids from 'hashids';

const hashidsSalt = env.HASHIDS_SALT;

const hashidsMinLength =
	env.HASHIDS_MIN_LENGTH !== undefined ? Number(env.HASHIDS_MIN_LENGTH) : undefined;

export const hashids = new Hashids(hashidsSalt, hashidsMinLength);

export default { hashids };
