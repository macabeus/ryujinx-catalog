<script>
  import GameList from '../../components/GameList.svelte'
  export let data, helpers
</script>

<style>
  .banner {
    padding: 1rem 2rem;
    background: #eee;
    border-radius: 2rem;
    margin-bottom: 1rem;
  }
</style>

<svelte:head>
  <title>Ryujinx Catalog</title>
</svelte:head>

<div class="banner">
  <h1>Ryujinx Catalog</h1>
  <p>Check the game compatibility below</p>
</div>

<GameList games={data.markdown.game} {helpers} />
