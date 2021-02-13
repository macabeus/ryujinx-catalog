#!/usr/bin/env node
const fs = require('fs')

const toKebabCase = (text) =>
  text
    .toLowerCase()
    .replace(/[^A-Za-zÀ-ÖØ-öø-ÿ0-9: ]/g, '')
    .replace(/ |:/g, '-')
    .replace(/--/g, '-')

const bodyToStructureMap = (body) =>
  body.split('\n').reduce(
    (acc, currentLine, index) => {
      if (currentLine.startsWith('## ')) {
        const sectionName = currentLine.replace('## ', '')
        return {
          structureMap: {
            ...acc.structureMap,
            [sectionName]: [],
          },
          currentSection: sectionName,
        }
      }

      if (acc.currentSection === null) {
        console.warn(`Invalid issue body! No section at the line ${index}`)
        return acc
      }

      const nextStructureMap = {
        ...acc.structureMap,
        [acc.currentSection]: [...acc.structureMap[acc.currentSection], currentLine],
      }

      return { structureMap: nextStructureMap, currentSection: acc.currentSection }
    },
    { structureMap: {}, currentSection: null },
  ).structureMap

const generateFileContent = (issueUrl, name, labels, converImage, coverImagePositionY, screenshots, body) =>
  `---
title: '${name}'
slug: '${toKebabCase(name)}'
coverImage: '${converImage}'
coverImagePositionY: '${coverImagePositionY}'
issue: '${issueUrl}'
tags:
${labels.map((label) => `  - ${label}`).join('\n')}
---

${body.join('\n')}

## Screenshots

${screenshots.join('\n')}`

const regexCaptureIssueTitle = /(.*)\s-\s([0-9A-F]+)$/

if (require.main === module) {
  const eventName = process.argv[2]
  const issueUrl = process.argv[3]
  const issueTitle = process.argv[4]
  const issueLabels = process.argv[5].replace(/"/g, '').split('\n')
  const issueBody = process.argv[6].replace(/\r/g, '')

  if (regexCaptureIssueTitle.test(issueTitle) === false) {
    console.error(
      `Error: Issue title "${issueTitle}" doesn't follow the pattern. It should be the "Game Name - Title ID"`,
    )
    return
  }

  const [, titleName, titleId] = regexCaptureIssueTitle.exec(issueTitle)

  const structureMap = bodyToStructureMap(issueBody)

  const coverImage = structureMap['Cover'][0]
  const coverImagePositionY = structureMap['Cover'][1]
    ? structureMap['Cover'][1].replace('- Position Y: ', '')
    : 'center'
  const screenshots = structureMap['Screenshots']
  const description = structureMap['Description']

  const fileContent = generateFileContent(
    issueUrl,
    titleName,
    issueLabels,
    coverImage,
    coverImagePositionY,
    screenshots,
    description,
  )

  fs.writeFile(`./src/routes/game/${titleId}.md`, fileContent, () => {
    console.log('file written')
  })
}
