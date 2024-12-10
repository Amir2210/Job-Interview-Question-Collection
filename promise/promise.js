const myPromise = new Promise((res, rej) => {
  res('promise fulfilled')
})

myPromise.then((result) => {
  console.log(result)
})
