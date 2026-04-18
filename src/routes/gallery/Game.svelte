<script lang="ts">
  import Card from "$lib/Card.svelte";
  import ItemGame from "./ItemGame.svelte";

  const games = [
    {
      title: "SoundIsWeapon",
      detail:
        "An immersive first-person horror escape game that uses sound as a core gameplay element",
      image: "https://img.itch.zone/aW1nLzIyMDcyMDU5LnBuZw==/347x500/9iJuQv.png",
      links: [{ label: "download (pw: 1111)", href: "https://yunik1004.itch.io/soundisweapon" }],
    },
    {
      title: "SuikaGamePlus",
      detail: "Replicated version of Suika game using Godot engine 4",
      image: "images/game/suika_game_plus.svg",
      links: [
        {
          label: "download",
          href: "https://yunik1004.itch.io/suikagameplus",
        },
        {
          label: "code",
          href: "https://github.com/yunik1004/SuikaGamePlus",
        },
      ],
    },
  ];
</script>

<Card title="Game" symbol="game">
  <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
    {#each games as game (game.title)}
      <ItemGame title={game.title} detail={game.detail} image={game.image} links={game.links} />
    {/each}
  </div>
</Card>
