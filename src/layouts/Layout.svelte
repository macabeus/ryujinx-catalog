<script>
  import Header from '../components/Header.svelte'
  import Footer from '../components/Footer.svelte'
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

  /* footer related classes */
  .page-container {
    position: relative;
    min-height: 100vh;
  }

  .content-wrap {
    padding-bottom: 170px; /* footer height */
  }
</style>

<svelte:head>
  <link rel="stylesheet" href={`${settings.prefix}/style.css`} />
  <link rel="stylesheet" href="https://unpkg.com/balloon-css/balloon.min.css" />
  <link rel="icon" type="image/png" sizes="16x16" href={`${settings.prefix}/favicons/16x16.png`}>
  <link rel="icon" type="image/png" sizes="32x32" href={`${settings.prefix}/favicons/32x32.png`}>
  <link rel="icon" type="image/png" sizes="96x96" href={`${settings.prefix}/favicons/96x96.png`}>
  <link rel="apple-touch-icon" type="image/png" sizes="76x76" href={`${settings.prefix}/favicons/76x76.png`}>
  <link rel="apple-touch-icon" type="image/png" sizes="120x120" href={`${settings.prefix}/favicons/120x120.png`}>
</svelte:head>

<Header settingsPrefix={settings.prefix} />

<div class="page-container">
  <div class="content-wrap">
    {@html templateHtml}
  </div>

  <Footer settingsPrefix={settings.prefix} />
</div>
