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
    while(true) {
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

  remove(data) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
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