<script>
  import Tags from './Tags.svelte'

  export let game

  const borderColors = {
    crash: 'tomato',
    playable: 'rgb(13, 222, 156)',
    other: 'rgb(201, 209, 161)',
  }

  const borderColor = (
    game.tags.includes('playable')
      ? borderColors.playable
    : game.tags.includes('crash')
      ? borderColors.crash
    : borderColors.other
  )
</script>

<style>
  .cover-image {
    width: 300px;
    height: 400px;
    transition: transform 0.2s ease-out;
  }

  .cover-image:hover {
    transform: scale(0.975);
  }

  .entry {
    display: flex;
    flex-direction: column;

    height: 430px;
    border: 1px solid var(--border-color);
    padding: 1rem;
    border-radius: 1rem;

    position: relative;
  }

  .entry-background {
    background-image: var(--background-image);
    position: absolute;
    height: 98%;
    width: 98%;
    z-index: -1;
    left: 5px;
    top: 5px;
    border-radius: 1rem;
    filter: blur(10px) brightness(50%);
  }
</style>

<div class="entry" style={`--border-color: ${borderColor}`}>
  <div class="entry-background" style={`--background-image: url(${game.coverImage})`} />

  <a href={game.permalink}>
    <img class="cover-image" src={game.coverImage} alt="Game Cover" />
  </a>

  <Tags tags={game.tags} />
</div>
