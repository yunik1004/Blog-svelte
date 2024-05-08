<script lang="ts">
  import Card from "$lib/Card.svelte";
  import ItemPublication from "./ItemPublication.svelte";
</script>

<Card title="Preprint" symbol="paper">
  <ItemPublication
    title="Simple Drop-in LoRA Conditioning on Attention Layers Will Improve Your Diffusion Model"
    journal="arXiv preprint (2024)"
    author="Joo Young Choi, Jaesung Park, Inkyu Park, Jaewoong Cho, Albert No, Ernest Ryu"
  >
    [
    <a class="link link-hover" href="https://arxiv.org/abs/2405.03958">paper</a>
    ]
  </ItemPublication>
  <ItemPublication
    title="SAiD: Speech-driven Blendshape Facial Animation with Diffusion"
    journal="arXiv preprint (2023)"
    author="Inkyu Park, Jaewoong Cho"
  >
    [
    <a class="link link-hover" href="https://arxiv.org/abs/2401.08655">paper</a>
    |
    <a class="link link-hover" href="https://yunik1004.github.io/SAiD">project page</a>
    |
    <a class="link link-hover" href="https://github.com/yunik1004/SAiD">code and datasets</a>
    ]
  </ItemPublication>
</Card>
