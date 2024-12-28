const tree = {
  id: 1,
  left: {
    id: 2,
    left: { id: 4, left: null, right: null },
    right: { id: 5, left: null, right: null },
  },
  right: {
    id: 3,
    left: { id: 6, left: null, right: null },
    right: { id: 7, left: null, right: null },
  },
}

function preOrderTraversal(node) {
  if (!node) return
  console.log(node.id)
  preOrderTraversal(node.left)
  preOrderTraversal(node.right)
}

function inOrderTraversal(node) {
  if (!node) return
  inOrderTraversal(node.left)
  console.log(node.id)
  inOrderTraversal(node.right)
}

function postOrderTraversal(node) {
  if (!node) return
  postOrderTraversal(node.left)
  postOrderTraversal(node.right)
  console.log(node.id)
}



// preOrderTraversal(tree)
// inOrderTraversal(tree)
postOrderTraversal(tree)
