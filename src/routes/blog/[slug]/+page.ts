import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit';
import type { ArticleMetadata } from '$lib/types/article';
import type { Component } from 'svelte';

type MdsvexModule = {
  metadata: ArticleMetadata;
  default: Component;
};


export const load: PageLoad = async ({ params }) => {
  // Glob all markdown files (dynamic import)
  const modules = import.meta.glob('/src/lib/blog/*.md') as Record<
    string,
    () => Promise<MdsvexModule>
  >;

  // Find the module that matches the slug
  const match = Object.entries(modules).find(([path]) =>
    path.endsWith(`${params.slug}.md`)
  );

  if (!match) {
    throw error(404, `Article "${params.slug}" not found`);
  }

  const [, resolver] = match;
  const article = await resolver(); // resolves to MdsvexModule


  return {
    content: article.default,
    meta: article.metadata,
    slug: params.slug
  };
};
