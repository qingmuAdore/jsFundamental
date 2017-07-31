/********************************************************
如果等号的右边不是数组（或者严格地说，不是可遍历的结构，参见《Iterator》一章），那么将会报错

下面的语句都会报错，因为等号右边的值，要么转为对象以后不具备 Iterator 接口（前五个表达式），
要么本身就不具备 Iterator 接口（最后一个表达式）。
********************************************************/

// 报错
let [a] = 1;
let [b] = false;
let [c] = NaN;
let [d] = undefined;
let [e] = null;
let [f] = {};