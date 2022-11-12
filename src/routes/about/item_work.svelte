<script lang="ts">
	export let company: string;
	export let link: string;
	export let job: string;
	export let period: string;
</script>

<div class="pb-5">
	<h2 class="text-2xl font-bold"><a class="link link-hover" href={link}>{company}</a></h2>
	<p class="font-serif italic opacity-50">{job}, {period}</p>
	<slot />
</div>
