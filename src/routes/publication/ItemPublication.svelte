<script lang="ts">
  interface Props {
    title: string;
    journal: string | string[];
    author: string;
    children?: import("svelte").Snippet;
  }

  let { title, journal, author, children }: Props = $props();
  const journals = $derived(Array.isArray(journal) ? journal : [journal]);

  const nameToUnderline = "Inkyu Park";
  const before = $derived(() => author.split(nameToUnderline)[0]);
  const after = $derived(() => author.split(nameToUnderline)[1] ?? "");
</script>

<div class="pb-3">
  <h2 class="text-xl font-bold">{title}</h2>
  {#each journals as j (j)}
    <p class="font-serif italic opacity-50">{j}</p>
  {/each}
  <p class="opacity-75">
    {before()}<u>{nameToUnderline}</u>{after()}
  </p>
  <p class="opacity-50">
    {@render children?.()}
  </p>
</div>
