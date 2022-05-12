<script>
	import Footer from '@lib/components/layout/Footer.svelte';
	import Nav from '@lib/components/layout/Nav.svelte';
	import '../app.postcss';
</script>

<svelte:head>
	<link href="https://fonts.googleapis.com/css?family=Poppins:300,400,700,800" rel="stylesheet" />
</svelte:head>

<main class="container mx-auto max-w-screen-lg py-12 px-16">
	<Nav />
	<slot />
	<Footer />
</main>
