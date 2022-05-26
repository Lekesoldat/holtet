<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';
	import { fetchPosts, type PostPreview } from '@api/all-posts';
	import { format } from 'date-fns';

	export const load: Load = async ({ fetch }) => {
		const res = await fetchPosts(fetch);
		if (res.ok) {
			return {
				props: {
					allPosts: res.data
				}
			};
		}

		return {
			status: res.status,
			error: new Error('Could not perform all posts query.')
		};
	};
</script>

<script lang="ts">
	export let allPosts: PostPreview[];
</script>

<section class="my-10 lg:my-26">
	Some day I might start posting what I've learnt and find interesting.
</section>

<section>
	{#each allPosts as post}
		<a sveltekit:prefetch href={`blog/${post.slug}`}>
			<div class="flex flex-col w-full mb-10">
				<!-- Date and reading time -->
				<div class="flex justify-between text-gray-400 text-sm lg:text-md">
					<div>{format(new Date(post._createdAt), 'yyyy/MM/dd')}</div>
					<div>🕙 {post.estimatedReadingTime} min read</div>
				</div>

				<!-- Title -->
				<h1 class="text-lg font-bold lg:text-xl my-2">{post.title}</h1>

				<!-- Abstract -->
				<p class="text-sm lg:text-lg">
					{post.abstract}
				</p>
			</div>
		</a>
	{/each}
</section>
