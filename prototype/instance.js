var Person = function () {
    this.name = 'name';
    this.show = function () {
        console.log(this.name);
    }
}

Person.prototype.info = function () {
    console.log('info');
}

// Person.__proto__.report = function(){
//     console.log('report');
// }

var person = new Person();
person.__proto__.say = function () {
    console.log('say');
}

person.say();
person.show();
person.info();

console.log('-------------------------------------');

var person2 = new Person();
person2.say();
person2.show();
person2.info();

console.log('-------------------------------------');
var info = {};
// console.log(info.prototype);
var n = 32;
console.log(n);
