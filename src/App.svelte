<script>
  let message = "Loading...";

  async function loadMessage() {
    const res = await fetch("http://localhost:8080/api/hello");
    const data = await res.json();
    message = data.text;
  }

  loadMessage();
</script>

<main>
  <h1>Svelte + Go</h1>
  <p>{message}</p>
</main>

<style>
  main {
    font-family: system-ui, sans-serif;
    padding: 2rem;
  }
</style>
