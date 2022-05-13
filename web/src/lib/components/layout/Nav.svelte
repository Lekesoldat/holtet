<script lang="ts">
	import Link from '../Link.svelte';
	const routes = [
		{
			link: '/blog',
			text: 'blog'
		},
		// {
		// 	link: '/projects',
		// 	text: 'projects'
		// },
		{
			link: '#skills-and-tools',
			text: 'skills & tools'
		},
		{
			link: '#work',
			text: 'work'
		},
		{ link: '/uses', text: 'uses' },
		{ link: '/contact', text: 'contact' }
	];
</script>

<nav class="navbar justify-center flex-col mb-16 bg-base-100 sticky top-0 z-50">
	<h1 class="text-2xl lg:text-5xl font-bold mb-5">
		<a href="/">Magnus <span class="text-primary">L.</span> Holtet</a>
	</h1>

	<ul class="w-full flex flex-wrap justify-around">
		{#each routes as route}
			<li><Link href={route.link}>{route.text}</Link></li>
		{/each}
	</ul>
</nav>
