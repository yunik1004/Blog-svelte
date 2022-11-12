<script lang="ts">
	export let title: string;
	export let credit: string;
	export let date: string;
	export let src: string;
</script>

<div class="md:flex pb-5">
	<div class="flex-none">
		<h2 class="text-2xl font-bold">{title}</h2>
		<p class="font-serif italic opacity-50">{credit}, {date}</p>
	</div>
	<div class="flex-1 md:pl-5">
		<audio {src} controls class="bg-base-content" />
	</div>
</div>
