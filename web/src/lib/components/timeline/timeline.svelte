<script lang="ts">
	import type { TimelineEntryData } from '$lib/types/timeline';
	import { ascendngDateSort } from './sorting-util';
	import TimelineEntry from './TimelineEntry.svelte';

	export let data: TimelineEntryData[];

	$: sortedData = data.sort(ascendngDateSort).reverse();
</script>

<ol class="ml-4 relative border-l border-gray-200 dark:border-gray-700">
	{#each sortedData as entry}
		<TimelineEntry {entry} />
	{/each}
</ol>
