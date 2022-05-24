<script lang="ts">
	import type { CustomBlockComponentProps } from '@portabletext/svelte';

	export let portableText: CustomBlockComponentProps<{
		code: string;
		language: string;
	}>;

	$: ({ value } = portableText);
</script>

<pre>
  <p>{value.language}</p>
  <code>{value.code}</code>
</pre>
