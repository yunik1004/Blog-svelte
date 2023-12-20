<script lang="ts">
	export let title: string;
	export let credit: string;
	export let date: string;
	export let src: string;
</script>

<div class="pb-3">
	<h2 class="text-xl font-bold">{title}</h2>
	<p class="font-serif italic opacity-50">{credit}, {date}</p>
	<audio {src} controls class="w-full max-w-md mr-auto bg-base-100" />
</div>
