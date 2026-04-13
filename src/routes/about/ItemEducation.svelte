<script lang="ts">
  interface Props {
    degree: string;
    school: string;
    period: string;
    children?: import("svelte").Snippet;
  }

  let { degree, school, period, children }: Props = $props();
</script>

<div class="mb-5 flex gap-3">
  <div class="flex flex-col items-center flex-none pt-1">
    <div class="w-2 h-2 rounded-full bg-primary flex-none"></div>
    <div class="w-px flex-1 bg-primary/25 mt-1"></div>
  </div>
  <div class="flex-1 pb-2">
    <p class="text-xs font-mono text-primary/70 mb-1">{period}</p>
    <h2 class="text-xl font-bold leading-snug">{degree}</h2>
    <p class="italic opacity-60 text-sm mb-1">{school}</p>
    <ul class="list-disc pl-5 opacity-75 text-sm">
      {@render children?.()}
    </ul>
  </div>
</div>
