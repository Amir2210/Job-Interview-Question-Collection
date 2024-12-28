const map = new Map()
console.log('map:', map)

map.set('key1', 'value1'); // מפתח: מחרוזת
map.set(42, 'value2'); // מפתח: מספר
map.set({ id: 1 }, 'value3'); // מפתח: אובייקט

console.log('map:', map)

console.log(map.get('key1')); // 'value1'
console.log(map.get(42)); // 'value2'

map.delete(42); // מוחק את המפתח 42
console.log('map:', map)

console.log(map.has('key1')); // true
console.log(map.has(42)); // false (נמחק)

console.log(map.size); // 2

map.forEach((value, key) => {
  console.log(key, value);
});

// שימוש ב- for...of
for (const [key, value] of map) {
  console.log(key, value)
}

// שימוש ב for each
map.forEach((value, key) => {
  console.log(value, key)
})

