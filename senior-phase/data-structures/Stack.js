class Stack {
  constructor() {
    this.length = 0;
    this.end;
  }
  push(val) {
    this.length++;
    let newObj = {
      val: val,
      prev: this.end,
    };
    this.end = newObj;
  }
  pop() {
    this.length--;
    let retVal = this.end.val;
    this.end = this.end.prev;

    return retVal;
  }
}

let stack = new Stack();

console.log("should be 0", stack.length);
console.log("should be undef", stack.push(8));
console.log("should be 1", stack.length);
console.log("should be undef", stack.push(7));
console.log("should be 2", stack.length);
console.log("should be 7", stack.pop());
console.log("should be 1", stack.length);
console.log("should be 8", stack.pop());
console.log("should be 0", stack.length);
