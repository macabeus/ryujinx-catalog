<script>
  export let settingsPrefix
</script>

<style>
  footer {
    border-top: 1px solid #dee2e6;
    margin: 0 10vw;
    position: absolute;
    bottom: 0;
    width: calc(100% - 20vw);
    height: 170px;
    display: flex;
    justify-content: space-between;
  }

  footer > div {
    display: flex;
    flex-direction: column;
    padding-top: 3rem;
  }

  small {
    color: #6c757d;
    font-size: 80%;
    font-weight: 400;
  }

  .logo {
    height: 48px;
    width: 48px;
  }

  .section-title {
    font-size: 1.25rem;
    margin-top: 0;
    margin-bottom: .5rem;
    font-weight: 500;
  }

  .section-list {
    padding-left: 0;
    margin: 0;
    list-style: none;
  }

  .section-link {
    color: #6c757d;
    text-decoration: none;
  }
</style>

<footer>
  <div>
    <img src={`${settingsPrefix}/logo.png`} class="logo" alt="Logo" />
    <small>© 20XX</small>
  </div>

  <div>
    <h5 class="section-title">Project</h5>
    <ul class="section-list">
        <li><a class="section-link" href="https://ryujinx.org/" target="_blank">Website</a></li>
        <li><a class="section-link" href="https://blog.ryujinx.org/" target="_blank">Blog</a></li>
        <li><a class="section-link" href="https://ryujinx.org/contribute" target="_blank">Contribute</a></li>
    </ul>
  </div>

  <div>
    <h5 class="section-title">Resources</h5>
    <ul class="section-list">
        <li><a class="section-link" href="https://ryujinx.org/download" target="_blank">Download</a></li>
        <li><a class="section-link" href="https://github.com/Ryujinx/Ryujinx-Games-List/issues" target="_blank">Compatibility</a></li>
        <li><a class="section-link" href="https://github.com/Ryujinx/Ryujinx/wiki/Ryujinx-Setup-&amp;-Configuration-Guide" target="_blank">Setup &amp; Configuration Guide</a></li>
        <li><a class="section-link" href="https://github.com/Ryujinx/Ryujinx/wiki/Multiplayer-(LDN-Local-Wireless)-Guide" target="_blank">Local Wireless Guide</a></li>
    </ul>
  </div>

  <div>
    <h5 class="section-title">Social</h5>
    <ul class="section-list">
        <li><a class="section-link" href="https://patreon.com/Ryujinx" target="_blank">Patreon</a></li>
        <li><a class="section-link" href="https://github.com/Ryujinx/Ryujinx" target="_blank">GitHub</a></li>
        <li><a class="section-link" href="https://twitter.com/RyujinxEmu" target="_blank">Twitter</a></li>
        <li><a class="section-link" href="https://discord.gg/VkQYXAZ" target="_blank">Discord</a></li>
    </ul>
  </div>

  <div />
</footer>
