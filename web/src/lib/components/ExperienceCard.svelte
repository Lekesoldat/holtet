<script lang="ts">
	import { formatDateString } from '@lib/utils';
	import type { Experience } from '@lib/types/Experience';

	export let experience: Experience;
</script>

<div class="card card-normal bg-base-200 shadow-xl h-full">
	<div class="card-body">
		<!-- Title -->
		<h2 class="card-title text-primary-focus">{experience.title}</h2>

		<!-- Employer -->
		<div class="text-base text-secondary-content">{experience.employer}</div>

		<!-- Period -->
		<div class="text-neutral">
			{formatDateString(experience.fromDate)} - {experience.toDate
				? formatDateString(experience.toDate)
				: 'nå'}
		</div>

		<!-- Description -->
		<p>{experience.description}</p>

		<!-- Tags -->
		<div class="card-actions">
			{#each experience.tags as { name, iconName }}
				<div class="badge badge-md py-3 bg-neutral">
					<img class="h-4 mr-2" src={`/icons/${iconName}`} alt={name} />
					{name}
				</div>
			{/each}
		</div>
	</div>
</div>
