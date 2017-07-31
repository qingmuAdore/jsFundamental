/********************************************************
解构不仅可以用于数组，还可以用于对象
********************************************************/

let { foo, bar } = { foo: "aaa", bar: "bbb" };
console.log(foo, bar); // "aaa"  "bbb"


/********************************************************
对象的解构与数组有一个重要的不同。数组的元素是按次序排列的，
变量的取值由它的位置决定；而对象的属性没有次序，变量必须与属性同名，才能取到正确的值
********************************************************/

//等号左边的两个变量的次序，与等号右边两个同名属性的次序不一致，但是对取值完全没有影响
let { b, a } = { a: "aaa", b: "bbb" };
console.log(a, b);// aaa bbb

//变量没有对应的同名属性，导致取不到值，最后等于undefined
let { baz } = { foo: "aaa", bar: "bbb" };
console.log(baz);//undefined


/********************************************************
数组一样，解构也可以用于嵌套结构的对象
********************************************************/

let obj = {
  p: [
    'Hello',
    { y: 'World' }
  ]
};

let { p, p: [x, { y }] } = obj;   // let { p: p, p: [x, { y }]} = obj;
console.log(p, x, y);// Hello World

let o = {};
let arr = [];

//o.prop = 123; arr[0]=true;
({ foo: o.prop, bar: arr[0] } = { foo: 123, bar: true });
console.log(o, arr); //{ prop: 123 } [ true ]
