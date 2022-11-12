<script lang="ts">
	export let title: string;
	export let credit: string;
	export let date: string;
	export let src: string;
</script>

<div class="pb-5">
	<h2 class="text-2xl font-bold">{title}</h2>
	<p class="font-serif italic opacity-50 pb-2">{credit}, {date}</p>
	<audio {src} controls class="bg-base-content" />
</div>
