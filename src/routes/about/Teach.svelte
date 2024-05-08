<script lang="ts">
  import Card from "$lib/Card.svelte";
  import ItemTeach from "./ItemTeach.svelte";
</script>

<Card title="Teaching Experience" symbol="school">
  <ItemTeach title="Teaching Assistant @ KAIST">
    <li>
      AI506: Data Mining and Search (
      <a
        class="link link-hover opacity-75"
        href="https://sites.google.com/view/ai506-2020spring/home"
        >Spring 2020
      </a>
      )
    </li>
    <li>
      AI607: Graph Mining and Social Network Analysis (
      <a class="link link-hover opacity-75" href="https://sites.google.com/view/ai607-2019fall/home"
        >Fall 2019
      </a>,
      <a class="link link-hover opacity-75" href="https://sites.google.com/view/ai607-2020fall/home"
        >Fall 2020
      </a>
      )
    </li>
    <li>AI611: Deep Reinforcement Learning (<span class="opacity-75">Spring 2021</span>)</li>
  </ItemTeach>
  <ItemTeach title="Teaching Assistant @ Samsung">
    <li>
      Samsung DS AI (Natural Language Processing) Lecture (
      <span class="opacity-75"> Sep. 2019 </span>
      )
    </li>
    <li>Samsung DS - KAIST AI Expert Program (<span class="opacity-75">Jul. 2020</span>)</li>
    <li>Samsung Electronics AI Specialist (<span class="opacity-75">Sep. 2020</span>)</li>
  </ItemTeach>
  <ItemTeach title="Tutor">
    <li>
      KAIST Undergraduate Research (<span class="opacity-75">Winter 2020</span>,
      <span class="opacity-75">Spring 2021</span>)
    </li>
  </ItemTeach>
</Card>
