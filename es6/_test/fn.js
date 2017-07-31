console.log((function () { }).name);
console.log((function () { }).bind({}).name);

exports.id = 32;


function foo() {

    console.log('foo', this.id);

    setTimeout(() => {
        console.log('setTimeout arrow:', this.id);
    }, 100);

    setTimeout(function () {
        console.log('setTimeout normal:', this.id);
    }, 100);
}

var fn = foo.call({ id: 32 });
console.log(fn);

function gen() {
    this.a = 1;
    this.b = 2;
    console.log(this.c);
}
var thisArg = {
    c: 3
};
gen.call(thisArg);
console.log(thisArg.a);
console.log(thisArg.b);


