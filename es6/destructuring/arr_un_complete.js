/********************************************************
不完全解构

等号左边的模式，只匹配一部分的等号右边的数组。这种情况下，解构依然可以成功。
********************************************************/

//参数个数 多于 赋值个数
let [foo] = [];  
let [bar, baz] = [1];  
console.log(foo,baz); //undefined undefined


//赋值个数 多余 参数个数
let [x, y] = [1, 2, 3];
console.log(x,y); // 1 2

let [a, [b], d] = [1, [2, 3], 4];
console.log(a,b,d);//1 2 4