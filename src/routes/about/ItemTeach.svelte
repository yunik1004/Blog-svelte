<script lang="ts">
  interface Props {
    title: string;
    children?: import("svelte").Snippet;
  }

  let { title, children }: Props = $props();
</script>

<div class="mb-5 last:mb-0">
  <h2 class="text-xl font-bold mb-1">{title}</h2>
  <ul class="list-disc pl-5 text-base-content/75">
    {@render children?.()}
  </ul>
</div>
