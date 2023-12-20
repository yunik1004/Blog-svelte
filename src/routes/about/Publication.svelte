<script lang="ts">
	import Card from '$lib/Card.svelte';
	import ItemPublication from './ItemPublication.svelte';
</script>

<Card title="Publication" subtitle="(*=Equal Contribution)" symbol="paper">
	<ItemPublication
		title="SAiD: Speech-driven Blendshape Facial Animation with Diffusion"
		journal="Preprint"
		author="Inkyu Park, Jaewoong Cho"
	>
		[
		<a class="link link-hover" href="https://yunik1004.github.io/SAiD">project page</a>
		|
		<a class="link link-hover" href="https://github.com/yunik1004/SAiD">code and datasets</a>
		]
	</ItemPublication>
	<ItemPublication
		title="LoRA can Replace Time and Class Embeddings in Diffusion Probabilistic Models"
		journal="NeurIPS 2023 Workshop on Diffusion Models"
		author="Joo Young Choi, Jaesung Park, Inkyu Park, Jaewoong Cho, Albert No, Ernest Ryu"
	></ItemPublication>
	<ItemPublication
		title="Efficient Neural Network Approximation of Robust PCA for Automated Analysis of Calcium Imaging Data"
		journal="24th International Conference on Medical Image Computing & Computer Assisted Intervention (MICCAI ’21)"
		author="Seungjae Han, Eun-seo Cho, Inkyu Park, Kijung Shin, and Young-gyu Yoon"
	>
		[
		<a class="link link-hover" href="https://arxiv.org/abs/2108.01665">paper</a>
		|
		<a class="link link-hover" href="https://github.com/NICALab/BEAR">code and datasets</a>
		|
		<a
			class="link link-hover"
			href="https://dblp.uni-trier.de/rec/conf/miccai/HanCPSY21.html?view=bibtex"
			>bib
		</a>
		]
	</ItemPublication>
	<ItemPublication
		title="SliceNStitch: Continuous CP Decomposition of Sparse Tensor Streams"
		journal="37th IEEE International Conference on Data Engineering (ICDE ’21)"
		author="Taehyung Kwon*, Inkyu Park*, Dongjin Lee, and Kijung Shin"
	>
		[
		<a class="link link-hover" href="https://arxiv.org/abs/2102.11517">paper</a>
		|
		<a
			class="link link-hover"
			href="https://github.com/DMLab-Tensor/SliceNStitch/blob/master/doc/supplementary.pdf"
			>appendix
		</a>
		|
		<a class="link link-hover" href="https://youtu.be/x5yiWLvPCFo">video</a>
		|
		<a class="link link-hover" href="http://dmlab.kaist.ac.kr/~kijungs/snsICDE2021.pdf"
			>slides
		</a>
		|
		<a class="link link-hover" href="https://github.com/DMLab-Tensor/SliceNStitch"
			>code and datasets
		</a>
		|
		<a
			class="link link-hover"
			href="https://dblp.uni-trier.de/rec/conf/icde/Kwon0LS21.html?view=bibtex"
			>bib
		</a>
		]
	</ItemPublication>
</Card>
