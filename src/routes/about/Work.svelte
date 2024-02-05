<script lang="ts">
	import Card from '$lib/Card.svelte';
	import ItemWork from './ItemWork.svelte';
</script>

<Card title="Working Experience" symbol="building">
	<ItemWork
		company="KRAFTON, Inc."
		link="https://www.krafton.com"
		job="Deep Learning Research Engineer"
		period="Nov. 2021 - Current"
		division="KRAFTON AI"
		division_link="https://www.krafton.ai"
	>
		<li>
			Advisor:
			<a class="link link-hover" href="https://kangwooklee.com">Prof. Kangwook Lee</a>
		</li>
	</ItemWork>
	<ItemWork
		company="Information Theory and Machine Learning Lab @ KAIST"
		link="https://itml.kaist.ac.kr"
		job="Research Intern"
		period="Nov. 2017 - Feb. 2018"
	>
		<li>
			Advisor:
			<a class="link link-hover" href="https://scholar.google.com/citations?user=k-o3JBIAAAAJ"
				>Prof. Sae-Young Chung
			</a>
		</li>
	</ItemWork>
	<ItemWork
		company="Stratio, Inc. (US office)"
		link="https://stratiotechnology.com"
		job="Software Engineer Intern"
		period="Mar. 2017 - Aug. 2017"
	>
		<li>
			<a
				class="link link-hover"
				href="https://www.ictintern.or.kr/homepage/system/systemViewG.do"
				>Global ICT Internship Program
			</a>
			(supporter: <a class="link link-hover" href="https://www.iitp.kr">IITP</a>,
			<a class="link link-hover" href="https://fkii.org">FKII</a>)
		</li>
	</ItemWork>
</Card>
