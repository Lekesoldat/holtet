<script>
	import DevIcon from '@lib/components/DevIcon.svelte';
	import { skills } from '@lib/data/skills';
</script>

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
	<img class="hidden md:block lg:block w-56 ml-16" src={'hi.png'} alt="Movie" />
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
	<p class="text-md lg:text-lg">Something about what im doing</p>
</section>
