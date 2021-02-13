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
    color: white;
    padding: 4px 4px 4px 32px;
    background: url('/ryujinx-catalog/icons/magnifyingGlass.svg') no-repeat scroll 4px 1px;
    width: calc(100% - 36px);
    border: none;
    border-bottom: 1px solid #c1c1c1;
    transition: border-bottom 0.6s linear;
  }

  .searchInput:focus{
    outline: none;
    border-bottom: 1px solid white;
  }

  .searchInput::placeholder {
    color: #c1c1c1;
  }
</style>

<input
  placeholder='Search'
  class='searchInput'
  bind:value={filter}
>
