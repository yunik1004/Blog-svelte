<script lang="ts">
  interface Props {
    title: string;
    children?: import("svelte").Snippet;
  }

  let { title, children }: Props = $props();
</script>

<div class="pb-3">
  <h2 class="text-xl font-bold">{title}</h2>
  <ul class="list-disc pl-5 opacity-75">
    {@render children?.()}
  </ul>
</div>
