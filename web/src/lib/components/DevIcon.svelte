<script lang="ts">
	export let text: string;
	export let iconName: string;
</script>

<div class="w-5/12 md:w-3/12 lg:w-2/12">
	<i class={`${iconName} text-6xl`} />
	<p class="text-lg">{text}</p>
</div>
