<script lang="ts">
  import { splitAuthor } from "$lib/author";
  import LinkList from "$lib/LinkList.svelte";

  interface Link {
    label: string;
    href: string;
  }

  interface Props {
    title: string;
    journal: string | string[];
    author: string;
    links?: Link[];
  }

  let { title, journal, author, links = [] }: Props = $props();
  const journals = $derived(Array.isArray(journal) ? journal : [journal]);
  const authorParts = $derived(splitAuthor(author));
</script>

<div class="mb-5 last:mb-0">
  <h2 class="text-xl font-bold mb-1">{title}</h2>
  <div class="mb-2">
    {#each journals as j (j)}
      <p class="text-sm text-primary/80">{j}</p>
    {/each}
  </div>
  <p class="text-base-content/75 text-sm">
    {#if authorParts.hasName}
      {authorParts.before}<u>Inkyu Park</u>{authorParts.after}
    {:else}
      {author}
    {/if}
  </p>
  <LinkList {links} class="text-sm mt-2" />
</div>
