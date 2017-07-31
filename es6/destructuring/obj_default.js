/**************************************************
对象的解构也可以指定默认值。
***************************************************/
var { x = 3 } = {};
console.log(x); //3

var { x, y = 5 } = { x: 1 };
console.log(x, y); //1 5

var { x: y = 3 } = {};
console.log(y); //3

var { x: y = 3 } = { x: 5 };
console.log(y); // 5

var { message: msg = 'Something went wrong' } = {};
console.log(msg); //Something went wrong

/**************************************************
默认值生效的条件是，对象的属性值严格等于undefined
***************************************************/

var { x = 3 } = { x: undefined };
console.log(x);//3

//x属性等于null，就不严格相等于undefined，导致默认值不会生效。
var { x = 3 } = { x: null };
console.log(x);//null