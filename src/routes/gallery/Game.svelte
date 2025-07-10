<script lang="ts">
  import Card from "$lib/Card.svelte";
  import ItemGame from "./ItemGame.svelte";
</script>

<Card title="Game" symbol="game">
  <ItemGame
    title="SoundIsWeapon"
    detail="An immersive first-person horror escape game that uses sound as a core gameplay element"
    image="https://img.itch.zone/aW1nLzIyMDcyMDU5LnBuZw==/347x500/9iJuQv.png"
  >
    [
    <a class="link link-hover" href="https://yunik1004.itch.io/soundisweapon">download</a> (pw: 1111)
    ]
  </ItemGame>
  <ItemGame
    title="SuikaGamePlus"
    detail="Replicated version of Suika game using Godot engine 4"
    image="images/game/suika_game_plus.svg"
  >
    [
    <a class="link link-hover" href="https://yunik1004.itch.io/suikagameplus">download</a>
    |
    <a class="link link-hover" href="https://github.com/yunik1004/SuikaGamePlus">code</a>
    ]
  </ItemGame>
</Card>
