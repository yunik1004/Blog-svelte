<script lang="ts">
	export let title: string;
	export let journal: string;
</script>

<div class="pb-7">
	<h2 class="text-2xl font-bold pb-2">{title}</h2>
	<p class="font-serif italic opacity-50 pb-2">{journal}</p>
	<slot />
</div>
