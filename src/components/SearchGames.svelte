<script>
  import { createEventDispatcher } from 'svelte'

  export let allGames

  const dispatch = createEventDispatcher()

  let filter = ''

  $: if (filter === '') {
    dispatch('update', allGames)
  } else {
    const gamesFiltered = allGames.filter(game => game.title.includes(filter))
    dispatch('update', gamesFiltered)
  }
</script>

<style>
  .searchInput {
    padding: 4px 4px 4px 32px;
    background: url('/icons/magnifyingGlass.svg') no-repeat scroll 4px 1px;
    width: calc(100% - 36px);
    border: none;
    border-bottom: 1px solid rgba(16, 16, 16, 0.95);
    transition: border-bottom 0.6s linear;
  }

  .searchInput:focus{
    outline: none;
    border-bottom: 1px solid rgba(26, 91, 145, 0.95);
  }
</style>

<input
  placeholder='Search'
  class='searchInput'
  bind:value={filter}
>
