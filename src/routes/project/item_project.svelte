<script lang="ts">
	export let title: string;
	export let job: string;
	export let period: string;
</script>

<div>
	<h2 class="text-2xl font-bold pb-2">{title}</h2>
	<p class="font-serif italic opacity-50 pb-2">{job}, {period}</p>
	<slot />
</div>
