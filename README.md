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

Use the following pattern (the break lines matters):

```
> node ./contentUpdater/index.js "opened" "GAME NAME - TITLE ID" "\"TAG_ONE\"
\"TAG_TWO\"" "## Description
Description.
## Cover
Image URL
## Screenshots
\![image](Image Url)"
```

Example:

```
> node ./contentUpdater/index.js "opened" "Example Dust: An Elysian Tail - 0100B6E00A420666" "\"ingame\"
\"gpu\"" "## Description
Game loads and goes in-game, but most initial menu graphics are now missing, and all other graphics seem corrupt.
## Cover
https://user-images.githubusercontent.com/9501115/107456269-c82a5680-6b47-11eb-9396-ba15287f60e0.png
## Screenshots
\![image](https://user-images.githubusercontent.com/9501115/107456115-8a2d3280-6b47-11eb-9d92-c0f0f6f1825f.png)"
```

### Deploy

```bash
> yarn run build
> yarn run deploy
```
