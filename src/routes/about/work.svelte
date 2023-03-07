<script lang="ts">
	import ItemWork from './item_work.svelte';
</script>

<div class="card shadow-xl">
	<div class="card-body">
		<div class="flex card-title pb-10">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="2.0"
				stroke="currentColor"
				class="w-6 h-6 stroke-primary-focus"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"
				/>
			</svg>

			<h1 class="text-3xl font-bold text-primary">Working Experience</h1>
		</div>
		<ItemWork
			company="Krafton, Inc."
			link="https://www.krafton.com"
			job="Deep Learning Research Engineer"
			period="Nov. 2021 - Current"
		>
			<ul class="list-disc pl-5 opacity-75">
				<li>Deep Learning Dept. DL Research Team</li>
			</ul>
		</ItemWork>
		<ItemWork
			company="Information Theory and Machine Learning Lab @ KAIST"
			link="https://itml.kaist.ac.kr"
			job="Research Intern"
			period="Nov. 2017 - Feb. 2018"
		>
			<ul class="list-disc pl-5 opacity-75">
				<li>Research reinforcement algorithms to improve the performance of game agents</li>
				<li>Develop a game agent for Boxing (Atari 2600) using DQN</li>
			</ul>
		</ItemWork>
		<ItemWork
			company="Stratio, Inc."
			link="https://stratiotechnology.com"
			job="Engineer Intern"
			period="Mar. 2017 - Aug. 2017"
		>
			<ul class="list-disc pl-5 opacity-75">
				<li>Implement the deep learning model deployment service</li>
				<li>Implement the API server for the web and IOS application</li>
				<li>Implement the web-based developing/testing tools for the non-developers</li>
			</ul>
		</ItemWork>
	</div>
</div>
