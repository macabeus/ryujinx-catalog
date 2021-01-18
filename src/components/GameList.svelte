<script>
  import VirtualList from '@sveltejs/svelte-virtual-list'
  import GameTeaser from './GameTeaser.svelte'
  export let games
</script>

<style>
  .row {
    display: flex;
    justify-content: space-around;
    margin-bottom: 50px;
  }
</style>

<VirtualList height='700px' itemHeight={534} items={games} let:item>
  <div class='row'>
    {#each item as game}
      <GameTeaser game={game} />
    {/each}
  </div>
</VirtualList>
