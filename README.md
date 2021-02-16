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
> node ./contentUpdater/index.js "opened" "ISSUE URL" "GAME NAME - TITLE ID" "\"TAG_ONE\"
\"TAG_TWO\"" "## Description
Description.
## Images
Square Image URL
Banner Image URL
- Position Y: background-position-y value <!-- optional -->
## Screenshots
\![image](Image Url)"
```

Example:

```
> node ./contentUpdater/index.js "opened" "https://github.com/macabeus/ryujinx-catalog/issues/1" "Example Dust: An Elysian Tail - 0100B6E00A420666" "\"ingame\"
\"gpu\"" "## Description
Game loads and goes in-game, but most initial menu graphics are now missing, and all other graphics seem corrupt.
## Images
https://img-eshop.cdn.nintendo.net/i/9eb5a62527c0783cf7cf72b7144f6abe53c2c25264a5a62258e21650830d8b40.jpg
https://img-eshop.cdn.nintendo.net/i/1123ea0e4079a8aaa32187dcaa94b8ef407e028f9b6b8d5ff944bd750f1ce347.jpg
- Position Y: 80%
## Screenshots
\![image](https://user-images.githubusercontent.com/9501115/107456115-8a2d3280-6b47-11eb-9d92-c0f0f6f1825f.png)"
```

### Deploy

```bash
> yarn run build
> yarn run deploy
```
