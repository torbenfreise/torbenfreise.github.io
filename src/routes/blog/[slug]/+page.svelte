<script lang="ts">
	import type { PageData } from './$types';
	import { formatDate } from '$lib/utils/date';
	export let data: PageData;
	// `content` is a Svelte component exported from mdsvex
	const { content: Content, meta } = data;
	import { format } from 'date-fns';
</script>

<article class="prose max-w-none dark:prose-invert">
	<header class="mb-8">
		<h1>{meta.title}</h1>
		<p class="text-gray-500">{format(new Date(meta.date), 'MMMM dd, yyyy')}</p>
	</header>

	<!-- Render the mdsvex component directly -->
	<Content />
</article>
