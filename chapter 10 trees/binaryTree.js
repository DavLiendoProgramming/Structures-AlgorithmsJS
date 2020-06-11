class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      let currentNode = this.root;
      while (true) {
        if (value < currentNode.value) {
          //LEFT
          if (!currentNode.left) {
            currentNode.left = newNode;
            return this;
          }
          currentNode = currentNode.left;
        } else {
          //RIGHT
          if (!currentNode.right) {
            currentNode.right = newNode;
            return this;
          }
          currentNode = currentNode.right;
        }
      }
    }
  }
  lookup(value) {
    let currentNode = this.root;
    if (!this.root) {
      return false;
    }
    while (currentNode) {
      if (currentNode.value === value) {
        return currentNode;
      }
      //Go left
      else if (value < currentNode.value) {
        currentNode = currentNode.left;
      }
      //Go right
      else if (value > currentNode.value) {
        currentNode = currentNode.right;
      }
    }
    return false;
  }

  remove(value) {
    if (!this.root) {
      return false;
    }
    let currentNode = this.root;
    let parentNode = null;
    while (currentNode) {
      if (value < currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.rigth;
      } else if (currentNode.value === value) {
        // No right child
        if (currentNode.right === null) {
          if (parentNode === null) {
            return this.root;
          } else {
            // If parent > current value, make current value left child
            //a child of parent

            if (currentNode.value < parentNode.value) {
              parentNode.left = currentNode.left;
            } // If parent < current value, make current value right child
            // a child of parent
            else if (currentNode.value > parentNode.value) {
              parentNode.right = currentNode.right;
            }
          }
        } // Right child which doesnt have a left child
        else if (currentNode.right.left === null) {
          if (parentNode === null) {
            this.root = currentNode.left;
          } else {
            currentNode.right.left = currentNode.left;

            // If parent > current, make right child of the left the parent

            if (currentNode.value < parentNode.value) {
              parentNode.left = currentNode.right;
            } // If parent < current, make right child  a right child of the parent
            else if (currentNode.value > parentNode.value) {
              parentNode.right = currentNode.right;
            }
          }
        } //Right child that  has a left child
        else {
          //find the Right child's left most child
          let leftmost = currentNode.right.left;
          let leftmostParent = currentNode.right;
          while (leftmost.left !== null) {
            leftmostParent = leftmost;
            leftmost = leftmost.left;
          }

          //Parent's left subtree is now leftmost's right subtree
          leftmostParent.left = leftmost.right;
          leftmost.left = currentNode.left;
          leftmost.right = currentNode.right;

          if (parentNode === null) {
            this.root = leftmost;
          } else {
            if (currentNode.value < parentNode.value) {
              parentNode.left = leftmost;
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = leftmost;
            }
          }
        }
      }
      return true;
    }
  }
}

//To verify

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);

JSON.stringify(traverse(tree.root));
console.log(tree.lookup(30));
