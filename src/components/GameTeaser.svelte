<script>
  export let game;
  export let helpers;
</script>

<style>
  .coverImage {
    width: 275px;
  }

  .tag {
    color: white;
    border-radius: 5px;
    padding: 1px 3px;
  }

  .tag:not(:last-child) {
    margin-right: 5px;
  }

  .tag.audio {
    background-color: #1A99D9;
  }

  .tag.playable {
    background-color: #0DDE9C;
  }
</style>

<div class="entry">
  <img class="coverImage" src={game.frontmatter.coverImage} alt="Game Cover" />
  <a href={helpers.permalinks.game({ slug: game.slug })}>{game.frontmatter.title}</a>

  {#each game.frontmatter.tags as tag}
    <span class={`tag ${tag}`}>{tag}</span>
  {/each}
</div>
