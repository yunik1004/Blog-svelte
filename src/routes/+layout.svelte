<script>
	import '../app.css';
	import Navbar from '../components/navbar.svelte';
	import Footer from '../components/footer.svelte';
</script>

<div class="flex flex-col h-screen">
	<Navbar />

	<div class="container mx-auto p-10 grow">
		<slot />
	</div>

	<Footer />
</div>
