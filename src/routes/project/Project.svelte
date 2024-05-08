<script lang="ts">
  import Card from "$lib/Card.svelte";
  import ItemProject from "./ItemProject.svelte";
</script>

<Card title="Project" symbol="rocket">
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
