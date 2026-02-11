<script lang="ts">
	import type { PageData } from './$types';
	import { formatDate } from '$lib/utils/date';
	export let data: PageData;
	const { content: Content, meta } = data;
</script>

<svelte:head>
	<title>{meta.title}</title>
	<meta name="description" content={meta.excerpt} />
</svelte:head>

<article class="prose max-w-none dark:prose-invert">
	<header class="mb-8">
		<h1>{meta.title}</h1>
		<p class="text-gray-500">{formatDate(meta.date)}</p>
	</header>

	<!-- Render the mdsvex component directly -->
	<Content />
</article>
