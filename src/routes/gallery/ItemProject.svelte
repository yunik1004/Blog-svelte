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
</script>

<div class="p-3 border border-base-300 rounded bg-base-200/50 flex flex-col">
  <div class="flex items-start justify-between gap-2 mb-1">
    <h2 class="text-base font-bold leading-snug">{title}</h2>
    <span class="text-xs font-mono text-primary whitespace-nowrap pt-0.5">{period}</span>
  </div>
  <div class="text-sm text-base-content/75 flex-1">{description}</div>
  <LinkList {links} class="text-sm mt-2" />
</div>
