<script lang="ts">
	import { page } from '$app/stores';
	export let href: string;
</script>

<a
	sveltekit:prefetch
	{href}
	class="uppercase lg:text-lg styled-link"
	class:active-link={$page.url.pathname.includes(href)}><slot /></a
>
