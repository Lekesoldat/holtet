<script>
	import Footer from '@lib/components/layout/Footer.svelte';
	import Nav from '@lib/components/layout/Nav.svelte';
	import '../app.postcss';
</script>

<svelte:head>
	<!-- Favicon -->
	<link rel="icon" href="./favicon.png" />

	<!-- Poppins font -->
	<link href="https://fonts.googleapis.com/css?family=Poppins:300,400,700,800" rel="stylesheet" />

	<!-- DevIcons -->
	<link
		rel="stylesheet"
		href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"
	/>
</svelte:head>

<main class="container mx-auto max-w-screen-lg py-8 px-10 lg:py-12 lg:px-16">
	<Nav />
	<slot />
	<Footer />
</main>
