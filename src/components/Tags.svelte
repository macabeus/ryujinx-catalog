<script>
  import Tag from './Tag.svelte'

  export let tags
</script>

<style>
  :global(.tags > span:not(:first-child)) {
    margin-left: 5px;
  }
</style>

<div class="tags">
  {#each tags as tag}
    <Tag {tag} />
  {/each}
</div>
