<script>
  import GamesSection from '../../components/GamesSection.svelte';
  export let data, helpers

  let allGames = data.markdown.game.map(game => ({
    coverImage: game.frontmatter.coverImage,
    tags: game.frontmatter.tags,
    permalink: helpers.permalinks.game({ slug: game.slug })
      .replace('ryujinx-catalog/ryujinx-catalog', 'ryujinx-catalog'), // TODO: workaround until this PR be merged https://github.com/Elderjs/elderjs/pull/134
    title: game.frontmatter.title,
  }))
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

<GamesSection
  hydrate-client={{ allGames }}
/>
