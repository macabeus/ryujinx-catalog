<script>
  import VirtualList from '@sveltejs/svelte-virtual-list'
  import GameTeaser from './GameTeaser.svelte'
  import chunk from '../misc/chunk'

  export let games

  const gamesTableColumns = 3
</script>

<style>
  .row {
    display: flex;
    justify-content: space-around;
    margin-bottom: 50px;
  }
</style>

<VirtualList height='calc(100vh - 150px)' itemHeight={514} items={chunk(games, gamesTableColumns)} let:item>
  <div class='row'>
    {#each item as game}
      <GameTeaser game={game} />
    {/each}
  </div>
</VirtualList>
