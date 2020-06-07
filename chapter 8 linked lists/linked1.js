class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }
  //just for the tail
  append(num) {
    const newNode = new Node(num);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length += 1;
    return this;
  }

  //Just for the head

  prepend(num) {
    const newNode = { value: num, next: this.head };
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
    let newNode = { value: value, next: null };
    let currentNode = this.getNode(index);
    newNode.next = currentNode.next;
    currentNode.next = newNode;
    this.length += 1;
  }
  remove(index) {
    //checking parameter
    if (index > this.length) {
      return 'not found';
    }
    let currentNode = this.getNode(index);
    let previousNode = this.getNode(index - 1);

    previousNode.next = currentNode.next;
    this.length--;
  }

  //Reverse Single Link List

  reverse() {
    if (this.length === 1) {
      return this.head;
    }
    let first = this.head;
    let second = first.next;
    this.tail = this.head;
    while (second) {
      let temp = second.next;
      second.next = first;
      first = second;
      second = temp;
    }
    this.head.next = null;
    this.head = first;
    return this.printList();
  }
}

let listy = new LinkedList(10);
listy.append(4);
listy.prepend(5);
listy.append(16);
listy.insert(2, 44);
listy.insert(99, 64);
listy.printList();
listy.reverse();
