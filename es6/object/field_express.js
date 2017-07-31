/********************************************************
属性名表达式

*定义属性
方法一是直接用标识符作为属性名，
方法二是用表达式作为属性名，这时要将表达式放在方括号之内
********************************************************/

var obj = {};
// 方法一
obj.foo = true;
// 方法二
obj['a' + 'bc'] = 123;


var obj = {
  foo: true,
  abc: 123
};

//采用表达式定义属性名称: [表达式]
let propKey = 'foo';
var obj = {
    [propKey]: true,
    ['a' + 'bc']: 123
};   


// 注意，属性名表达式如果是一个对象，默认情况下会自动将对象转为字符串[object Object]，这一点要特别小心
// 若实现 toString() 接口,调用 其返回的toString() 值
 
const keyA = {a: 1};
const keyB = {b: 2};

const myObject = {
  [keyA]: 'valueA',
  [keyB]: 'valueB'
};
myObject // Object {[object Object]: "valueB"}

var keyO = {
    toString() {
        return 'clsO';
    }
}
var obj = {
    [o]: 'valueO'
}; // { clsO: 'value' }
