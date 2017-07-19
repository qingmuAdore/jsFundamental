/********************************************************
解构赋值时，如果等号右边是数值和布尔值，则会先转为对象
********************************************************/


//数值和布尔值的包装对象都有toString属性，因此变量s都能取到值
var {toString: s} = 123;
s === Number.prototype.toString // true

var {toString: s} = true;
s === Boolean.prototype.toString // true