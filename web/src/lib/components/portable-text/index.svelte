<script lang="ts">
	import Code from '@components/portable-text/Code.svelte';
	import Image from '@components/portable-text/Image.svelte';
	import Link from '@components/portable-text/Link.svelte';
	import { PortableText } from '@portabletext/svelte';
	import type { InputValue } from '@portabletext/svelte/ptTypes';

	export let value: InputValue;
</script>

<PortableText
	{value}
	components={{
		types: {
			image: Image,
			code_block: Code
		},
		marks: {
			link: Link
		}
	}}
/>
