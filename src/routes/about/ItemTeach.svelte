<script lang="ts">
  export let title: string;
</script>

<div class="pb-3">
  <h2 class="text-xl font-bold">{title}</h2>
  <ul class="list-disc pl-5 opacity-75">
    <slot />
  </ul>
</div>
