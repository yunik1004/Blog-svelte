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

<div class="mb-5 flex gap-3">
  <div class="flex flex-col items-center flex-none pt-1">
    <div class="w-2 h-2 rounded-full bg-primary flex-none"></div>
    <div class="w-px flex-1 bg-primary/25 mt-1"></div>
  </div>
  <div class="flex-1 pb-2">
    <p class="text-xs font-mono text-primary/70 mb-1">{period}</p>
    <h2 class="text-xl font-bold leading-snug">
      {#if link.startsWith("http")}
        <a class="link link-hover" rel="external" href={link}>{company}</a>
      {:else}
        <a class="link link-hover" href={resolve(link as "/")}>{company}</a>
      {/if}
      {#if division}
        <span class="text-base font-normal opacity-60">
          (
          {#if division_link.startsWith("http")}
            <a class="link link-hover" rel="external" href={division_link}>{division}</a>
          {:else}
            <a class="link link-hover" href={resolve(division_link as "/")}>{division}</a>
          {/if}
          )
        </span>
      {/if}
    </h2>
    <p class="italic opacity-60 text-sm mb-1">{job}</p>
    <ul class="list-disc pl-5 opacity-75 text-sm">
      {@render children?.()}
    </ul>
  </div>
</div>
