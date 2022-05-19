import { buildFetchUrl } from '$lib/sanity';
import groq from 'groq';
import type { SanityDataFetcher } from './types';

export interface Work {
	employer: string;
	title: string;
	description: string;
	fromDate: string;
	toDate: string | null;
}

const ALL_WORK_QUERY = groq`*[_type == 'work']{employer, title, description, fromDate, toDate}`;

export const fetchWork: SanityDataFetcher<Work[]> = async (fetch, params?) => {
	const url = buildFetchUrl(ALL_WORK_QUERY, params);
	const res = await fetch(url);
	const data = await res.json();
	return {
		data: data.result,
		status: res.status,
		ok: res.ok
	};
};
