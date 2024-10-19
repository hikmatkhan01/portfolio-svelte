<script>
  let message = "Hello Tailwind with Svelte!";
  import Content from "./lib/Content.svelte";
  import Header from "./lib/Header.svelte";
</script>

<main class=" min-h-screen bg-gray-100">
  <div class="container w-full md:w-[80%] m-auto bg-slate-500">
    <Header />
    <Content />
  </div>
</main>

<style>
  main {
    font-family: sans-serif;
  }
</style>
