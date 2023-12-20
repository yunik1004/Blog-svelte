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
		<li>Advised by Prof. Kangwook Lee</li>
	</ItemWork>
	<ItemWork
		company="Data Mining Lab @ KAIST"
		link="https://sites.google.com/view/kaistdata"
		job="Master's Student"
		period="Aug. 2019 - Aug. 2021"
	>
		<li>Advised by Prof. Kijung Shin</li>
	</ItemWork>
	<ItemWork
		company="Information Theory and Machine Learning Lab @ KAIST"
		link="https://itml.kaist.ac.kr"
		job="Research Intern"
		period="Nov. 2017 - Feb. 2018"
	>
		<li>Advised by Prof. Sae-Young Chung</li>
	</ItemWork>
	<ItemWork
		company="Stratio, Inc."
		link="https://stratiotechnology.com"
		job="Engineer Intern"
		period="Mar. 2017 - Aug. 2017"
	>
		<li>Supporter: IITP, FKII</li>
	</ItemWork>
</Card>
