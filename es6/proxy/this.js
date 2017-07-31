/********************************************************
this 问题

但它不是目标对象的透明代理，即不做任何拦截的情况下，也无法保证与目标对象的行为一致
主要原因就是在 Proxy 代理的情况下，目标对象内部的this关键字会指向 Proxy 代理
********************************************************/


//一旦proxy代理target.m，后者内部的this就是指向proxy，而不是target
const target = {
    m: function () {
        console.log(this === proxy);
    }
};
const handler = {};

const proxy = new Proxy(target, handler);

target.m() // false
proxy.m()  // true

//由于this指向的变化，导致 Proxy 无法代理目标对象
const _name = new WeakMap();

class Person {
  constructor(name) {
    _name.set(this, name);
  }
  get name() {
    return _name.get(this);
  }
}

const jane = new Person('Jane');
console.log(jane.name); // 'Jane'

const janeProxy = new Proxy(jane, {});
console.log(janeProxy.name);  // undefined

//有些原生对象的内部属性，只有通过正确的this才能拿到，所以 Proxy 也无法代理这些原生对象的属性
const date = new Date();
const dateProxy = new Proxy(date, {});

try {
    dateProxy.getDate();
} catch (error) {
    console.log('Date',error);
}
