/**
 * 构造函数法
 * 它的主要缺点是，比较复杂，用到了this和prototype，编写和阅读都很费力。
 */
var Cat = function(){
    this.name = "cat";
}

Cat.prototype.sound = function(){
    console.log('miao');
}

var cat = new Cat();
console.log(cat.name);
cat.sound();