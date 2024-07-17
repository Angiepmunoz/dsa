/****Singly linked list *****/

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    // should accept a value;
    const newNode = new Node(val);
    // create new node using the value passed;
    if (!this.head) {
      // if head is null, assign new node as head and tail
      this.head = newNode;
      this.tail = this.head;
    } else {
      // otherwise set the next property on tail to be the new node and the tail property on the list to be the newly created node
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    // increment length by 1
    return this;
    // return the linkedlist
  }

  shift() {
    // if the linked list is empty return undefined
    if (!this.head) return undefined;
    // otherwise store the current head in a variable
    const currHead = this.head;
    // make the current heads next value the new head
    this.head = this.head.next;
    // adjust the length
    this.length--;
    if (!this.length) this.tail = null;
    // if the length is now 0, set the tail to null as well
    return currHead;
  }

  unshift(val) {
    // create a new node with the value passed
    const newNode = new Node(val);
    if (!this.head) {
      // if the head is null, make the new node the head and the tail
      this.head = newNode;
      this.tail = this.head;
    } else {
      // otherwise, make the current head the new nodes next value and assign the new node as the head
      newNode.next = this.head;
      // adjust the length
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    // if the linked list is empty than return undefined
    if (!this.head) return undefined;
    let current = this.head;
    let newTail = current;
    while (current.next) {
      // newTail is always one node behind current
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (!this.length) {
      this.tail = null;
      this.head = null;
    }
    return current.val;
  }
  get(index) {
    if (index < 0 || index >= this.length) return null;
    let counter = 0;
    let currentNode = this.head;
    while (counter < index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }
  set(val, index) {
    const foundNode = this.get(index);
    if (!foundNode) return false;
    foundNode.val = val;
    return true;
  }
  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (!index) return !!this.unshift(val);
    if (index === this.length) return !!this.push(val);
    const newNode = new Node(val);
    const currentNodeAtInd = this.get(index);
    const nodeBefore = this.get(index - 1);
    nodeBefore.next = newNode;
    newNode.next = currentNodeAtInd;
    this.length++;
    // console.log(this);
    return true;
  }
  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    const prev = this.get(index - 1);
    const curr = this.get(index);
    prev.next = curr.next;
    this.length--;
    return curr;
  }
  reverse() {
    // console.log(this)
    this.tail = this.head;
    let behind = null;
    let currNode = this.head;
    
    while (currNode) {
      // keep track of disconnected nodes
      let restOfNodes = currNode.next;
      // point to behind 
      currNode.next = behind;
      // update behind to current
      behind = currNode;
      // current picks up with rest of nodes
      currNode = restOfNodes;
      // console.log("behind:",behind)
      // console.log("current:",currNode)
      // console.log("rest",restOfNodes)
    }
    this.head = behind;
    return this;
  }
}

const linkedList = new SinglyLinkedList();
linkedList.push(10); //0
linkedList.push(12); //1
linkedList.push(13); //2
linkedList.push(14);
linkedList.push(15);
linkedList.push(16);

// console.log(linkedList.pop());
// console.log("current:" , linkedList.insert(0,2))
// console.log("current:" , linkedList.insert(6,2))
// console.log("current:", linkedList.insert(8, 1));
// console.log("get", linkedList.get(1));
// console.log(linkedList.remove(0))
// console.log(linkedList.remove(5))
// console.log(linkedList.remove(2))
// console.log(linkedList.get(1))
linkedList.reverse();
