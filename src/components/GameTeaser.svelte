<script>
  import Tags from './Tags.svelte'

  export let game
</script>

<style>
  .coverImage {
    width: 300px;
    height: 400px;
  }

  .entry {
    display: flex;
    flex-direction: column;

    height: 450px;
    border: 1px solid #ddd;
    padding: 1rem;
    border-radius: 1rem;
    background: white;
  }
</style>

<div class="entry">
  <img class="coverImage" src={game.coverImage} alt="Game Cover" />
  <a href={game.permalink}>{game.title}</a>

  <Tags tags={game.tags} />
</div>
