<script>
	import "../app.css";
	import Navbar from "../components/navbar.svelte";
	import Footer from "../components/footer.svelte";
</script>

<Navbar />

<div class="container mx-auto p-10">
	<slot />
</div>

<Footer />
