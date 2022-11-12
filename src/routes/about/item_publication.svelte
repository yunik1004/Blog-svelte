<script lang="ts">
	export let title: string;
	export let journal: string;
</script>

<div class="pb-5">
	<h2 class="text-2xl font-bold">{title}</h2>
	<p class="font-serif italic opacity-50">{journal}</p>
	<slot />
</div>
