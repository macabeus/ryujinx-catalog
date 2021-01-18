<script>
  import Tags from './Tags.svelte'

  export let game
  export let helpers
</script>

<style>
  .coverImage {
    width: 275px;
  }

  .entry {
    padding: 1rem;
    border: 1px solid #ddd;
    border-radius: 1rem;
    margin-bottom: 1rem;
    background: white;
  }

  @media (min-width: 768px) {
    .entry {
      margin-right: 1rem;
    }
  }
</style>

<div class="entry">
  <img class="coverImage" src={game.frontmatter.coverImage} alt="Game Cover" />
  <a href={helpers.permalinks.game({ slug: game.slug })}>{game.frontmatter.title}</a>

  <Tags tags={game.frontmatter.tags} />
</div>
