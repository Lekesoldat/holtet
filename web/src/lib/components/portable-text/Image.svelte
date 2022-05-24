<script lang="ts">
	import { builder } from '$lib/sanity';
	import type { CustomBlockComponentProps } from '@portabletext/svelte';

	export let portableText: CustomBlockComponentProps<{
		alt: string;
		asset: { _ref: string; _type: string };
	}>;

	$: ({ value } = portableText);
</script>

<img src={builder.image(value.asset).url()} alt={value.alt} />
