function chunk(array, chunkSize) {
  const chunks = []
  for (let index = 0; index < array.length; index += chunkSize) {
    myChunk = array.slice(index, index + chunkSize)
    chunks.push(myChunk)
  }

  const lastChunk = chunks[chunks.length - 1]
  if (lastChunk.length !== chunkSize) {
    chunks.pop()
    lastChunk.forEach((element, index) => {
      chunks[index].push(element)
    })
  }

  return chunks
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
  return array
}

module.exports = {
  chunk,
  shuffle,
}
