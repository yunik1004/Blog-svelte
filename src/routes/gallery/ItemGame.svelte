<script lang="ts">
	export let title: string;
	export let detail: string;
	export let image: string;
	export let download: string;
	export let code: string;
</script>

<div class="pb-3">
	<div class="sm:flex">
		<div class="avatar flex-none pr-8 pb-5">
			<div class="w-20 h-20 rounded">
				<img src={image} alt="profile" />
			</div>
		</div>
		<div class="flex-1 pb-5">
			<h2 class="text-xl font-bold">{title}</h2>
			<p class="opacity-75">{detail}</p>
			[
			<a class="link link-hover" href={download}>download</a>
			|
			<a class="link link-hover" href={code}>code</a>
			]
		</div>
	</div>
</div>
