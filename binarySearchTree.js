const Queue = require('./queue.js');

class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}


class BinarySearchTree {
  constructor(rootValue) {
    this.root = new Node(rootValue);
  }

  insert(value, currentNode = this.root) {
    if (value < currentNode.value) {
      if (currentNode.left) return this.insert(value, currentNode.left);
      currentNode.left = new Node(value);
    }
    else {
      if (currentNode.right) return this.insert(value, currentNode.right);
      currentNode.right = new Node(value);
    }
  }


  contains(value, currentNode = this.root) {
    if (currentNode.value === value) return true;

    if (value < currentNode.value) {
      if (currentNode.left) return this.contains(value, currentNode.left);
      return false;
    }
    else {
      if (currentNode.right) return this.contains(value, currentNode.right);
      return false;
    }
  }


  delete(value, currentNode = this.root, currentNodeParent = null) {
    if (value === currentNode.value) {
      if (currentNode.left && currentNode.right) {
        const inOrderTravArr = this.inOrderTrav();
        const inOrderTravSuccNodeVal = inOrderTravArr[inOrderTravArr.findIndex((n) => n.value === value) + 1].value;
        this.delete(inOrderTravSuccNodeVal);
        currentNode.value = inOrderTravSuccNodeVal;
        return true;
      };
      if (currentNode.left || currentNode.right) {
        const onlyChildNode = (currentNode.left || currentNode.right);
        currentNode.value = onlyChildNode.value;
        return removeChild(currentNode, onlyChildNode);
      }
      return removeChild(currentNodeParent, currentNode);
    }
    if (value < currentNode.value) return this.delete(value, currentNode.left, currentNode);
    if (value > currentNode.value) return this.delete(value, currentNode.right, currentNode);
    return false;


    function removeChild(parentNode, childNode) {
      if (parentNode.left.value === childNode.value) {
        parentNode.left = null;
        return true;
      }
      if (parentNode.right.value === childNode.value) {
        parentNode.right = null;
        return true;
      }
      return false;
    }
  }


  inOrderTrav(currentNode = this.root) {
    //implemented using a array<node> instead of simply logging values in order to use in the delete operation
    let nodeArr = [];
    next(currentNode);
    return nodeArr;

    function next(node) {
      if (node.left) next(node.left);
      nodeArr.push(node);
      if (node.right) next(node.right);
    }
  }

  preOrderTrav(currentNode = this.root) {
    console.log(currentNode.value);
    if (currentNode.left) this.preOrderTrav(currentNode.left);
    if (currentNode.right) this.preOrderTrav(currentNode.right);
  }

  postOrderTrav(currentNode = this.root) {
    if (currentNode.left) this.postOrderTrav(currentNode.left);
    if (currentNode.right) this.postOrderTrav(currentNode.right);
    console.log(currentNode.value);
  }


  breadthTrav(currentNode = this.root) {
    let q = new Queue();
    nextNode(currentNode);

    function nextNode(node) {
      if (!node) return;
      console.log(node.value);
      if (node.left) q.enqueue(node.left);
      if (node.right) q.enqueue(node.right);
      return nextNode(q.dequeue());
    }
  }
}

