<script lang="ts">
	import ItemProject from './item_project.svelte';
</script>

<div class="card shadow-xl md:card-normal card-compact">
	<div class="card-body">
		<div class="flex card-title pb-10">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="2.0"
				stroke="currentColor"
				class="w-8 h-8 stroke-primary-focus"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
				/>
			</svg>
			<h1 class="text-3xl font-bold text-primary">Selected Project</h1>
		</div>
		<ItemProject
			title="MoBERT: Morphological BERT for Korean"
			job="Researcher"
			period="Jun. 2020"
		>
			<ul class="list-none">
				<li class="opacity-75">
					Research the Korean BERT model for pre-training with morphological information
				</li>
				<li class="opacity-50">
					<a class="link link-hover" href="https://github.com/yunik1004/MoBERT">
						[ code ]
					</a>
				</li>
			</ul>
		</ItemProject>
		<div class="divider" />
		<ItemProject
			title="Tell Me More About You: Cross-domain Recommendation System"
			job="Researcher · front-end programmer · UI/UX designer"
			period="Sep. 2019 - Dec. 2019"
		>
			<ul class="list-none">
				<li class="opacity-75">
					Research the cross-domain auto-encoder-based recommendation system
				</li>
				<li class="opacity-50">
					<a
						class="link link-hover"
						href="https://github.com/yunik1004/recommendation_web"
						>[ code (front-end) ]
					</a>
				</li>
			</ul>
		</ItemProject>
		<div class="divider" />
		<ItemProject
			title="BlockTensor"
			job="Project manager · full-stack programmer · UI/UX designer"
			period="Sep. 2018 - Dec. 2018"
		>
			<ul class="list-none">
				<li class="opacity-75">
					Implement the Scratch-like interactive online programming service for deep
					learning using Vue.js, Tensorflow.js and Blockly.
				</li>
				<li>
					<a
						class="link link-hover opacity-50"
						href="https://github.com/yunik1004/BlockTensor"
						>[ code ]
					</a>
				</li>
			</ul>
		</ItemProject>
		<div class="pb-5" />
	</div>
</div>
