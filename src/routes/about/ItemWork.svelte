<script lang="ts">
	export let company: string;
	export let link: string;
	export let job: string;
	export let period: string;
</script>

<div class="pb-3">
	<h2 class="text-2xl font-bold pb-2"><a class="link link-hover" href={link}>{company}</a></h2>
	<p class="font-serif italic opacity-50 pb-2">{job}, {period}</p>
	<ul class="list-disc pl-5 opacity-75">
		<slot />
	</ul>
</div>
