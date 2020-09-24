function chunk(array, min, ideal, max) {
  const temp = []
  for (let index = 0; index < array.length; index += ideal) {
    const chunk = array.slice(index, index + ideal)
    temp.push(chunk)
  }

  const goodGroups = temp.filter((group) => group.length === ideal)
  const badGroup = temp.find((group) => group.length !== ideal)

  if (!badGroup) {
    return goodGroups
  }

  let count = 0
  while (badGroup.length && (badGroup.length < min || badGroup.length > max)) {
    let i = count++ % ideal
    if (badGroup.length && badGroup.length < min) {
      if (goodGroups[i].length - 1 >= min) {
        badGroup.push(goodGroups[i].pop())
      } else if (goodGroups[i].length + 1 <= max) {
        goodGroups[i].push(badGroup.pop())
      } else {
        console.log("impossible rules")
        break
      }
    }
  }

  const final = [...goodGroups]
  if (badGroup.length) {
    final.push(badGroup)
  }

  return final
}

function random(array) {
  return array[Math.floor(Math.random() * array.length)]
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
  random,
  shuffle,
}
