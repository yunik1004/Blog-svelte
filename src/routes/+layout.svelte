<script lang="ts">
  import "../app.css";
  import Navbar from "./navbar.svelte";
  import Footer from "./footer.svelte";
  interface Props {
    children?: import("svelte").Snippet;
  }

  let { children }: Props = $props();
</script>

<div class="flex flex-col h-screen">
  <Navbar />

  <div class="container mx-auto p-2 pb-10 grow">
    {@render children?.()}
  </div>

  <Footer />
</div>
