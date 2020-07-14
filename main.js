let cars = ['BMW', 'Honda', 'Tesla', 'Jeep', 3]

const makeAllCaps = (words) => 
  new Promise ((resolve, reject) => {
    if (words.every(word => typeof word === 'string')){
      resolve(words.map(word => word.toUpperCase()))
    } else {
      reject(Error('No, the array you passed in contained an element that was not a string!'))
    }
  })

const sortWords = (words) => {
  return words.sort((a, b) => {
    if (a > b){
      return 1
    } else {
      return -1
    }
  })
}

makeAllCaps(cars)
  .then(words => sortWords(words))
  .then(result => console.log(result))
  .catch(error => console.log(error))
