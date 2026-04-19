<script lang="ts">
  import LinkList from "$lib/LinkList.svelte";

  interface Link {
    label: string;
    href: string;
  }

  interface Props {
    title: string;
    period: string;
    description: string;
    links?: Link[];
  }

  let { title, period, description, links = [] }: Props = $props();

  const periodParts = $derived(period.split(" - "));
</script>

<div class="@container p-3 border border-base-300 rounded bg-base-200-half flex flex-col">
  <div class="flex items-start justify-between gap-2 mb-1">
    <h2 class="text-base font-bold leading-snug">{title}</h2>
    <span class="text-xs font-mono text-primary whitespace-nowrap pt-0.5">
      {#if periodParts.length > 1}
        <span class="hidden @xs:inline">{period}</span>
        <span class="@xs:hidden">{periodParts[0]}</span>
      {:else}
        {period}
      {/if}
    </span>
  </div>
  <div class="text-sm text-base-content-muted flex-1">{description}</div>
  <LinkList {links} class="text-sm mt-2" />
</div>
