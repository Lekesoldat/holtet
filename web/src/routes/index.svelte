<script>
	import { skills } from '@lib/data/skills';
	import bitmoji from '@lib/assets/hi.png';
	import DevIcon from '$lib/components/dev-icon.svelte';
	import Timeline from '$lib/components/timeline/timeline.svelte';
	import { experiences as data } from '$lib/data/experience';
</script>

<svelte:head>
	<title>holtet.me</title>
</svelte:head>

<!-- Me -->
<section class="flex flex-col lg:flex-row items-center justify-between">
	<div>
		<h1 class="text-2xl lg:text-4xl mb-6">👋, I'm Magnus!</h1>
		<p class="text-md lg:text-lg">
			I'm a software engineering student and an aspiring full stack developer who loves learning,
			snowboarding, and other adrenaline-rushing activities. I like working with people, and enjoy <span
				class="font-bold">exciting projects</span
			> with cutting edge technologies!
		</p>
	</div>
	<img class="hidden lg:block w-56 ml-16" src={bitmoji} alt="Movie" />
</section>

<!-- Skills and Tools -->
<section id="skills-and-tools" class="mt-12 lg:mt-28 scroll-mt-36">
	<h1 class="text-2xl lg:text-4xl mb-6">Skills & Tools</h1>
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
	<p class="text-md lg:text-lg">Timeline component is created, - date is yet to create.</p>
	<!-- <Timeline {data} /> -->
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
