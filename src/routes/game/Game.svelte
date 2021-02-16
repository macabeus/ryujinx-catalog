<script>
  import EditButton from '../../components/EditButton.svelte';
  import Tags from '../../components/Tags.svelte';
  export let data, settings; // data is mainly being populated from elderjs-plugin-markdown
  const { html, frontmatter } = data;
</script>

<style>
  .banner-container {
    height: 360px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 2px 4px -1px rgb(0 0 0 / 20%), 0 4px 5px 0 rgb(0 0 0 / 14%), 0 1px 10px 0 rgb(0 0 0 / 12%);
  }

  :global(.banner-background) {
    position: absolute;
    height: 100%;
    width: 100%;
    filter: brightness(0.4);
    object-fit: cover;
    object-position: 100% var(--banner-position-y);
    background-position-y: 50%;
    z-index: -1;
  }

  .body {
    max-width: 900px;
    margin: 0 auto;
    padding: 1rem;
  }

  .body-preface {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  :global(h2) {
    margin-top: 2rem;
  }

  :global(pre) {
    background: #eee;
    padding: 1rem;
    border-radius: 1rem;
  }

  :global(blockquote) {
    margin: 0;
    background: #ddd;
    padding: 3px 1.5rem 3px 3rem;
    position: relative;
    border-radius: 1rem;
  }
  :global(blockquote:after) {
    content: '>';
    color: #aaa;
    font-size: 30px;
    position: absolute;
    top: 33%;
    left: 1rem;
  }

  :global(blockquote p) {
    padding: 0;
  }

  :global(.body img) {
    max-width: 900px;
  }

  :global(.body h1) {
    margin-bottom: 10px;
  }

  :global(.body pre) {
    color: #555;
    overflow: scroll;
  }
</style>

<svelte:head>
  <title>{frontmatter.title}</title>
</svelte:head>

<div class="banner-container">
  <div class="banner-background" style={`--banner-position-y: ${frontmatter.bannerPositionY}`}>
    <img
      class="banner-background"
      src={frontmatter.bannerImage}
      alt="Game Banner"
      referrerPolicy="no-referrer"
    />
  </div>

  <h1>{frontmatter.title}</h1>
</div>

<div class="body">
  <div class="body-preface">
    <Tags tags={frontmatter.tags} />
    <EditButton url={frontmatter.issue} settingsPrefix={settings.prefix} />
  </div>

  {#if html}
    {@html html}
  {:else}
    <h1>Oops!! Markdown not found!</h1>
  {/if}
</div>
