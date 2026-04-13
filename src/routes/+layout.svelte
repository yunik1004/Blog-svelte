<script lang="ts">
  import "./layout.css";
  import favicon from "$lib/assets/favicon.png";
  import Navbar from "./navbar.svelte";
  import Footer from "./footer.svelte";

  let { children } = $props();
</script>

<svelte:head>
  <title>Inkyu's Blog</title>
  <link rel="shortcut icon" href={favicon} />
  <link rel="icon" href={favicon} />
  <meta name="description" content="Inkyu's blog" />
  <script lang="ts">
    const THEME_KEY = "theme";
    const LIGHT_THEME = "blue-archive";
    const DARK_THEME = "reverse1999";

    function detectDarkMode() {
      const theme = localStorage.getItem(THEME_KEY);
      const mediaQuery = matchMedia("(prefers-color-scheme: dark)");

      let isDark;
      if (theme === LIGHT_THEME || theme === DARK_THEME) {
        isDark = theme === DARK_THEME;
      } else {
        isDark = mediaQuery.matches;
      }

      return isDark;
    }

    function updateTheme() {
      const isDark = detectDarkMode();
      document.documentElement.setAttribute("data-theme", isDark ? DARK_THEME : LIGHT_THEME);
    }

    updateTheme();
  </script>
</svelte:head>

<div class="flex flex-col h-screen">
  <Navbar />

  <div class="container mx-auto max-w-screen-xl px-4 py-10 sm:px-10 grow">
    {@render children()}
  </div>

  <Footer />
</div>
