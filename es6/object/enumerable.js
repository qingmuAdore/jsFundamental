/********************************************************
属性的可枚举性

对象的每个属性都有一个描述对象（Descriptor），用来控制该属性的行为。
Object.getOwnPropertyDescriptor方法可以获取该属性的描述对象


忽略enumerable为false的属性
    - for...in循环：只遍历对象自身的和继承的可枚举的属性
    - Object.keys()：返回对象自身的所有可枚举的属性的键名
    - JSON.stringify()：只串行化对象自身的可枚举的属性
    - Object.assign() : 只拷贝对象自身的可枚举的属性。
********************************************************/

let obj = { foo: 123 };
const descriptor = Object.getOwnPropertyDescriptor(obj, 'foo');
//  {
//    value: 123,
//    writable: true,
//    enumerable: true,
//    configurable: true
//  }

console.log(descriptor);