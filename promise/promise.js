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
