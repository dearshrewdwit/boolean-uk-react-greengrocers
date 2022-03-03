const alphabetically = (a,b) => {
    if (a.name < b.name) return -1
    if (a.name == b.name) return 0
    if (a.name > b.name) return 1
  }

const reverseAlphabetically = (a,b) => {
    if (a.name < b.name) return 1
    if (a.name == b.name) return 0
    if (a.name > b.name) return -1
  }

const byPrice = (a,b) => {
  return a.price-b.price
}

const pred = num => num-1

const succ = num => num+1

export {
  alphabetically,
  reverseAlphabetically,
  byPrice,
  pred,
  succ
}