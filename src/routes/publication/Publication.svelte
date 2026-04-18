<script lang="ts">
  import Card from "$lib/Card.svelte";
  import ItemPublication from "./ItemPublication.svelte";

  const publications = [
    {
      title: "Raon-Speech Technical Report",
      journal: "Technical Report (2026)",
      author: "KRAFTON",
      links: [
        {
          label: "paper",
          href: "https://huggingface.co/KRAFTON/Raon-Speech-9B/blob/main/Technical_Report_Raon_Speech.pdf",
        },
        { label: "code", href: "https://github.com/krafton-ai/Raon-Speech" },
        {
          label: "model (SpeechLLM)",
          href: "https://huggingface.co/KRAFTON/Raon-Speech-9B",
        },
        {
          label: "model (Full-duplex)",
          href: "https://huggingface.co/KRAFTON/Raon-SpeechChat-9B",
        },
      ],
    },
    {
      title:
        "Orak: A Foundational Benchmark for Training and Evaluating LLM Agents on Diverse Video Games",
      journal: [
        "The Fourteenth International Conference on Learning Representations (ICLR '26)",
        "EMNLP 2025 Workshop (Worldplay: When Language Meets Games - Outstanding Paper Award)",
      ],
      author:
        "Dongmin Park, Minkyu Kim, Beongjun Choi, Junhyuck Kim, Keon Lee, Jonghyun Lee, Inkyu Park, Byeong-Uk Lee, Jaeyoung Hwang, Jaewoo Ahn, Ameya S. Mahabaleshwarkar, Bilal Kartal, Pritam Biswas, Yoshi Suhara, Kangwook Lee, Jaewoong Cho",
      links: [
        { label: "paper", href: "https://arxiv.org/abs/2506.03610" },
        {
          label: "leaderboard",
          href: "https://krafton-ai.github.io/orak-leaderboard/",
        },
        {
          label: "code and datasets",
          href: "https://github.com/krafton-ai/Orak",
        },
      ],
    },
    {
      title: "Adversarial Reinforcement Learning Framework for ESP Cheater Simulation",
      journal: "arXiv preprint (2025)",
      author:
        "Inkyu Park, Jeong-Gwan Lee, Taehwan Kwon, Juheon Choi, Seungku Kim, Junsu Kim, Kimin Lee",
      links: [
        { label: "paper", href: "https://arxiv.org/abs/2509.24274" },
        {
          label: "code",
          href: "https://github.com/yunik1004/esp-simulator",
        },
      ],
    },
    {
      title:
        "Simple Drop-in LoRA Conditioning on Attention Layers Will Improve Your Diffusion Model",
      journal: "Transactions on Machine Learning Research (TMLR '24)",
      author: "Joo Young Choi, Jaesung Park, Inkyu Park, Jaewoong Cho, Albert No, Ernest Ryu",
      links: [
        { label: "paper", href: "https://arxiv.org/abs/2405.03958" },
        {
          label: "openreview",
          href: "https://openreview.net/forum?id=38P40gJPrI",
        },
        {
          label: "video",
          href: "https://youtube.com/watch?v=z-1LE2aNHak",
        },
        {
          label: "code",
          href: "https://github.com/lthilnklover/diffusion_lora",
        },
      ],
    },
    {
      title: "LoRA can Replace Time and Class Embeddings in Diffusion Probabilistic Models",
      journal: "NeurIPS 2023 Workshop on Diffusion Models",
      author: "Joo Young Choi, Jaesung Park, Inkyu Park, Jaewoong Cho, Albert No, Ernest Ryu",
      links: [{ label: "link", href: "https://nips.cc/virtual/2023/74885" }],
    },
    {
      title: "SAiD: Speech-driven Blendshape Facial Animation with Diffusion",
      journal: "arXiv preprint (2023)",
      author: "Inkyu Park, Jaewoong Cho",
      links: [
        { label: "paper", href: "https://arxiv.org/abs/2401.08655" },
        {
          label: "project page",
          href: "https://yunik1004.github.io/SAiD",
        },
        {
          label: "code and datasets",
          href: "https://github.com/yunik1004/SAiD",
        },
      ],
    },
    {
      title:
        "Efficient Neural Network Approximation of Robust PCA for Automated Analysis of Calcium Imaging Data",
      journal:
        "24th International Conference on Medical Image Computing & Computer Assisted Intervention (MICCAI '21)",
      author: "Seungjae Han, Eun-seo Cho, Inkyu Park, Kijung Shin, and Young-gyu Yoon",
      links: [
        { label: "paper", href: "https://arxiv.org/abs/2108.01665" },
        {
          label: "code and datasets",
          href: "https://github.com/NICALab/BEAR",
        },
        {
          label: "bib",
          href: "https://dblp.uni-trier.de/rec/conf/miccai/HanCPSY21.html?view=bibtex",
        },
      ],
    },
    {
      title: "SliceNStitch: Continuous CP Decomposition of Sparse Tensor Streams",
      journal: "37th IEEE International Conference on Data Engineering (ICDE '21)",
      author: "Taehyung Kwon*, Inkyu Park*, Dongjin Lee, and Kijung Shin",
      links: [
        { label: "paper", href: "https://arxiv.org/abs/2102.11517" },
        {
          label: "appendix",
          href: "https://github.com/DMLab-Tensor/SliceNStitch/blob/master/doc/supplementary.pdf",
        },
        { label: "video", href: "https://youtu.be/x5yiWLvPCFo" },
        {
          label: "slides",
          href: "http://dmlab.kaist.ac.kr/~kijungs/snsICDE2021.pdf",
        },
        {
          label: "code and datasets",
          href: "https://github.com/DMLab-Tensor/SliceNStitch",
        },
        {
          label: "bib",
          href: "https://dblp.uni-trier.de/rec/conf/icde/Kwon0LS21.html?view=bibtex",
        },
      ],
    },
  ];
</script>

<Card title="Publication" symbol="book">
  {#each publications as pub (pub.title)}
    <ItemPublication
      title={pub.title}
      journal={pub.journal}
      author={pub.author}
      links={pub.links}
    />
  {/each}
</Card>
