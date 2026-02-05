<script lang="ts">
	import { Timeline, TimelineItem } from 'flowbite-svelte';
	import { CalendarWeekSolid } from 'flowbite-svelte-icons';
	import type { PageData } from './$types';

	export let data: PageData;
	const articles = data.articles.map((a) => ({
		...a,
		date: new Date(a.date) // normalize
	}));
</script>

<Timeline order="vertical">
	{#each articles as article}
		<TimelineItem
			title={article.title}
			date={`Posted on ${article.date.toLocaleDateString(undefined, {
				day: '2-digit',
				month: '2-digit',
				year: 'numeric'
			})}`}
		>
			{#snippet orientationSlot()}
				<span
					class="absolute -left-4 flex h-6 w-6 items-center justify-center rounded-full
          bg-primary-200 ring-8 ring-white
          dark:bg-primary-900 dark:ring-gray-900"
				>
					<CalendarWeekSolid class="h-4 w-4 text-primary-600 dark:text-primary-400" />
				</span>
			{/snippet}

			<p class="mb-4 pl-4 text-base font-normal text-gray-500 dark:text-gray-400">
				{article.excerpt}
			</p>

			<a
				href={`/blog/${article.slug}`}
				class="pl-4 text-primary-600 hover:underline dark:text-primary-400"
			>
				Read article →
			</a>
		</TimelineItem>
	{/each}
</Timeline>
