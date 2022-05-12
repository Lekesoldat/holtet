<script lang="ts">
	import ExperienceCard from '@components/ExperienceCard.svelte';
	import Me from '@components/Me.svelte';
	import { experiences, volunteering } from '@lib/experience';
</script>

<section class="mb-4">
	<Me />
</section>

<section class="grid grid-cols-2 gap-6 grid-flow-col">
	<div class="col-start-1 text-2xl font-medium mb-4">Experience</div>
	{#each experiences as experience}
		<div class="col-start-1">
			<ExperienceCard {experience} />
		</div>
	{/each}

	<div class="col-start-2 text-2xl font-medium mb-4">Volunteering</div>
	{#each volunteering as volunteer}
		<div class="col-start-2">
			<ExperienceCard experience={volunteer} />
		</div>
	{/each}
</section>
