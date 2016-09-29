/**
 * 私有方法
 * 
 *构造函数中,我们不需要使用闭包，可以在调用的时候初始化数据
 */

var Person = function (name) {
    this.name = name || 'person';
    //private field
    var _age = 13;

    //private function
    function show() {
        //访问临时变量
        console.log(_age);
        //访问成员变量
        console.log(name);
        //this 关键字不能使用
        console.log(this.name);
        //return this.name;//is errror
        return name;
    }

    //public way
    this.work = function () {
        show();
    }

    this.speek = function () {
        console.log('say chinese');
    }

}


var person = new Person('pauly');
person.work();
// 使用不了
// person.show();