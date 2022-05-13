<script lang="ts">
	import ExperienceCard from '@lib/components/ExperienceCard.svelte';
	import { experiences } from '@lib/data/experience';
</script>

<section class="">
	{#each experiences as experience}
		<ExperienceCard {experience} />
	{/each}
</section>
