import type { PageLoad } from './$types';
import type { Article } from '$lib/types/article';

type MdsvexEagerModule = {
  metadata: Omit<Article, 'slug'>;
  default: unknown;
};


export const load: PageLoad = async () => {
  const modules = import.meta.glob('/src/lib/blog/*.md', { eager: true }) as Record<
    string,
    MdsvexEagerModule
  >;

  const articles: Article[] = Object.entries(modules)
    .map(([path, mod]) => {
      const file = path.split('/').pop() || '';
      const slug = file.replace(/\.md$/, '');
      return {
        ...mod.metadata,
        slug
      } as Article;
    })
    .filter((a) => a.published !== false) 
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return { articles };
};
