<script lang="ts">
	export let title: string;
	export let job: string;
	export let period: string;
	export let description: string;
</script>

<div class="pb-3">
	<h2 class="text-xl font-bold">{title}</h2>
	<p class="font-serif italic opacity-50">{job}, {period}</p>
	<ul class="list-none">
		<li class="opacity-75">
			{description}
		</li>
		<li class="opacity-50">
			<slot />
		</li>
	</ul>
</div>
