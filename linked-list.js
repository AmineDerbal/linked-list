export class LinkedList {
  constructor() {
    this.head = new Node();
    this.tail = this.head;
    this.nodeList = [];
  }
  // insert at the end of the list
  append(value) {
    const node = new Node(value);
    if (this.head.nextNode == null && this.tail.value == null) {
      this.insertAtNull(node);
      return;
    }
    this.tail.nextNode = node;
    this.tail = node;
  }
  // insert at the start of the list
  prepend(value) {
    const node = new Node(value);
    if (this.head.nextNode == null && this.tail.value == null) {
      this.insertAtNull(node);
      return;
    }
    node.nextNode = this.head.nextNode;
    this.head.nextNode = node;
  }
  // case both head and tail are null at insertion
  insertAtNull(node) {
    this.head.nextNode = node;
    this.tail = node;
  }
  // return the number of nodes in the list
  listSize() {
    let element = this.head;
    let count = 0;
    while (element.nextNode != null) {
      count++;
      element = element.nextNode;
    }
    return count;
  }
  // return the head of the list
  getHead() {
    return this.head.nextNode == null
      ? `this list is empty`
      : `the head of this list is the value ${this.head.nextNode.value}`;
  }
  // return the tail of the list
  getTail() {
    return this.head.nextNode == null && this.tail.value == null
      ? `this list is empty`
      : `the tail of this list is the value ${this.tail.value}`;
  }
  // return the value at a given index
  at(index) {
    if (index < 0 || index > this.listSize()) {
      console.log("this index do not exist");
      return;
    }
    element = this.head;
    for (let i = 0; i < index; i++) {
      element = element.nextNode;
    }
    console.log(`the value at the index ${index} is ${element.value}`);
  }
  // remove the last node from the list
  pop() {
    if (this.listSize == 1) {
      this.head = new Node();
      this.tail = this.head;
      return;
    }
    let index = this.listSize() - 1;
    element = this.head;
    for (let i = 0; i < index; i++) {
      element = element.nextNode;
    }

    element.nextNode = null;
    this.tail = element;
  }
  // check if one of node in the list contains the given value
  contains(value) {
    element = this.head;
    for (let i = 0; i < this.listSize(); i++) {
      element = element.nextNode;
      if (element.value == value) return true;
    }
    return false;
  }
  // find the index of given the list if it exist
  find(value) {
    element = this.head;
    for (let i = 0; i < this.listSize(); i++) {
      if (element.nextNode.value == value) {
        return i + 1;
      }
      element = element.nextNode;
    }
    return null;
  }
  // return LinkedList objects as Strings
  toString() {
    let element = this.head;
    let newString = "";
    while (element.nextNode != null) {
      newString += `( ${element.nextNode.value} ) -> `;
      element = element.nextNode;
    }
    newString += "null";
    return newString;
  }
  // case index=2  the previous node's index will be 3 and the inserted one 2
  insertAt(value, index) {
    if (index < 0 || index > this.listSize()) {
      console.log("this index do not exist in this list");
      return;
    }
    if (index == 1) {
      this.prepend(value);
      return;
    }
    const node = new Node(value);
    let element = this.head;
    for (let i = 0; i < index - 1; i++) {
      element = element.nextNode;
    }
    node.nextNode = element.nextNode;
    element.nextNode = node;
    return;
  }

  removeAt(index) {
    if (index < 0 || index > this.listSize()) {
      console.log("this index do not exist");
      return;
    }
    if (index == this.listSize()) {
      this.pop();
      return;
    }
    if (index == 1) {
      this.head.nextNode = this.head.nextNode.nextNode;
      return;
    }
    let element = this.head;
    for (let i = 0; i < index - 1; i++) {
      element = element.nextNode;
    }
    element.nextNode = element.nextNode.nextNode;
  }
}

class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}
