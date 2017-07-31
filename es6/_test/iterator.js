class List {
    constructor(arr) {
        this.arr = Array.from(arr);
    }
    [Symbol.iterator]() {
        let i = 0;
        let self = this;
        let length = self.arr.length;
        return {
            next() {
                return i < length ? { value: self.arr[i++], done: false } : { done: true };
            }
        }
    }
}

var list = new List([1, 2, 3, 4, 5]);
var it = list[Symbol.iterator]();
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());