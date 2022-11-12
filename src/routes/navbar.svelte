<script>
	import { onMount } from 'svelte';
	import { themeChange } from 'theme-change';

	onMount(() => {
		themeChange(false);
	});
</script>

<div class="navbar bg-base-100">
	<div class="navbar-start">
		<a class="btn btn-ghost normal-case text-xl" href="/">Inkyu Park</a>
	</div>
	<div class="navbar-end">
		<ul class="menu menu-horizontal p-0">
			<li>
				<button
					class="btn btn-ghost"
					aria-label="change theme"
					data-toggle-theme="halloween,cupcake"
					data-act-class="ACTIVECLASS"
				>
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
							d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
						/>
					</svg>
				</button>
			</li>
		</ul>
		<ul class="menu menu-horizontal p-0 hidden sm:flex">
			<li><a href="/about">About</a></li>
			<li><a href="/project">Project</a></li>
		</ul>
		<div class="dropdown dropdown-end">
			<button class="btn btn-ghost sm:hidden" aria-label="menu">
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
			</button>
			<ul
				class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
			>
				<li><a href="/about">About</a></li>
				<li><a href="/project">Project</a></li>
			</ul>
		</div>
	</div>
</div>
