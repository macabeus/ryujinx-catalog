<script>
  export let tag
</script>

<style>
  .tag {
    color: white;
    border-radius: 5px;
    padding: 1px 3px;
  }

  .tag.audio {
    background-color: #1A99D9;
  }

  .tag.playable {
    background-color: #0DDE9C;
  }
</style>

<span class={`tag ${tag}`}>{tag}</span>
