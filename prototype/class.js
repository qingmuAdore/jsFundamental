/**
 * prototype 
 * 
 * 实例获取该类prototype 携带的属性(变量和方法)
 * 
 * 声明变量: 
 * i>  函数体内,this.${field}
 * ii> 函数prototype.${field}
 */
var Person = function(){
    this.name = 'name';
    this.show = function(){
        console.log(this.name);
    }
}

Person.prototype.info = function(){
    console.log('info');
}

var person = new Person();
person.show();
person.info();