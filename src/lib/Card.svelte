<script lang="ts">
  import { get_symbol } from "./symbol";

  interface Props {
    title: string;
    subtitle?: string;
    symbol: string;
    children?: import("svelte").Snippet;
  }

  let { title, subtitle = "", symbol, children }: Props = $props();
</script>

<div class="card shadow-xl md:card-normal card-compact">
  <div class="card-body">
    <div class="flex card-title pb-3 text-primary">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="2.0"
        stroke="currentColor"
        class="w-7 h-7 stroke-primary-focus"
      >
        <path stroke-linecap="round" stroke-linejoin="round" d={get_symbol(symbol)} />
      </svg>
      <h1 class="text-3xl font-bold">
        {title}
        <br class="sm:hidden" />
        <small class="text-base">{subtitle}</small>
      </h1>
    </div>

    {@render children?.()}
  </div>
</div>
