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
  <h2 class="text-base font-bold leading-snug mb-1">{title}</h2>
  <div class="text-xs font-mono text-primary/70">{period}</div>
  <div class="text-sm opacity-75 flex-1">{description}</div>
  <LinkList {links} class="text-sm opacity-50 mt-1" />
</div>
