#!/usr/bin/env node
const fs = require('fs')

const toCamelCase = (text) =>
  text
    .toLowerCase()
    .replace(/ (.)/g, (char) => char.toUpperCase())
    .replace(/ /g, '')

const getFileContent = (name, labels, body) =>
  `---
title: '${name}'
slug: '${toCamelCase(name)}'
coverImage: '/ryujinx-catalog/gamesCoverImage/paperMarioTheOrigamiKing.jpg'
tags:
${labels.map((label) => `  - ${label}`).join('\n')}
---

${body}`

const regexCaptureIssueTitle = /(.*)\s-\s([0-9A-F]+)$/

if (require.main === module) {
  const eventName = process.argv[2]
  const issueTitle = process.argv[3]
  const issueLabels = process.argv[4].replace(/"/g, '').split('\n')
  const issueBody = process.argv[5]

  if (regexCaptureIssueTitle.test(issueTitle) === false) {
    console.error(
      `Error: Issue title "${issueTitle}" doesn't follow the pattern. It should be the "Game Name - Title ID"`,
    )
    return
  }

  const [, titleName, titleId] = regexCaptureIssueTitle.exec(issueTitle)

  const fileContent = getFileContent(titleName, issueLabels, issueBody)

  fs.writeFile(`./src/routes/game/${titleId}.md`, fileContent, () => {
    console.log('file written')
  })
}
