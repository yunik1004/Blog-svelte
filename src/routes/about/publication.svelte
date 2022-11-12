<script lang="ts">
	import ItemPublication from './item_publication.svelte';
</script>

<div class="flex">
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
			d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
		/>
	</svg>

	<h2 class="text-3xl font-bold pl-3 pb-10 text-primary">
		Publication <small class="text-base">(*=Equal Contribution)</small>
	</h2>
</div>

<div>
	<ItemPublication
		title="Efficient Neural Network Approximation of Robust PCA for Automated Analysis of Calcium Imaging Data"
		journal="24th International Conference on Medical Image Computing & Computer Assisted Intervention (MICCAI ’21)"
	>
		<p class="opacity-75">
			Seungjae Han, Eun-seo Cho, <u>Inkyu Park</u>, Kijung Shin, and Young-gyu Yoon
		</p>
		<p class="opacity-50">
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
		</p>
	</ItemPublication>
	<ItemPublication
		title="SliceNStitch: Continuous CP Decomposition of Sparse Tensor Streams"
		journal="37th IEEE International Conference on Data Engineering (ICDE ’21)"
	>
		<p class="opacity-75">Taehyung Kwon*, <u>Inkyu Park</u>*, Dongjin Lee, and Kijung Shin</p>
		<p class="opacity-50">
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
		</p>
	</ItemPublication>
</div>
