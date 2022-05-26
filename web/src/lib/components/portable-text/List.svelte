<script lang="ts">
	import type { ListComponentProps } from '@portabletext/svelte';
	export let portableText: ListComponentProps;
	$: ({ value } = portableText);
	$: ({ listItem } = value);
</script>

{#if listItem === 'number'}
	<ol class="list-decimal list-inside"><slot /></ol>
{:else}
	<ul class="list-disc list-inside"><slot /></ul>
{/if}
