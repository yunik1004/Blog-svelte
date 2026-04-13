<script lang="ts">
  import Card from "$lib/Card.svelte";
  import ItemProject from "./ItemProject.svelte";

  const projects = [
    {
      title: "Regulus",
      period: "Apr. 2026",
      description: "A lightweight digital audio workstation (DAW).",
      links: [
        { label: "code", href: "https://github.com/yunik1004/regulus" },
        { label: "download", href: "https://github.com/yunik1004/regulus/releases" },
      ],
    },
    {
      title: "Akashic",
      period: "Apr. 2026",
      description: "A lightweight text editor for writers.",
      links: [
        { label: "code", href: "https://github.com/yunik1004/akashic" },
        { label: "download", href: "https://github.com/yunik1004/akashic/releases" },
      ],
    },
    {
      title: "NeneEngine",
      period: "Mar. 2026",
      description: "A small 2D/3D game engine in Rust.",
      links: [{ label: "code", href: "https://github.com/yunik1004/NeneEngine" }],
    },
    {
      title: "Maaang",
      period: "Mar. 2026",
      description: "Esolang that uses Maang and Sacher as the keywords.",
      links: [
        { label: "code", href: "https://github.com/yunik1004/maaang" },
        { label: "website", href: "https://yunik1004.github.io/maaang" },
      ],
    },
    {
      title: "Sonetto",
      period: "Mar. 2026",
      description:
        "A statically-typed programming language inspired by Python, Rust, Go, and C/C++, built with Rust.",
      links: [{ label: "code", href: "https://github.com/yunik1004/sonetto" }],
    },
    {
      title: "English: 1999",
      period: "Feb. 2026",
      description: "Learn English through the story of Reverse: 1999",
      links: [
        { label: "code", href: "https://github.com/yunik1004/english1999" },
        { label: "website", href: "https://yunik1004.github.io/english1999" },
        {
          label: "android app",
          href: "https://github.com/yunik1004/english1999/releases/tag/v0.1",
        },
      ],
    },
    {
      title: "MoBERT: Morphological BERT for Korean",
      period: "Jun. 2020",
      description: "Research the Korean BERT model for pre-training with morphological information",
      links: [{ label: "code", href: "https://github.com/yunik1004/MoBERT" }],
    },
    {
      title: "Tell Me More About You: Cross-domain Recommendation System",
      period: "Sep. 2019 - Dec. 2019",
      description: "Research the cross-domain auto-encoder-based recommendation system",
      links: [
        { label: "code (front-end)", href: "https://github.com/yunik1004/recommendation_web" },
      ],
    },
    {
      title: "BlockTensor",
      period: "Sep. 2018 - Dec. 2018",
      description:
        "Implement the Scratch-like interactive online programming service for deep learning using Vue.js, Tensorflow.js and Blockly",
      links: [{ label: "code", href: "https://github.com/yunik1004/BlockTensor" }],
    },
  ];
</script>

<Card title="Project" symbol="rocket">
  <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
    {#each projects as project (project.title)}
      <ItemProject
        title={project.title}
        period={project.period}
        description={project.description}
        links={project.links}
      />
    {/each}
  </div>
</Card>
