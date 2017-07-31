/*
属性的遍历

5 种方式
*/

var character = Symbol('character');
console.log(character);

function Person(name, age = 29) {
    this.name = name;
    this.age = age;
    this.secret = this.name + '\' secret';
    this[character] = this.name + '\'s character';  // symbol 属性
    this.showName = function () {
        console.log(name);
    }
    Object.defineProperty(this, 'secret', { enumerable: false });
}

Person.prototype = {
    work: 'engineer'
}

var person = new Person('pauly');

// （1）for...in
// for...in循环遍历对象自身的和继承的可枚举属性（不含 Symbol 属性）
for (let k in person) {    //name age showName work
    console.log(k);
}

// （2）Object.keys(obj)
// Object.keys返回一个数组，包括对象自身的（不含继承的）所有可枚举属性（不含 Symbol 属性）。
console.log(Object.keys(person)); //[ 'name', 'age', 'showName' ]


// （3）Object.getOwnPropertyNames(obj)
// Object.getOwnPropertyNames返回一个数组，包含对象自身的所有属性（不含 Symbol 属性，但是包括不可枚举属性）。
console.log(Object.getOwnPropertyNames(person)); //[ 'name', 'age', 'secret', 'showName' ]

// （4）Object.getOwnPropertySymbols(obj)
// Object.getOwnPropertySymbols返回一个数组，包含对象自身的所有 Symbol 属性。
console.log(Object.getOwnPropertySymbols(person));

// （5）Reflect.ownKeys(obj)
// Reflect.ownKeys返回一个数组，包含对象自身的所有属性，不管属性名是 Symbol 或字符串，也不管是否可枚举。
console.log(Reflect.ownKeys(person));