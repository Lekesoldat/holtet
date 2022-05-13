<script lang="ts">
	import { formatDateString } from '@lib/utils';
	import type { Experience } from '@lib/types/Experience';

	export let experience: Experience;
</script>

<div class="pb-6">
	<!-- Title -->
	<h2>{experience.title}</h2>

	<!-- Employer -->
	<div>{experience.employer}</div>

	<!-- Period -->
	<div>
		{formatDateString(experience.fromDate)} - {experience.toDate
			? formatDateString(experience.toDate)
			: 'nå'}
	</div>

	<!-- Tags -->
	<div class="card-actions">
		{#each experience.tags as { name, iconName }}
			<div class="flex flex-row justify-center items-center py-3">
				<img class="h-4 mr-2" src={`/icons/${iconName}`} alt={name} />
				{name}
			</div>
		{/each}
	</div>
	<!-- Description -->
	<p>{experience.description}</p>
</div>
