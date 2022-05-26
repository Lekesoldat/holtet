<script context="module" lang="ts">
	import { fetchPostBySlug, type BlogPost } from '@api/post-by-slug';
	import CustomPortableText from '@components/portable-text/index.svelte';
	import type { Load } from '@sveltejs/kit';

	export const load: Load = async ({ fetch, params }) => {
		const res = await fetchPostBySlug(fetch, { slug: params.slug });
		if (res.ok) {
			return {
				props: {
					post: res.data
				}
			};
		}
		return {
			status: res.status,
			error: new Error('Could not post query')
		};
	};
</script>

<script lang="ts">
	export let post: BlogPost;
</script>

<section>
	<CustomPortableText value={post.content} />
</section>
