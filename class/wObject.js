/**
 * Object.create()法
 *  
 * 用这个方法，"类"就是一个对象，不是函数
 * 但是不能实现私有属性和私有方法，实例对象之间也不能共享数据，对"类"的模拟不够全面
 */

/**
 * Object.create实现
 */

/*
if (!Object.create) {
    Object.prototype.create = function (o) {
        function F() { };
        F.prototype = o;
        return new F();
    }
}
*/

var Cat = {
    name: 'cat',
    sound: function () {
        console.log('miao');
    }
};

var cat = Object.create(Cat);
console.log(cat.name);
cat.sound();

console.log(Cat.name);
Cat.sound();