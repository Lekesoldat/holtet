<script lang="ts">
	import { page } from '$app/stores';
	export let href: string;

	console.log($page.url);
</script>

<a {href} class="uppercase lg:text-lg styled-link" class:active-link={$page.url.pathname === href}
	><slot /></a
>
