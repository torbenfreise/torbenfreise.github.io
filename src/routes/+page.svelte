<script lang="ts">
	let subtitle = 'Welcome to my SvelteKit site!';
</script>

<section class="home">
	<h1>Home Page</h1>
	<p>{subtitle}</p>

	<section class="about">
		<h2>About</h2>
		<p>This is the about section on the homepage.</p>
	</section>
</section>

<style>
	.home {
		text-align: center;
		padding: 2rem;
	}

	.home h1 {
		font-size: 2.5rem;
		margin-bottom: 1rem;
	}

	.about {
		margin-top: 2rem;
	}

	.about h2 {
		font-size: 2rem;
		color: teal;
	}
</style>
