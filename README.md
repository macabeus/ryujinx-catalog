# Ryujinx Catalog

Ryujinx Game List Compatibility.

Whenever an issue is opened, updated, or closed, a GitHub Action is launched to sync the website's content.

## Development

### Run

1 - Clone the repository

```
> git@github.com:macabeus/ryujinx-catalog.git
```

2 - Install the dependencies

```
> yarn install
```

3 - In a terminal, start the server

```
> yarn run dev:server
```

4 - And in other terminal, start the rollup

```
> yarn run dev:rollup
```

### Update a Content

> :warning: It's for development only, because the content should be syn with the issues - and never be creating one by hand

```
> node ./contentUpdater/index.js "opened" "GAME NAME - TITLE ID" "\"TAG_ONE\"
dquote> \"TAG_TWO\"" "BODY"
```

Example:

```
> node ./contentUpdater/index.js "opened" "Dust: An Elysian Tail - 0100B6E00A420000" "\"ingame\"
dquote> \"gpu\"" "Game loads and goes in-game, but most initial menu graphics are now missing, and all other graphics seem corrupt."
```

### Deploy

```bash
> yarn run build
> yarn run deploy
```
