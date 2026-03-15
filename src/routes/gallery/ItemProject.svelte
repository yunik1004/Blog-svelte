<script lang="ts">
  interface Props {
    title: string;
    job: string;
    period: string;
    description: string;
    children?: import("svelte").Snippet;
  }

  let { title, job, period, description, children }: Props = $props();
</script>

<div class="pb-3">
  <h2 class="text-xl font-bold">{title}</h2>
  <p class="font-serif italic opacity-50">{job}, {period}</p>
  <ul class="list-none">
    <li class="opacity-75">
      {description}
    </li>
    <li class="opacity-50">
      {@render children?.()}
    </li>
  </ul>
</div>
