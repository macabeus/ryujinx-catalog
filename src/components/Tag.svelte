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

<span class={`tag ${tag}`}>{tag}</span>
