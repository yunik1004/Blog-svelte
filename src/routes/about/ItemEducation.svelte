<script lang="ts">
	export let degree: string;
	export let school: string;
	export let period: string;
</script>

<div class="pb-3">
	<h2 class="text-xl font-bold">{degree}</h2>
	<p class="font-serif italic opacity-50">{school}, {period}</p>
	<ul class="list-disc pl-5 opacity-75">
		<slot />
	</ul>
</div>
