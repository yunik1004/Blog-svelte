<script lang="ts">
  import Card from "$lib/Card.svelte";
  import ItemPublication from "./ItemPublication.svelte";
</script>

<Card title="Publication" symbol="book">
  <ItemPublication
    title="Orak: A Foundational Benchmark for Training and Evaluating LLM Agents on Diverse Video Games"
    journal={[
      "The Fourteenth International Conference on Learning Representations (ICLR '26)",
      "EMNLP 2025 Workshop (Worldplay: When Language Meets Games - Outstanding Paper Award)",
    ]}
    author="Dongmin Park, Minkyu Kim, Beongjun Choi, Junhyuck Kim, Keon Lee, Jonghyun Lee, Inkyu Park, Byeong-Uk Lee, Jaeyoung Hwang, Jaewoo Ahn, Ameya S. Mahabaleshwarkar, Bilal Kartal, Pritam Biswas, Yoshi Suhara, Kangwook Lee, Jaewoong Cho"
  >
    [
    <a class="link link-hover" href="https://arxiv.org/abs/2506.03610">paper</a>
    |
    <a class="link link-hover" href="https://krafton-ai.github.io/orak-leaderboard/">leaderboard</a>
    |
    <a class="link link-hover" href="https://github.com/krafton-ai/Orak">code and datasets</a>
    ]
  </ItemPublication>
  <ItemPublication
    title="Simple Drop-in LoRA Conditioning on Attention Layers Will Improve Your Diffusion Model"
    journal="Transactions on Machine Learning Research (TMLR '24)"
    author="Joo Young Choi, Jaesung Park, Inkyu Park, Jaewoong Cho, Albert No, Ernest Ryu"
  >
    [
    <a class="link link-hover" href="https://arxiv.org/abs/2405.03958">paper</a>
    |
    <a class="link link-hover" href="https://openreview.net/forum?id=38P40gJPrI">openreview</a>
    |
    <a class="link link-hover" href="https://youtube.com/watch?v=z-1LE2aNHak">video</a>
    |
    <a class="link link-hover" href="https://github.com/lthilnklover/diffusion_lora">code</a>
    ]
  </ItemPublication>
  <ItemPublication
    title="LoRA can Replace Time and Class Embeddings in Diffusion Probabilistic Models"
    journal="NeurIPS 2023 Workshop on Diffusion Models"
    author="Joo Young Choi, Jaesung Park, Inkyu Park, Jaewoong Cho, Albert No, Ernest Ryu"
  >
    [
    <a class="link link-hover" href="https://nips.cc/virtual/2023/74885">link </a>
    ]
  </ItemPublication>
  <ItemPublication
    title="Efficient Neural Network Approximation of Robust PCA for Automated Analysis of Calcium Imaging Data"
    journal="24th International Conference on Medical Image Computing & Computer Assisted Intervention (MICCAI '21)"
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
    journal="37th IEEE International Conference on Data Engineering (ICDE '21)"
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
    <a class="link link-hover" href="http://dmlab.kaist.ac.kr/~kijungs/snsICDE2021.pdf">slides </a>
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
