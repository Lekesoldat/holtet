<script lang="ts">
	import type { CustomBlockComponentProps } from '@portabletext/svelte';
	import Prism from 'prismjs';
	import 'prism-svelte';

	export let portableText: CustomBlockComponentProps<{
		code: string;
		language: string;
	}>;

	$: ({ code, language } = portableText.value);
	$: html = Prism.highlight(code, Prism.languages[language], language);
</script>

<svelte:head>
	<!-- PrismJS -->
	<link
		href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.22.0/themes/prism.min.css"
		rel="stylesheet"
	/>
</svelte:head>

<pre class={`language-${language}`}>
<code>
{@html html}
</code>
</pre>
