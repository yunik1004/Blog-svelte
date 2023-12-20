<script lang="ts">
	import Card from '$lib/Card.svelte';
	import ItemWork from './ItemWork.svelte';
</script>

<Card title="Working Experience" symbol="building">
	<ItemWork
		company="Krafton, Inc."
		link="https://www.krafton.com"
		job="Deep Learning Research Engineer"
		period="Nov. 2021 - Current"
	>
		<li>Deep Learning Dept. DL Research Team</li>
	</ItemWork>
	<ItemWork
		company="Data Mining Lab @ KAIST"
		link="https://sites.google.com/view/kaistdata"
		job="Master's Student"
		period="Aug. 2019 - Aug. 2021"
	>
		<li>
			Propose SLICENSTITCH for continuous CANDECOMP/PARAFAC (CP) decomposition to deal with
			event-wise streaming tensor data
		</li>
		<li>
			Research Robust PCA and NMF-based two-stage deconvolution algorithm for the Calcium
			imaging data
		</li>
		<li>
			Research the online preprocessing algorithm for AI for the real-time imputation and
			outlier removal on sensor data
		</li>
	</ItemWork>
	<ItemWork
		company="Information Theory and Machine Learning Lab @ KAIST"
		link="https://itml.kaist.ac.kr"
		job="Research Intern"
		period="Nov. 2017 - Feb. 2018"
	>
		<li>Research reinforcement algorithms to improve the performance of game agents</li>
		<li>Develop a game agent for Boxing (Atari 2600) using DQN</li>
	</ItemWork>
	<ItemWork
		company="Stratio, Inc."
		link="https://stratiotechnology.com"
		job="Engineer Intern"
		period="Mar. 2017 - Aug. 2017"
	>
		<li>Implement the deep learning model deployment service</li>
		<li>Implement the API server for the web and IOS application</li>
		<li>Implement the web-based developing/testing tools for the non-developers</li>
	</ItemWork>
</Card>
