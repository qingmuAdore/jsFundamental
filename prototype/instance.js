/**
 * Class.prototype 与 instance.__proto__
 * 
 * __proto__ 与 Class.prototype 指向相同
 */
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

/*

say
name
info
-------------------------------------
say
name
info

*/