<script lang="ts">
  import { splitAuthor } from "$lib/author";

  interface Props {
    title: string;
    journal: string | string[];
    author: string;
    children?: import("svelte").Snippet;
  }

  let { title, journal, author, children }: Props = $props();
  const journals = $derived(Array.isArray(journal) ? journal : [journal]);
  const authorParts = $derived(splitAuthor(author));
</script>

<div class="pb-4">
  <h2 class="text-xl font-bold mb-1">{title}</h2>
  <div class="mb-2">
    {#each journals as j (j)}
      <p class="text-sm italic text-primary/80">{j}</p>
    {/each}
  </div>
  <p class="opacity-75 text-sm">
    {#if authorParts.hasName}
      {authorParts.before}<u>Inkyu Park</u>{authorParts.after}
    {:else}
      {author}
    {/if}
  </p>
  <div class="opacity-60 text-sm mt-1">
    {@render children?.()}
  </div>
</div>
