function* gen() {
    this.a = 11;
}

gen.prototype.hello = function () {
    return 'hi';
}

var obj = gen.call(gen.prototype);

obj.next();

console.log(obj.a);


function F() {
    this.a = 11;
    // return {
    //     b: 12,
    //     c: 13
    // }
}

var f = new F();
console.log(f.a);

var flg = true;

function* recylce() {
    yield 1;
    while (flg) { console.log(new Date().toLocaleString()); };
    yield 2;
}

var r = recylce();
console.log(r.next());
console.log(r.next());
console.log(r.next());