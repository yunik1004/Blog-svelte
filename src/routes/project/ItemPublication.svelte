<script lang="ts">
  import { onMount } from "svelte";

  export let title: string;
  export let journal: string;
  export let author: string;

  let author_element: HTMLParagraphElement;

  onMount(() => {
    let author_html = author_element.innerHTML;
    author_element.innerHTML = author_html.replace("Inkyu Park", "<u>Inkyu Park</u>");
  });
</script>

<div class="pb-3">
  <h2 class="text-xl font-bold">{title}</h2>
  <p class="font-serif italic opacity-50">{journal}</p>
  <p class="opacity-75" bind:this={author_element}>{author}</p>
  <p class="opacity-50">
    <slot />
  </p>
</div>
