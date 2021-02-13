<script>
  export let settingsPrefix
</script>

<style>
  header {
    display: flex;
    align-items: center;
    box-shadow: 0 .5rem 1rem rgba(0, 0, 0, .15);
  }

  header > * {
    padding: 0 0 0 1.5rem;
  }

  .logo {
    height: 30px;
    width: 30px;
  }

  h1 {
    font-style: normal;
    font-weight: 500;
    font-size: 1.25rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
    margin-top: 0;
    margin-bottom: 0;
  }
</style>

<header>
  <a href={settingsPrefix}>
    <img src={`${settingsPrefix}/logo.png`} class="logo" alt="Logo" />
  </a>
  <h1>Ryujinx - Compatibility Catalog</h1>
</header>
