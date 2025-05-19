<script lang="ts">
  interface Props {
    company: string;
    link: string;
    job: string;
    period: string;
    division?: string;
    division_link?: string;
    children?: import("svelte").Snippet;
  }

  let { company, link, job, period, division = "", division_link = "", children }: Props = $props();
</script>

<div class="pb-3">
  <h2 class="text-xl font-bold">
    <a class="link link-hover" href={link}>{company}</a>
    {#if division}
      (<a class="link link-hover" href={division_link}>{division}</a>)
    {/if}
  </h2>
  <p class="font-serif italic opacity-50">{job}, {period}</p>
  <ul class="list-disc pl-5 opacity-75">
    {@render children?.()}
  </ul>
</div>
