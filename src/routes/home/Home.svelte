<script>
  import GamesSection from '../../components/GamesSection.svelte';
  export let data, helpers

  let allGames = data.markdown.game.map(game => ({
    squareImage: game.frontmatter.squareImage,
    tags: game.frontmatter.tags,
    permalink: helpers.permalinks.game({ slug: game.slug })
      .replace('ryujinx-catalog/ryujinx-catalog', 'ryujinx-catalog'), // TODO: workaround until this PR be merged https://github.com/Elderjs/elderjs/pull/134
    title: game.frontmatter.title,
  }))
</script>

<style>
  .body {
    max-width: 1200px;
    margin: 0 auto;
    padding: 1rem;
  }
</style>

<svelte:head>
  <title>Ryujinx Catalog</title>
</svelte:head>

<div class="body">
  <GamesSection
    hydrate-client={{ allGames }}
  />
</div>
