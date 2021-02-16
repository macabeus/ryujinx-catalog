<script>
  import VirtualList from '@sveltejs/svelte-virtual-list'
  import GameTeaser from './GameTeaser.svelte'
  import chunk from '../misc/chunk'

  export let games

  const gamesTableColumns = 4
</script>

<style>
  :global(.virtual-list-container > *) {
    scrollbar-color: #555561 #808087;
    scrollbar-width: thin;
  }

  .row {
    display: flex;
    justify-content: space-around;
    margin-bottom: 50px;
  }
</style>

{#if games.length === 0}
  No game to list. Try changing your search.
{/if}

<div class="virtual-list-container">
  <VirtualList height='calc(100vh - 150px)' itemHeight={325} items={chunk(games, gamesTableColumns)} class='container' let:item>
    <div class='row'>
      {#each item as game}
        <GameTeaser game={game} />
      {/each}
    </div>
  </VirtualList>
</div>
