import { buildFetchUrl } from '@lib/sanity';
import groq from 'groq';
import type { SanityDataFetcher } from './types';

export interface PostPreview {
	_createdAt: string;
	title: string;
	slug: string;
	estimatedReadingTime: number;
}
const ALL_POSTS_QUERY = groq`
  *[_type == "posts" && !(_id in path("drafts.**"))] {
    _createdAt,
    title,
    "slug": slug.current,
    "estimatedReadingTime": round(length(pt::text(content)) / 5 / 180 )
  }
`;

export const fetchPosts: SanityDataFetcher<PostPreview[]> = async (fetch, params?) => {
	const url = buildFetchUrl(ALL_POSTS_QUERY, params);
	const res = await fetch(url);
	const data = await res.json();
	return {
		data: data.result,
		status: res.status,
		ok: res.ok
	};
};
