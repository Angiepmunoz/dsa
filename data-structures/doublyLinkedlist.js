class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
    }
    this.tail = newNode;
    this.length++;
    return this;
  }
  shift() {
    if (!this.head) return;
    const reHead = this.head;
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      const nextHead = this.head.next;
      reHead.next = null;
      this.head = nextHead;
      nextHead.prev = null;
    }
    this.length--;
    return reHead;
  }

  pop() {
    if (!this.length) return;
    const tail = this.tail;
    if (tail === this.head) {
      this.head = null;
      this.tail = null;
    } else {
      const prev = tail.prev;
      prev.next = null;
      tail.prev = null;
      this.tail = prev;
    }
    this.length--;
    return tail;
  }

  unshift(val) {
    const newNode = new Node(val);
    if (!this.length) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(index) {
    if (this.length <= index || index < 0) return null;
    let midpoint = Math.floor(this.length / 2);
    let count;
    let currentNode;
    if (index <= midpoint) {
      currentNode = this.head;
      count = 0;
      while (count <= midpoint) {
        if (count === index) {
          return currentNode;
        }
        count++;
        currentNode = currentNode.next;
      }
    } else {
      count = this.length - 1;
      currentNode = this.tail;
      while (count > midpoint) {
        if (count === index) {
          return currentNode;
        }
        count--;
        currentNode = currentNode.prev;
      }
    }
  }

  set(index, val) {
    const node = this.get(index);
    if (node) {
      node.val = val;
      return true;
    }
    return false;
  }

  insert(index, val){
    const newNode = new Node(val)
    if(index >= this.length || index < 0 ) return null;
    if(index === 0){
        this.head.prev = newNode
        newNode.next = this.head;
        this.head = newNode;
    }else if(index === this.length-1){
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
    }else{
        const nodeAtPos = this.get(index);
        const oneLess = this.get(index-1);
        oneLess.next = newNode;
        newNode.prev = oneLess;
        newNode.next = nodeAtPos;
        nodeAtPos.prev = newNode
    }
    this.length++
    return newNode
  }
}

// 10 -> 11 -> 12

const first = new Node(12);
// first.next = new Node(13);
// first.next.prev = first;
const list = new DoublyLinkedList();
list.push(12);
list.push(13);
list.push(14);
list.push(15);
// console.log(list.shift());
// list.unshift(11);
console.log(list.insert(4,13.5))

