<script>
	import Footer from '@lib/components/layout/footer.svelte';
	import Nav from '@lib/components/layout/nav.svelte';
	import '../app.postcss';
</script>

<svelte:head>
	<!-- Poppins font -->
	<link href="https://fonts.googleapis.com/css?family=Poppins:300,400,700,800" rel="stylesheet" />

	<!-- DevIcons -->
	<link
		rel="stylesheet"
		href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"
	/>
</svelte:head>

<main class="container mx-auto max-w-screen-lg py-12 px-16">
	<Nav />
	<slot />
	<Footer />
</main>
