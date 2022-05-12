<script lang="ts">
	import Link from '../Link.svelte';
	const routes = [
		{
			link: '/blog',
			text: 'blog'
		},
		{
			link: '/projects',
			text: 'projects'
		},
		{
			link: '/resume',
			text: 'resume'
		},
		{ link: '/contact', text: 'contact' },
		{ link: '/uses', text: 'uses' }
	];
</script>

<nav class="navbar justify-center flex-col mb-16">
	<h1 class="text-2xl lg:text-5xl font-bold mb-5">
		<a href="/">Magnus <span class="text-primary">L.</span> Holtet</a>
	</h1>

	<ul class="w-full flex flex-wrap justify-around">
		{#each routes as route}
			<li><Link href={route.link}>{route.text}</Link></li>
		{/each}
	</ul>
</nav>
