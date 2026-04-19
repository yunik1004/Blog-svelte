<script lang="ts">
  import LinkList from "$lib/LinkList.svelte";

  interface Link {
    label: string;
    href: string;
  }

  interface Props {
    title: string;
    detail: string;
    image: string;
    links?: Link[];
  }

  let { title, detail, image, links = [] }: Props = $props();
</script>

<div class="p-3 border border-base-300 rounded bg-base-200-half flex gap-3">
  <div class="flex-none">
    <div class="w-16 h-16 rounded overflow-hidden">
      <img src={image} alt={title} class="w-full h-full object-cover" />
    </div>
  </div>
  <div class="flex-1 flex flex-col min-w-0">
    <h2 class="text-base font-bold leading-snug mb-1">{title}</h2>
    <p class="text-sm text-base-content-muted flex-1">{detail}</p>
    <LinkList {links} class="text-sm mt-2" />
  </div>
</div>
