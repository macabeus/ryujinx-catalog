<script>
  import Tags from './Tags.svelte'

  export let game

  const borderColors = {
    crash: 'tomato',
    playable: 'rgb(13, 222, 156)',
    other: 'rgb(201, 209, 161)',
  }

  let borderColor
  $: borderColor = (
    game.tags.includes('playable')
      ? borderColors.playable
    : game.tags.includes('crash')
      ? borderColors.crash
    : borderColors.other
  )
</script>

<style>
  .square-image {
    width: 256px;
    height: 256px;
    transition: transform 0.2s ease-out;
  }

  .square-image:hover {
    transform: scale(0.975);
  }

  .entry {
    display: flex;
    flex-direction: column;

    border: 1px solid var(--border-color);
    padding: 1rem;
    border-radius: 1rem;

    position: relative;
  }

  .entry-background {
    position: absolute;
    height: 100%;
    width: 100%;
    z-index: -1;
    border-radius: 1rem;
    filter: blur(10px) brightness(50%);
    transform: scale(0.95);
    top: 0;
    left: 0;
  }

  .entry-background-image {
    height: 100%;
    width: 100%;
  }
</style>

<div class="entry" style={`--border-color: ${borderColor}`}>
  <div class="entry-background">
    <img class="entry-background-image" src={game.squareImage} alt="Game Background" referrerPolicy="no-referrer" />
  </div>

  <a href={game.permalink}>
    <img class="square-image" src={game.squareImage} alt="Game" referrerPolicy="no-referrer" />
  </a>

  <Tags tags={game.tags} />
</div>
