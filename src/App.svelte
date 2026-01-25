<script lang="ts">
  const messagePromise = fetch("http://localhost:8080/api/hello")
    .then(async (res) => {
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
      const data = await res.json();
      return data.text ?? "No text received";
    })
    .catch((err) => {
      console.error("Fetch failed:", err);
      return "Failed to load message";
    });
</script>

<main>
  <h1>Svelte + Go</h1>

  {#await messagePromise}
    <p>Loading...</p>
  {:then message}
    <p>{message}</p>
  {:catch error}
    <p>Error: {error.message}</p>
  {/await}
</main>

<style>
  main {
    font-family: system-ui, sans-serif;
    padding: 2rem;
  }
</style>
