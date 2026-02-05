<script lang="ts">
	let subtitle = 'Welcome to my SvelteKit site!';
	export async function load() {
		const modules = import.meta.glob('./articles/*.md');

		const articles = await Promise.all(
			Object.entries(modules).map(async ([path, resolver]) => {
				const mod = await resolver();
				const slug = path.split('/').pop()?.replace('.md', '');

				return {
					slug,
					...mod.metadata
				};
			})
		);

		return {
			articles: articles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
		};
	}
</script>

<section class="home">
	<h1>Home Page</h1>
	<p>{subtitle}</p>

	<section class="about">
		<h2>About</h2>
		<p>This is the about section on the homepage.</p>
	</section>
</section>
