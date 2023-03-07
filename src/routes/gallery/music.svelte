<script lang="ts">
	import ItemMusic from './item_music.svelte';
</script>

<div class="card shadow-xl md:card-normal card-compact">
	<div class="card-body">
		<div class="flex card-title pb-10">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="2.0"
				stroke="currentColor"
				class="w-6 h-6 stroke-primary-focus"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z"
				/>
			</svg>

			<h1 class="text-3xl font-bold text-primary">Music Gallery</h1>
		</div>
		<ItemMusic
			title="Tenshi ni fureta yo!"
			credit="Arranged by Inkyu, feat. UNI (VOCALOID)"
			date="Dec. 2017"
			src="musics/Tenshi ni fureta yo! (Arranged by yunik1004).mp3"
		/>
		<ItemMusic
			title="Terror"
			credit="Arranged by Inkyu, feat. UNI (VOCALOID)"
			date="Jun. 2017"
			src="musics/Terror (Arrange by yunik1004).mp3"
		/>
	</div>
</div>
