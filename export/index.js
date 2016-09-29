// var Module = require('./module.js');
// Module();

// var Module = require('./export.js');
// Module.say();

var Module = require('./combine.js');
Module();
Module.hello();


/**
  1. exports 是指向的 module.exports 的引用
  2. module.exports 初始值为一个空对象 {}，所以 exports 初始值也是 {}
  3. require() 返回的是 module.exports 而不是 exports
 */