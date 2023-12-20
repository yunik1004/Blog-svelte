<script lang="ts">
	export let title: string;
	export let job: string;
	export let period: string;
	export let description: string;
</script>

<div class="pb-7">
	<h2 class="text-2xl font-bold pb-2">{title}</h2>
	<p class="font-serif italic opacity-50 pb-2">{job}, {period}</p>
	<ul class="list-none">
		<li class="opacity-75">
			{description}
		</li>
		<li class="opacity-50">
			<slot />
		</li>
	</ul>
</div>
