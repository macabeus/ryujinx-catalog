<script>
  import { getContext } from 'svelte'
  import { createEventDispatcher } from 'svelte'
  import { key } from '../contexts/tagsFilter'

  export let allGames, tagsFilter

  const { toggleTag } = getContext(key)

  const onTagClick = (tag) =>
    toggleTag(tag)

  const dispatch = createEventDispatcher()

  let inputFilter = ''

  $: if (inputFilter === '' && tagsFilter.length === 0) {
    dispatch('update', allGames)
  } else {
    const inputFilterLowerCase = inputFilter.toLowerCase()
    const gamesFiltered = allGames
      .filter(game =>
        (tagsFilter.length === 0 || tagsFilter.every(tag => game.tags.includes(tag))) &&
        (inputFilterLowerCase.length === 0 || game.title.toLowerCase().includes(inputFilterLowerCase))
      )
    dispatch('update', gamesFiltered)
  }
</script>

<style>
  .container {
    display: flex;

    border-bottom: 1px solid #b1b1b1;
    transition: border-bottom 0.5s linear;
    height: 30px;
  }

  .container:focus-within {
    border-bottom: 1px solid white;
  }

  .icon {
    margin-right: 5px;
    filter: invert(100%) sepia(0%) saturate(2%) hue-rotate(99deg) brightness(106%) contrast(101%);
    height: 25px;
  }

  .tag {
    border: none;
    outline: none;

    margin-right: 5px;
    border-radius: 0.5rem;
    padding: 0.25rem;

    background-color: #45454e;
    color: white;
    white-space: nowrap;

    cursor: pointer;

    transition: filter 0.2s ease-out;
  }

  .tag:hover {
    filter: brightness(120%);
  }

  .searchInput {
    color: white;
    background-color: transparent;
    border: none;
    width: 100%;
  }

  .searchInput:focus{
    outline: none;
  }

  .searchInput::placeholder {
    color: #c1c1c1;
  }
</style>

<div class="container">
  <img src="/ryujinx-catalog/icons/magnifyingGlass.svg" class="icon" alt="Search" />

  {#each tagsFilter as tag}
    <button
      class="tag"
      on:click={() => onTagClick(tag)}
    >
      {tag} ×
    </button>
  {/each}

  <input
    placeholder="Search"
    class="searchInput"
    bind:value={inputFilter}
  >
</div>
