<script lang="ts">
  interface Link {
    label: string;
    href: string;
  }

  interface Props {
    links: Link[];
    class?: string;
  }

  let { links, class: className = "text-sm mt-1" }: Props = $props();
</script>

{#if links.length > 0}
  <div class="{className} flex flex-wrap gap-1.5">
    {#each links as link (link.href)}
      <a class="btn btn-xs btn-outline btn-primary font-normal" rel="external" href={link.href}
        >{link.label}</a
      >
    {/each}
  </div>
{/if}
