class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
      prev: null,
    };
    this.tail = this.head;
    this.length = 1;
  }
  //just for the tail
  append(num) {
    const newNode = new Node(num);
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length += 1;
    return this;
  }

  //Just for the head

  prepend(num) {
    const newNode = { value: num, next: this.head, prev: null };
    this.head.prev = newNode;
    this.head = newNode;
    this.length += 1;
    return this;
  }

  //Getting a node at a given position

  getNode(index) {
    let currentNode = this.head;
    for (let i = 1; i <= index; i++) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  //Printing in order

  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return console.log(array);
  }

  //Inserting at a giving index

  insert(index, value) {
    if (index >= this.length) {
      return this.append(value);
    }
    let newNode = { value: value, next: null, prev: null };
    let currentNode = this.getNode(index);
    let previousNode = this.getNode(index - 1);
    newNode.next = currentNode;
    newNode.prev = currentNode.prev;
    previousNode.next = newNode;
    currentNode.prev = newNode;
    this.length += 1;
    return this.printList();
  }

  remove(index) {
    //checking parameter
    if (index > this.length) {
      return 'not found';
    }
    let currentNode = this.getNode(index);
    let previousNode = this.getNode(index - 1);
    let nextNode = this.getNode(index + 1);
    previousNode.next = currentNode.next;
    nextNode.prev = previousNode;
    this.length--;
  }
}

let listy = new DoublyLinkedList(10);
listy.append(5);
listy.prepend(5);
listy.append(16);
listy.insert(2, 44);
listy.remove(2);
listy.printList();
