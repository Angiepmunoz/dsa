# Singly Linked Lists

## What is a linked lists:
- A data structure that contained a head, tail, and length property
- Linked lists consist of nodes, and each node has a value and a pointer to another node or null.
    - a bunch of nodes pointing to other nodes
- Don't have indeces
    - connected via nodes with a next poihttps://github.com/9-3-pursuit/unit-full-stack-web-development/tree/main/intro-to-internet-and-serversnters
    - random access is not allowed

```javascript
class Node {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = null;
    }
    push(val){
        
    }
}


// const first = new Node("HI");
// first.next = new Node("there")
// first.next.next = new Node("how")
// first.next.next.next = new Node("are")
// first.next.next.next.next = new Node("you")
```

Node
- Stores a piece of data 
- reference to next node

## Big O
Insertion - O(1)
Removal - O(1) or O(N)
    - (Pop) Have to go to the end of the linkedList
Searching - O(N)
Access - O(N)
