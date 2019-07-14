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
        const minNodeRightSubTree = minNode(currentNode.right);
        currentNode.value = minNodeRightSubTree.node.value;
        deleteLeaf(minNodeRightSubTree.parnet, minNodeRightSubTree.node);
        return true;
      };
      if (currentNode.left || currentNode.right) {
        const onlyChildNode = (currentNode.left || currentNode.right);
        currentNodeParent.right === currentNode ? currentNodeParent.right = onlyChildNode : currentNodeParent.left = onlyChildNode
        return true;
      }
      return deleteLeaf(currentNodeParent, currentNode);
    }
    if (value < currentNode.value) return this.delete(value, currentNode.left, currentNode);
    if (value > currentNode.value) return this.delete(value, currentNode.right, currentNode);
    return false;


    function deleteLeaf(currentNodeParent, childNode) {
      if (currentNodeParent.left.value === childNode.value) {
        currentNodeParent.left = null;
        return true;
      }
      if (currentNodeParent.right.value === childNode.value) {
        currentNodeParent.right = null;
        return true;
      }
      return false;
    }

    function minNode(currentNode = this.root, currentNodeParent = null) {
      if (currentNode.left) return minNode(currentNode.left, currentNode);
      return { node: currentNode, parnet: currentNodeParent };
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

  depth() {
    var maxDepth = 0;
    recur(this.root);
    return maxDepth;

    function recur(currentNode, depth = 0) {
      if (depth > maxDepth) maxDepth = depth;
      if (currentNode.left) recur(currentNode.left, depth + 1)
      if (currentNode.right) recur(currentNode.right, depth + 1)
    }
  }
}