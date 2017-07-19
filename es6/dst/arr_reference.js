/********************************************************
默认值可以引用解构赋值的其他变量，但该变量必须已经声明
********************************************************/

let [x = 1, y = x] = [];     
console.log(x,y);// 1 1

let [a = 1, b = a] = [2];   
console.log(a,b);//2 2

let [u = 1, v = u] = [1, 2]; 
console.log(1,2);//1 2

// l 取值 r 但是 r 没有定义
let [l = r, r = 1] = []; //ReferenceError: r is not defined
console.log(l,r);