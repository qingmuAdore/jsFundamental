class A {
    constructor() {
        this.p = 2;
    }
}

class B extends A {

    get m() {
        return super.p;//undefined
        // return this.p;//2
    }
}

let b = new B();
console.log(b.m); // undefined