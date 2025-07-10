<script lang="ts">
  interface Props {
    title: string;
    detail: string;
    image: string;
    children?: import("svelte").Snippet;
  }

  let { title, detail, image, children }: Props = $props();
</script>

<div class="pb-3">
  <div class="sm:flex">
    <div class="avatar flex-none pr-8 pb-5">
      <div class="w-20 h-20 rounded">
        <img src={image} alt="profile" />
      </div>
    </div>
    <div class="flex-1 pb-5">
      <h2 class="text-xl font-bold">{title}</h2>
      <p class="opacity-75">{detail}</p>
      {@render children?.()}
    </div>
  </div>
</div>
