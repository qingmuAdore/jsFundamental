/**
 * 私有方法
 * 
 *构造函数中,我们不需要使用闭包，可以在调用的时候初始化数据
 */

var Person = function (name) {
    this.name = name || 'person';
    //private field
    var _age = 13;

    this.speek = function () {
        console.log('chinese');
    }
    //public way
    this.work = function () {
        console.log(name);
        console.log(this.name);
        this.speek();
    }
    //private function
    function show() {
        //访问临时变量
        console.log(_age);
        //访问成员变量
        console.log(name);
        //调用成员方法
        speek();
        //return this.name;//is errror
        return name;
    }

}


var person = new Person('pauly');
person.work();
// 使用不了
// person.show();