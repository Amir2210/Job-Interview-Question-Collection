const tree = {
  id: 1,
  name: "Root",
  children: [
    {
      id: 2,
      name: "Child 1",
      children: [
        {
          id: 4,
          name: "Grandchild 1",
          children: [{ id: 5, name: 'GrandGrandChild 1', children: [] }],
        },
      ],
    },
    {
      id: 3,
      name: "Child 2",
      children: [{ id: 6, name: 'Grandchild 2', children: [] }],
    },
  ],
}

// DFS: מתאים למצבים שבהם חשוב להעמיק ולבדוק ענף אחד עד הסוף.
function findNode(tree, trackId) {

  if (tree.id === trackId) {
    return tree
  }

  for (const child of tree.children) {
    const result = findNode(child, trackId)
    if (result) {
      return result
    }
  }
  return null
}


const result = findNode(tree, 3)
// console.log(result)



//כל פעם בודקים אם לצומת יש ילדים אם כן נבדוק אותם גם וכן הלאה
function findNodeBFS(tree, trackId) {
  const queue = [tree]

  while (queue.length > 0) {
    const curr = queue.shift()
    if (curr.id === trackId) {
      return curr
    }
    queue.push(...curr.children)
  }
  return null
}

// בדיקה של הפונקציה
const resultBFS = findNodeBFS(tree, 6);
console.log(resultBFS)



