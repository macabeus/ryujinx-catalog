<script>
  import { setContext } from 'svelte'
  import { writable } from 'svelte/store'
  import { key } from '../contexts/tagsFilter'
  import GameList from './GameList.svelte'
  import SearchGames from './SearchGames.svelte'
  import Tags from './Tags.svelte'

  export let allGames

  // List all tags
  const allTags = allGames
    .reduce((acc, current) => {
      current.tags.forEach((tag) => {
        acc.add(tag)
      })
      return acc
    }, new Set())

  // Tags filter logic
  const tagsFilter = writable([])

  setContext(key, {
    toggleTag: (tag) => {
      if ($tagsFilter.includes(tag)) {
        $tagsFilter = $tagsFilter.filter(i => i !== tag)
        return
      }

      $tagsFilter = [...$tagsFilter, tag]
    },
  })

  // Game list logic
  let gamesList = allGames

  const updateGameList = (event) => {
    gamesList = event.detail
  }
</script>

<style>
  .spacing-small {
    height: 4px;
  }

  .spacing-large {
    height: 16px;
  }
</style>

<SearchGames
  allGames={allGames}
  tagsFilter={$tagsFilter}
  on:update={updateGameList}
/>

<div class="spacing-small" />

<Tags tags={[...allTags]} />

<div class="spacing-large" />

<GameList
  games={gamesList}
/>
