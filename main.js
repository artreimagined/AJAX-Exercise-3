let cars = ['Jeep', 'Honda', 'Tesla', 'BMW'];

const makeAllCaps = (words) => new Promise ((resolve, reject) => {
    if (words.every(word => typeof word === 'string')){
      resolve(words.map(word => word.toUpperCase()));
    } else {
      reject(Error('One your elements are a string...'));
    }
  });

const sortWords = (words) => {
  return words.sort((a, b) => {
    if (a > b){
      return 1;
    } else {
      return -1;
    }
  })
}

makeAllCaps(cars)
  .then(words => sortWords(words))
  .then(result => console.log(result))
  .catch(error => console.log(error))error))
