var Interface = require('./interface.js');
//    接口声明方式
var Animal = new Interface('Animal', ['eat', 'sleep']);


// 定义Person类实现接口Animal接口中的方法
var Person = function() {};
Person.prototype = {
    eat: function() {
        console.log('person eat');
    },
    sleep: function() {
        console.log('person sleep');
    }
}

//  检验Person类的是否实现了Animal接口
Interface.ensureImpelements(Person, Animal);