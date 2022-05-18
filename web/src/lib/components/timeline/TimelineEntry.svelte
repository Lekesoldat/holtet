<script lang="ts">
	import { formatDateString } from '@lib/utils';
	import type { TimelineEntryData } from '@lib/types/timeline';

	export let entry: TimelineEntryData;
</script>

<!-- TimelineEntry -->
<li class="mb-10 ml-4">
	<!-- Dot -->
	<div class="absolute w-3 h-3 bg-primary rounded-full mt-1.5 -left-1.5 border border-primary" />

	<!-- Timestamp -->
	<time class="mb-1 text-sm font-normal leading-none text-gray-500">
		{#if entry.toDate}
			{formatDateString(entry.fromDate)} - {formatDateString(entry.toDate)}
		{:else}
			{formatDateString(entry.fromDate)} - now
		{/if}
	</time>

	<!-- Title -->
	<h3 class="text-lg font-semibold">
		{entry.title}
		{#if entry.employer}at {entry.employer}{/if}
	</h3>

	<!-- Description -->
	<p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">{entry.description}</p>
</li>
