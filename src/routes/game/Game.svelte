<script>
  import EditButton from '../../components/EditButton.svelte';
  import Tags from '../../components/Tags.svelte';
  export let data, settings; // data is mainly being populated from elderjs-plugin-markdown
  const { html, frontmatter } = data;
</script>

<style>
  h1 {
    margin-bottom: 10px;
  }

  .title {
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-top: 1rem;
    margin-bottom: 1rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid #ddd;
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
</style>

<svelte:head>
  <title>{frontmatter.title}</title>
</svelte:head>
<a href={settings.prefix}>&LeftArrow; Home</a>

<div class="title">
  <h1>{frontmatter.title}</h1>
  <EditButton url={frontmatter.issue} settingsPrefix={settings.prefix} />
</div>

<Tags tags={frontmatter.tags} />

<div class="body">
  {#if html}
    {@html html}
  {:else}
    <h1>Oops!! Markdown not found!</h1>
  {/if}
</div>
