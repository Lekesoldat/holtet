<script lang="ts">
	import Link from '../Link.svelte';
	const routes = [
		{
			link: '/#',
			text: 'home'
		},

		{
			link: '/#toolbox',
			text: 'toolbox'
		},
		{
			link: '/#work',
			text: 'work'
		},
		{ link: '/#contact', text: 'contact' },
		{ link: '/uses', text: 'uses' },
		{ link: '/blog', text: 'blog' }
	];
</script>

<nav class="navbar justify-center flex-col mb-16 bg-base-100 lg:sticky lg:top-0 lg:z-50">
	<h1 class="text-2xl lg:text-5xl font-bold mb-5">
		<a href="/">Magnus <span class="text-primary inline-block -rotate-12">L.</span> Holtet</a>
	</h1>

	<ul class="w-full flex flex-wrap justify-around">
		{#each routes as route}
			<li><Link href={route.link}>{route.text}</Link></li>
		{/each}
	</ul>
</nav>
