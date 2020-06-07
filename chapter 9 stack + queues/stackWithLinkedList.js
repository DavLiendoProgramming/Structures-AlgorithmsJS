class Node {
  contructor(value) {
    (this.value = value), (this.next = null);
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  peek() {
    return this.top;
  }
  push(value) {
    const newNode = new Node(4);
    if (this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      const holdingPointer = this.top;
      this.top = newNode;
      this.top.next = holdingPointer;
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.top) {
      return null;
    }
    const holdingPointer = this.top.next;
    this.top = holdingPointer;
    this.length--;
    if (this.top === this.bottom) {
      this.bottom = null;
    }
    return this;
  }
}

const stacky = new Stack();
