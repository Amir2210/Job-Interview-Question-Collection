const xml = `
<body>
    <h1>Into JS - Playground project</h1>
    <h3>Score the JS Interview</h3>
    <div>
        <button>1</button>
        <button>2</button>
        <button>3</button>
    </div>
</body>
`

function parseXml(xml) {
  //return array of opening tags
  return xml.match(/<[^\/][^>]*>/g)
}

const arrayOfTags = parseXml(xml)

function countTags(arr) {
  return arr.reduce((acc, tag) => {
    if (acc[tag] === undefined) {
      acc[tag] = 1
    } else {
      acc[tag]++
    }
    return acc;
  }, {});
}

const mapObjectOfTags = countTags(arrayOfTags)
console.log('mapObjectOfTags:', mapObjectOfTags)
