<script lang="ts">
  interface Link {
    label: string;
    href: string;
  }

  interface Props {
    links: Link[];
    class?: string;
  }

  let { links, class: className = "opacity-60 text-sm mt-1" }: Props = $props();

  const OPEN = "[ ";
  const SEP = " | ";
  const CLOSE = " ]";
</script>

{#if links.length > 0}
  <div class={className}>
    {OPEN}{#each links as link, i (link.href)}<a
        class="link link-hover"
        rel="external"
        href={link.href}>{link.label}</a
      >{#if i < links.length - 1}{SEP}{/if}{/each}{CLOSE}
  </div>
{/if}
