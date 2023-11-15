class Node {
  // Your code here:
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  // Your code here:
  constructor() {
    this.top = null;
  }

  push(value) {
    const node = new Node(value);

    if (!this.top) {
      this.top = node;
    } else {
      node.next = this.top;
      this.top = node;
    }
  }

  pop() {
    const oldTop = this.top;
    this.top = this.top.next;
    return oldTop.value;
  }

  peek() {
    return this.top.value;
  }
}

const primerStack = new Stack();
console.log(primerStack);

primerStack.push("A");

console.log(primerStack);

primerStack.push("B");
primerStack.push("C");
primerStack.push("D");

console.log(primerStack);

console.log(primerStack.pop());
console.log(primerStack.peek());

class MinStack extends Stack {
  constructor() {
    super();
    this.minimum = new Stack();
  }

  push(value) {
    const node = new Node(value);

    if (!this.top) {
      this.top = node;
      this.minimum.push(value);
    } else {
      node.next = this.top;
      this.top = node;
      if (this.minimum.peek() > value) this.minimum.push(value);
      else this.minimum.push(this.minimum.peek());
    }
  }

  pop() {
    const oldTop = this.top;
    this.top = oldTop.next;
    this.minimum.pop();
    return oldTop.value;
  }

  min() {
    return this.minimum.peek();
  }
}

const stackMinimos = new MinStack();
console.log(stackMinimos);

stackMinimos.push(10);
console.log(stackMinimos);

stackMinimos.push(9);
console.log(stackMinimos);

stackMinimos.push(11);
console.log(stackMinimos);

console.log(stackMinimos.min());

console.log(stackMinimos.pop());
console.log(stackMinimos);

console.log(stackMinimos.min());

stackMinimos.push(5);
console.log(stackMinimos);

console.log(stackMinimos.min());

module.exports = {
  Node,
  MinStack,
};
