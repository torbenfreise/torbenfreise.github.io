<script lang="ts">
	import { Group } from 'flowbite-svelte';
	import type { PageData } from './$types';
	import { formatDate } from '$lib/utils/date';
	import { resolve } from '$app/paths';

	export let data: PageData;
	const articles = data.articles;
</script>

<svelte:head>
	<title>Torben Freise - Blog</title>
	<meta name="description" content="" />
</svelte:head>

<Group>
	<ol class="divide-y divide-gray-100 dark:divide-gray-800">
		{#each articles as article (article.slug)}
			<li class="py-3">
				<a
					href={resolve('/blog/[slug]', { slug: article.slug })}
					class="group block rounded-md px-4 py-3 transition-colors duration-150 ease-in-out hover:bg-gray-50 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-300 dark:hover:bg-gray-800 dark:hover:shadow-lg"
					aria-label={`Read ${article.title}`}
				>
					<div class="flex items-start gap-4">
						<div class="min-w-0">
							<h3
								class="text-xl leading-tight font-semibold text-gray-900 transition-colors duration-150 group-hover:text-primary-700 dark:text-white dark:group-hover:text-primary-300"
							>
								{article.title}
							</h3>
							<div class="mt-2 text-xs text-gray-500 dark:text-gray-400">
								{formatDate(article.date)}
							</div>

							<p
								class="mt-1 truncate text-sm text-gray-500 transition-colors duration-150 group-hover:text-gray-600 dark:text-gray-400 dark:group-hover:text-gray-300"
							>
								{article.excerpt}
							</p>
						</div>
					</div>
				</a>
			</li>
		{/each}
	</ol>
</Group>
