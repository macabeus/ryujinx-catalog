<script>
  export let url, settingsPrefix
</script>

<style>
  img {
    border: none;
    height: 21px;
    width: 21px;
    filter: invert(100%) sepia(0%) saturate(7500%) hue-rotate(281deg) brightness(117%) contrast(99%);
  }
</style>

<a href={url} target="_blank">
  <img src={`${settingsPrefix}/icons/pencil.svg`} alt="Edit" />
</a>
