<script>
  import GameTeaser from './GameTeaser.svelte'
  export let games
  export let helpers
</script>

<style>
  .entries {
    display: grid;
    grid-template-columns: 1fr;
    margin: 3rem 0;
  }

  @media (min-width: 768px) {
    .entries {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      margin: 3rem 0;
    }
  }
</style>

<div class="entries">
  {#each games as game}
    <GameTeaser {game} {helpers} />
  {/each}
</div>
