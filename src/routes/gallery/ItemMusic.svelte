<script lang="ts">
  interface Props {
    title: string;
    credit: string;
    date: string;
    src: string;
  }

  let { title, credit, date, src }: Props = $props();
</script>

<div class="p-3 border border-base-300 rounded bg-base-200/50">
  <div class="flex items-start justify-between gap-2 mb-1">
    <h2 class="text-base font-bold leading-snug">{title}</h2>
    <span class="text-xs font-mono text-primary whitespace-nowrap pt-0.5">{date}</span>
  </div>
  <p class="text-sm text-base-content/50 mb-2">{credit}</p>
  <audio {src} controls class="w-full"></audio>
</div>
