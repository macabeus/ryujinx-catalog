<script>
  export let url, settingsPrefix
</script>

<style>
  img {
    border: none;
    height: 21px;
    width: 21px;
    filter: invert(18%) sepia(29%) saturate(1741%) hue-rotate(161deg) brightness(100%) contrast(99%);
  }
</style>

<a href={url} target="_blank">
  <img src={`${settingsPrefix}/icons/pencil.svg`} alt="Edit" />
</a>
