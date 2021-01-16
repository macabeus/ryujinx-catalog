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
coverImage: '/gamesCoverImage/paperMarioTheOrigamiKing.jpg'
tags:
${labels.map((label) => `  - ${label}`).join('\n')}
---

${body}`

if (require.main === module) {
  const eventName = process.argv[2]
  const issueName = process.argv[3]
  const issueLabels = process.argv[4].replace(/"/g, '').split('\n')
  const issueBody = process.argv[5]

  fs.writeFile(
    `./src/routes/game/${toCamelCase(issueName)}.md`,
    getFileContent(issueName, issueLabels, issueBody),
    () => {
      console.log('file written')
    },
  )
}
