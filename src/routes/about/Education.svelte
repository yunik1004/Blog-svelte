<script lang="ts">
	import Card from '$lib/Card.svelte';
	import ItemEducation from './ItemEducation.svelte';
</script>

<Card title="Education" symbol="university_hat">
	<ItemEducation
		degree="Master of Science (M.S)"
		school="Korea Advanced Institute of Science and Technology (KAIST)"
		period="Sep. 2019 - Aug. 2021"
	>
		<li>Major: Artificial Intelligence</li>
		<li>
			Advisor: Prof. Kijung Shin (
			<a class="link link-hover" href="https://sites.google.com/view/kaistdata">
				KAIST Data Mining Lab
			</a>
			)
		</li>
		<li>Thesis: Continuous CP Decomposition of Sparse Tensor Streams</li>
	</ItemEducation>
	<ItemEducation
		degree="Bachelor of Science (B.S)"
		school="Korea Advanced Institute of Science and Technology (KAIST)"
		period="Mar. 2014 - Feb. 2019"
	>
		<li>Major: Electrical Engineering</li>
		<li>Triple major: Computer Science and Engineering, Mathematical Science</li>
	</ItemEducation>
	<ItemEducation
		school="Gyeonggibuk Science High School"
		degree="High School Diploma"
		period="Mar. 2012 - Feb. 2014"
	/>
</Card>
