<script lang="ts">
  import { resolve } from "$app/paths";
  let current_year = new Date().getUTCFullYear();
</script>

<footer class="footer footer-center p-4 bg-base-300 text-base-content gap-2">
  <nav class="flex gap-6 text-sm">
    <a class="link link-hover opacity-70" href={resolve("/about")}>About</a>
    <a class="link link-hover opacity-70" href={resolve("/publication")}>Publication</a>
    <a class="link link-hover opacity-70" href={resolve("/gallery")}>Gallery</a>
  </nav>
  <p class="opacity-50 text-xs">Copyright {current_year}. yunik1004 All right reserved.</p>
</footer>
