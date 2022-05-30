<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';
	import { fetchWork, type Work } from '@api/work';

	export const load: Load = async ({ fetch }) => {
		const res = await fetchWork(fetch);
		if (res.ok) {
			return {
				props: {
					work: res.data
				}
			};
		}

		return {
			status: res.status,
			error: new Error('Could not perform work query.')
		};
	};
</script>

<script lang="ts">
	import DevIcon from '@lib/components/DevIcon.svelte';
	import bitmoji from '@lib/assets/hi.png';
	import { skills } from '@lib/data/skills';
	import Timeline from '@lib/components/timeline/Timeline.svelte';
	import ThemeSwitcher from '$lib/components/ThemeSwitcher.svelte';

	export let work: Work[];
</script>

<svelte:head>
	<title>holtet.me</title>
</svelte:head>

<ThemeSwitcher />

<!-- Me -->
<section class="flex flex-col lg:flex-row items-center justify-between">
	<div>
		<h1 class="text-2xl lg:text-4xl mb-6">👋, I'm Magnus!</h1>
		<p class="text-md lg:text-lg">
			I'm a software engineering student and an aspiring full stack developer who loves learning,
			snowboarding, and other adrenaline-fueled activities. I like working with people, and enjoy <span
				class="font-bold">exciting projects</span
			> with cutting edge technologies!
		</p>
	</div>
	<img class="hidden lg:block w-56 ml-16" src={bitmoji} alt="Movie" />
</section>

<!-- Toolbox -->
<section id="toolbox" class="mt-12 lg:mt-28 scroll-mt-36">
	<h1 class="text-2xl lg:text-4xl mb-6">Toolbox</h1>
	<p class="text-md lg:text-lg">
		The skills, tools and technologies I use to solve most challenges:
	</p>

	<!-- Icons -->
	<div class="flex flex-wrap text-center items-center justify-center gap-8 my-6">
		{#each skills as { text, iconName }}
			<DevIcon {text} {iconName} />
		{/each}
	</div>
</section>

<!-- Work -->
<section id="work" class="mt-12 lg:mt-28 scroll-mt-36">
	<h1 class="text-2xl lg:text-4xl mb-6">Work</h1>
	<Timeline data={work} />
</section>

<!-- Contact -->
<section id="contact" class="mt-12 lg:mt-28 scroll-mt-36">
	<h1 class="text-2xl lg:text-4xl mb-6">Contact</h1>
	<p class="text-md lg:text-lg">
		Will be a form here some day, - send a mail to <a
			class="active-link"
			href="mailto:hey@holtet.me">hey@holtet.me</a
		> as of now.
	</p>
</section>
