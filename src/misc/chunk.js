const chunk = (list, chunkSize) => {
  const chunksAmount = Math.ceil(list.length / chunkSize)
  const result = [...Array(chunksAmount)].map((_, i) => list.slice(chunkSize * i, chunkSize + chunkSize * i))

  return result
}

module.exports = chunk
