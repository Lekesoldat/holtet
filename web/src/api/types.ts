import type { Fetch, Params } from '$lib/sanity';

interface QueryResult<T> {
	data: T;
	ok: boolean;
	status: number;
}

export type SanityDataFetcher<T> = (fetch: Fetch, params?: Params) => Promise<QueryResult<T>>;
