var Person = function (name) {
    this.name = name || 'person';
    //private field
    var _age = 13;
    //private function
    function show() {
        //return this.name;//is errror
        console.log(_age);
        return name;
    }
    //public way
    this.work = function () {
        console.log(show());
        console.log(show() + ' is enginner');
    }
}


var person = new Person('pauly');
person.work();
// 使用不了
// person.show();