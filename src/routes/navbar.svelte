<script lang="ts">
  import { onMount } from "svelte";
  import { themeChange } from "theme-change";

  let current_theme = "";

  onMount(() => {
    themeChange(false);
    const theme = window.localStorage.getItem("theme");
    if (theme) {
      current_theme = theme;
    } else {
      current_theme = "cupcake";
    }
  });
</script>

<div class="navbar bg-base-100">
  <div class="navbar-start">
    <a class="btn btn-ghost normal-case text-xl text-secondary" href="/">Inkyu Park</a>
  </div>
  <div class="navbar-end">
    <ul class="menu menu-horizontal p-0">
      <li>
        <label class="swap swap-rotate">
          <!-- this hidden checkbox controls the state -->
          <input
            type="checkbox"
            class="theme-controller"
            data-toggle-theme="halloween,cupcake"
            data-act-class="ACTIVECLASS"
            checked={current_theme === "cupcake"}
          />

          <!-- sun icon -->
          <svg
            class="swap-on"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0a3.75 3.75 0 0 1 7.5 0"
            />
          </svg>

          <!-- moon icon -->
          <svg
            class="swap-off"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75A9.75 9.75 0 0 1 8.25 6c0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25A9.75 9.75 0 0 0 12.75 21a9.753 9.753 0 0 0 9.002-5.998"
            />
          </svg>
        </label>
      </li>
    </ul>
    <ul class="menu menu-horizontal p-0 hidden sm:flex">
      <li><a href="/about">About</a></li>
      <li><a href="/project">Project</a></li>
      <li><a href="/gallery">Gallery</a></li>
    </ul>
    <div class="dropdown dropdown-end">
      <div tabindex="0" role="button" class="btn btn-ghost sm:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </div>
      <ul
        tabindex="-1"
        class="menu menu-compact dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
      >
        <li><a href="/about">About</a></li>
        <li><a href="/project">Project</a></li>
        <li><a href="/gallery">Gallery</a></li>
      </ul>
    </div>
  </div>
</div>
