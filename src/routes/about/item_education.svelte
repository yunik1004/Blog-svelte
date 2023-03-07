<script lang="ts">
	export let degree: string;
	export let school: string;
	export let period: string;
</script>

<div class="pb-7">
	<h2 class="text-2xl font-bold pb-2">{degree}</h2>
	<p class="font-serif italic opacity-50 pb-2">{school}, {period}</p>
	<slot />
</div>
