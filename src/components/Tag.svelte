<script>
  import { getContext } from 'svelte'
  import { key } from '../contexts/tagsFilter'

  export let tag

  const tagsFilterContext = getContext(key)

  const hasTagsFilterContext = (tagsFilterContext !== undefined)

  const onTagClick = () =>
    tagsFilterContext.toggleTag(tag)
</script>

<style>
  .tag {
    border: none;
    outline: none;

    margin-right: 0.45rem;
    border-radius: 5px;
    padding: 1px 3px;

    color: white;
    font-size: 0.9rem;

    transition: filter 0.2s ease-out;
  }

  .tag.can-filter {
    cursor: pointer;
  }

  .tag.can-filter:hover {
    filter: brightness(120%);
  }

  .tag.audio {
    background-color: #1A99D9;
  }

  .tag.playable {
    background-color: #0DDE9C;
  }

  .tag.crash {
    background-color: #FF6347;
  }

  .tag.boots {
    background-color: #C9D1A1;
  }

  .tag.gpu {
    background-color: #A739ED;
  }

  .tag.slow {
    background-color: #E0604D;
  }

  .tag.menus {
    background-color: #B6CC78;
  }

  .tag.regression {
    background-color: #E0795C;
  }

  .tag.ingame {
    background-color: #8EE08A;
  }
</style>

<button
  class={`tag ${tag} ${hasTagsFilterContext && 'can-filter'}`}
  disabled={hasTagsFilterContext === false}
  on:click={onTagClick}
>
  {tag}
</button>
