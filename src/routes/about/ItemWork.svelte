<script lang="ts">
	export let company: string;
	export let link: string;
	export let job: string;
	export let period: string;
	export let division: string = '';
	export let division_link: string = '';
</script>

<div class="pb-3">
	<h2 class="text-xl font-bold">
		<a class="link link-hover" href={link}>{company}</a>
		{#if division}
			(<a class="link link-hover" href={division_link}>{division}</a>)
		{/if}
	</h2>
	<p class="font-serif italic opacity-50">{job}, {period}</p>
	<ul class="list-disc pl-5 opacity-75">
		<slot />
	</ul>
</div>
