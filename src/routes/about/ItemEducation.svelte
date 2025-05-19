<script lang="ts">
  interface Props {
    degree: string;
    school: string;
    period: string;
    children?: import("svelte").Snippet;
  }

  let { degree, school, period, children }: Props = $props();
</script>

<div class="pb-3">
  <h2 class="text-xl font-bold">{degree}</h2>
  <p class="font-serif italic opacity-50">{school}, {period}</p>
  <ul class="list-disc pl-5 opacity-75">
    {@render children?.()}
  </ul>
</div>
