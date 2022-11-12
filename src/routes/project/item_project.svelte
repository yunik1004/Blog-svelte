<script lang="ts">
	export let title: string;
	export let job: string;
	export let period: string;
</script>

<div>
	<h2 class="text-2xl font-bold">{title}</h2>
	<p class="font-serif italic opacity-50">{job}, {period}</p>
	<slot />
</div>
