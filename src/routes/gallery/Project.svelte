<script lang="ts">
  import Card from "$lib/Card.svelte";
  import ItemProject from "./ItemProject.svelte";
</script>

<Card title="Project" symbol="rocket">
  <ItemProject
    title="Maaang"
    job="Developer"
    period="Mar. 2026"
    description="Esolang that uses Maang and Sacher as the keywords."
  >
    [
    <a class="link link-hover" href="https://github.com/yunik1004/maaang">code</a>
    |
    <a class="link link-hover" href="https://yunik1004.github.io/maaang">website</a>
    ]
  </ItemProject>
  <ItemProject
    title="Sonetto"
    job="Developer"
    period="Mar. 2026"
    description="A statically-typed programming language inspired by Python, Rust, Go, and C/C++, built with Rust."
  >
    [
    <a class="link link-hover" href="https://github.com/yunik1004/sonetto">code</a>
    ]
  </ItemProject>
  <ItemProject
    title="English: 1999"
    job="Developer"
    period="Feb. 2026"
    description="Learn English through the story of Reverse: 1999"
  >
    [
    <a class="link link-hover" href="https://github.com/yunik1004/english1999">code</a>
    |
    <a class="link link-hover" href="https://yunik1004.github.io/english1999">website</a>
    |
    <a class="link link-hover" href="https://github.com/yunik1004/english1999/releases/tag/v0.1"
      >android app</a
    >
    ]
  </ItemProject>
  <ItemProject
    title="MoBERT: Morphological BERT for Korean"
    job="Researcher"
    period="Jun. 2020"
    description="Research the Korean BERT model for pre-training with morphological information"
  >
    [
    <a class="link link-hover" href="https://github.com/yunik1004/MoBERT">code</a>
    ]
  </ItemProject>
  <ItemProject
    title="Tell Me More About You: Cross-domain Recommendation System"
    job="Researcher · front-end programmer · UI/UX designer"
    period="Sep. 2019 - Dec. 2019"
    description="Research the cross-domain auto-encoder-based recommendation system"
  >
    [
    <a class="link link-hover" href="https://github.com/yunik1004/recommendation_web"
      >code (front-end)
    </a>
    ]
  </ItemProject>

  <ItemProject
    title="BlockTensor"
    job="Project manager · full-stack programmer · UI/UX designer"
    period="Sep. 2018 - Dec. 2018"
    description="Implement the Scratch-like interactive online programming service for deep learning
		using Vue.js, Tensorflow.js and Blockly"
  >
    [
    <a class="link link-hover" href="https://github.com/yunik1004/BlockTensor">code </a>
    ]
  </ItemProject>
</Card>
