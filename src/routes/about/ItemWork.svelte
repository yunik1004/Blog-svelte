<script lang="ts">
  import { resolve } from "$app/paths";

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
    {#if link.startsWith("http")}
      <a class="link link-hover" rel="external" href={link}>{company}</a>
    {:else}
      <a class="link link-hover" href={resolve(link as "/")}>{company}</a>
    {/if}
    {#if division}
      (
      {#if division_link.startsWith("http")}
        <a class="link link-hover" rel="external" href={division_link}>{division}</a>
      {:else}
        <a class="link link-hover" href={resolve(division_link as "/")}>{division}</a>
      {/if}
      )
    {/if}
  </h2>
  <p class="font-serif italic opacity-50">{job}, {period}</p>
  <ul class="list-disc pl-5 opacity-75">
    {@render children?.()}
  </ul>
</div>
