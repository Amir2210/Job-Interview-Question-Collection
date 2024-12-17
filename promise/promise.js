// A Promise in JavaScript is an object representing the eventual completion (or failure) of an asynchronous
//  operation and its resulting value. It's a way to handle asynchronous operations more elegantly than
//   traditional callback functions, making your code more readable and maintainable.

// States:
// Pending: Initial state, neither fulfilled nor rejected.   
// Fulfilled: Operation completed successfully.   
// Rejected: Operation failed. 

// Methods:
// then(): Used to handle the fulfilled state of the promise. It takes two optional arguments:
// A callback function that receives the resolved value.   
// A callback function that receives the rejection reason.   
// catch(): Used to handle the rejected state of the promise.
//  It takes a single callback function that receives the rejection reason.

const myPromiseSuccess = new Promise((res, rej) => {
  res('promise fulfilled')
})

myPromiseSuccess.then((result) => {
  console.log(result)
})


const myPromiseFail = new Promise((res, rej) => {
  rej('Promise Rejected')
})

myPromiseFail.then((result) => {
  console.log('Promise Success')
}).catch((result) => {
  console.log(result)
})

const chainPromise = new Promise((res, rej) => {
  2 > 1 ? res(2) : rej('ERROR!')
})

chainPromise.then((result) => {
  console.log(result)
  return result
}).then((result) => {
  console.log(`result + 1: ${result + 1}`)
}).catch((err) => {
  console.log(err)
})


// async await example
const fetchPokemon = async (pokemonName) => {
  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    console.log(res)
    const pokemonData = await res.json()
    console.log(pokemonData)
  } catch (error) {
    console.log('ERROR!')
    console.log('error:', error)
  }
}

fetchPokemon('charizard')
