const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor() {
    this._root = null
  }

  root() {
    return this._root
  }

  add(data) {
    const node = new Node(data)
    if (!this._root) {
      this._root = node
      return
    }
    let currNode = this._root
    while (true) {
      if (data === currNode.data) return
      if (data < currNode.data) {
        if (!currNode.left) {
          currNode.left = node
          return
        }
        currNode = currNode.left
      } else {
        if (!currNode.right) {
          currNode.right = node
          return
        }
        currNode = currNode.right
      }
    }
  }

  has(data) {
    return !!this.find(data)
  }

  find(data) {
    if (!this._root) return null
    let currNode = this._root
    while (true) {
      if (data === currNode.data) {
        return currNode
      }
      if (data < currNode.data) {
        if (!currNode.left) {
          return null
        }
        currNode = currNode.left
      } else {
        if (!currNode.right) {
          return null
        }
        currNode = currNode.right
      }
    }
  }

  _removeNode(node, data) {
    if (!node) return null

    if (data === node.data) {
      if (!node.left && !node.right) {
        return null
      } 
      
      if (!node.left) {
        return node.right
      }
      
      if (!node.right) {
        return node.left
      }

      let currentNode = node.right
      while (currentNode.left) {
        currentNode = currentNode.left
      }
      
      node.data = currentNode.data
      node.right = this._removeNode(node.right, currentNode.data)
    } else if (data < node.data) {
      node.left = this._removeNode(node.left, data)
    } else {
      node.right = this._removeNode(node.right, data)
    }
    
    return node
  }

  remove(data) {
    this._root = this._removeNode(this._root, data)
  }

  min() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree
};