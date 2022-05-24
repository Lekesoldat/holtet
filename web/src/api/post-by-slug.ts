import { buildFetchUrl } from '@lib/sanity';
import groq from 'groq';
import type { InputValue } from '@portabletext/svelte/ptTypes';
import type { SanityDataFetcher } from './types';

export interface BlogPost {
	title: string;
	tags: string[];
	content: InputValue;
	slug: string;
	estimatedReadingTime: number;
	_createdAt: string;
	_updatedAt: string;
}

const POST_BY_SLUG_QUERY = groq`
		*[_type == "posts" && slug.current == $slug && !(_id in path("drafts.**"))][0] {
			_createdAt,
			_updatedAt,
			title,
			"slug": slug.current,
			tags,
			content,
			"estimatedReadingTime": round(length(pt::text(content)) / 5 / 180 )
		}
	`;

export const fetchPostBySlug: SanityDataFetcher<BlogPost> = async (fetch, parameters?) => {
	const url = buildFetchUrl(POST_BY_SLUG_QUERY, parameters);
	const res = await fetch(url);
	const data = await res.json();
	return { data: data.result, status: res.status, ok: res.ok };
};
