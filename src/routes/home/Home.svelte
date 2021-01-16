<script>
  import GameTeaser from '../../components/GameTeaser.svelte'
  export let data, helpers
</script>

<style>
  .banner {
    padding: 1rem 2rem;
    background: #eee;
    border-radius: 2rem;
    margin-bottom: 1rem;
  }
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
    :global(.entries .entry) {
      margin-right: 1rem;
    }
  }

  :global(.entry) {
    padding: 1rem;
    border: 1px solid #ddd;
    border-radius: 1rem;
    margin-bottom: 1rem;
    background: white;
  }
</style>

<svelte:head>
  <title>Ryujinx Catalog</title>
</svelte:head>

<div class="banner">
  <h1>Ryujinx Catalog</h1>
  <p>Check the game compatibility below</p>
</div>

<div class="entries">
  {#each data.markdown.game as game}
    <GameTeaser {game} {helpers} />
  {/each}
</div>
