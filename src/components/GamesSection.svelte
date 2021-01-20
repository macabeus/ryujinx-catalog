<script>
  import GameList from './GameList.svelte'
  import SearchGames from './SearchGames.svelte'

  export let allGames

  let gamesList = allGames

  const updateGameList = (event) => {
    gamesList = event.detail
  }
</script>

<style>
  .spacing {
    height: 16px;
  }
</style>

<SearchGames
  allGames={allGames}
  on:update={updateGameList}
/>

<div class='spacing' />

<GameList games={gamesList} />
