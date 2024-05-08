<script lang="ts">
  import Card from "$lib/Card.svelte";
  import ItemEducation from "./ItemEducation.svelte";
</script>

<Card title="Education" symbol="university_hat">
  <ItemEducation
    degree="Master of Science (M.S)"
    school="Korea Advanced Institute of Science and Technology (KAIST)"
    period="Sep. 2019 - Aug. 2021"
  >
    <li>Major: Artificial Intelligence</li>
    <li>
      Advisor: <a class="link link-hover" href="https://kijungs.github.io">Prof. Kijung Shin </a>
      (
      <a class="link link-hover" href="https://sites.google.com/view/kaistdata">
        Data Mining Lab
      </a>
      )
    </li>
    <li>Thesis: Continuous CP Decomposition of Sparse Tensor Streams</li>
    <li>Government-sponsored scholarship</li>
  </ItemEducation>
  <ItemEducation
    degree="Bachelor of Science (B.S)"
    school="Korea Advanced Institute of Science and Technology (KAIST)"
    period="Mar. 2014 - Feb. 2019"
  >
    <li>Major: Electrical Engineering</li>
    <li>Triple degree 1: B.S. in Computer Science and Engineering</li>
    <li>Triple degree 2: B.S. in Mathematical Science</li>
  </ItemEducation>
  <ItemEducation
    school="Gyeonggibuk Science High School"
    degree="High School Diploma"
    period="Mar. 2012 - Feb. 2014"
  />
</Card>
