class Queue {
  constructor() {
    this.length = 0;
    this.start;
    this.end;
  }
  push(val) {
    this.length++;
    let newObj = {
      val: val,
      next: undefined,
    };
    if (!this.end) {
      this.start = newObj;
      this.end = newObj;
    } else {
      this.end.next = newObj;
      this.end = newObj;
    }
  }
  deque() {
    this.length--;
    let retVal = this.start.val;
    this.start = this.start.next;

    return retVal;
  }
}

let myQueue = new Queue();

console.log("should be 0", myQueue.length);
console.log("should be undef", myQueue.push(8));
console.log("should be 1", myQueue.length);
console.log("should be undef", myQueue.push(7));
console.log("should be 2", myQueue.length);
console.log("should be 8", myQueue.deque());
console.log("should be 1", myQueue.length);
console.log("should be 7", myQueue.deque());
console.log("should be 0", myQueue.length);
