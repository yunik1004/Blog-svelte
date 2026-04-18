<script lang="ts">
  import Card from "$lib/Card.svelte";
  import ItemMusic from "./ItemMusic.svelte";

  const musics = [
    {
      title: "천사를 만났어 (天使にふれたよ!)",
      credit: "Arranged by Inkyu, feat. UNI (VOCALOID)",
      date: "Dec. 2017",
      src: "musics/Tenshi ni fureta yo! (Arranged by yunik1004).mp3",
    },
    {
      title: "테러 (テロル)",
      credit: "Arranged by Inkyu, feat. UNI (VOCALOID)",
      date: "Jun. 2017",
      src: "musics/Terror (Arrange by yunik1004).mp3",
    },
  ];
</script>

<Card title="Music" symbol="music">
  <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
    {#each musics as music (music.title)}
      <ItemMusic title={music.title} credit={music.credit} date={music.date} src={music.src} />
    {/each}
  </div>
</Card>
