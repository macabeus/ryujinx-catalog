<script>
  import Header from '../components/Header.svelte'
  export let templateHtml, settings
</script>

<style>
  :global(h1) {
    font-style: italic;
  }
  :root {
    --balloon-color: #06395a;
    --balloon-font-size: 14px;
  }
</style>

<svelte:head>
  <link rel="stylesheet" href={`${settings.prefix}/style.css`} />
  <link rel="stylesheet" href="https://unpkg.com/balloon-css/balloon.min.css" />
</svelte:head>

<Header settingsPrefix={settings.prefix} />

{@html templateHtml}
