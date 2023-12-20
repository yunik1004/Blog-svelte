<script lang="ts">
	export let degree: string;
	export let school: string;
	export let period: string;
</script>

<div class="pb-7">
	<h2 class="text-2xl font-bold pb-2">{degree}</h2>
	<p class="font-serif italic opacity-50 pb-2">{school}, {period}</p>
	<ul class="list-disc pl-5 opacity-75">
		<slot />
	</ul>
</div>
