const people = [
  { name: 'Alice', age: 30 },
  { name: 'Bob', age: 25 },
  { name: 'Charlie', age: 35 }
];

const ageMap = people.reduce((acc, person) => {
  acc[person.name] = person.age
  return acc
}, {})

console.log('ageMap:', ageMap)