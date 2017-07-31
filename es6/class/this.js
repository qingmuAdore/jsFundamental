/********************************************************
this 的指向

类的方法内部如果含有this，它默认指向类的实例.
但是，如果将这个方法提取出来单独使用，this会指向该方法运行时所在的环境

若需要成员方法,this表示实例,如下解决方案
- 构造函数中绑定this
- 使用箭头函数(箭头函数没有内部this,this指向上一层的环境)
- 使用Proxy，获取方法的时候，自动绑定this
********************************************************/
class Logger {
    printName(name = 'there') {
        //this会指向该方法运行时所在的环境，因为找不到print方法而导致报错
        this.print(`Hello ${name}`);
    }

    print(text) {
        console.log(text);
    }
}

const logger = new Logger();
const { printName } = logger;
logger.printName();  //Hello there
try {
    printName();
} catch (error) {
    console.log('primitive', error); // TypeError: Cannot read property 'print' of undefined 
}

// 构造函数绑定 this

class LoggerBind {

    constructor() {
        this.printName = this.printName.bind(this);
    }

    printName(name = 'there') {
        //this会指向该方法运行时所在的环境，因为找不到print方法而导致报错
        this.print(`Hello ${name}`);
    }

    print(text) {
        console.log(text);
    }
}

const loggerBind = new LoggerBind();
try {
    const { printName } = loggerBind;
    printName();
} catch (error) {
    console.log('bind', error); // TypeError: Cannot read property 'print' of undefined 
}


//使用箭头函数

class LoggerArrow {

    constructor() {
        this.printName = (name = 'there') => this.print(`Hello ${name}`);
    }

    print(text) {
        console.log(text);
    }
}

const loggerArrow = new LoggerArrow();
try {
    const { printName } = loggerArrow;
    printName();
} catch (error) {
    console.log(error); // TypeError: Cannot read property 'print' of undefined 
}


//使用Proxy，获取方法的时候，自动绑定this
// var handler = {
//     get: function (target, propKey, receiver) {
//         if (typeof target[propKey] == 'function') {
//             target[propKey] = target[propKey].bind(target);
//         }
//         // return target[propKey];
//         return Reflect.get(target,propKey,receiver);
//     }
// }
// var loggerProxy = new Proxy(new Logger(),handler);

function selfish(target) {
    var cache = new WeakMap();
    var handler = {
        get: function (target, propKey, receiver) {
            console.log(propKey);
            var value = target[propKey];
            if (typeof value != 'function') {
                return value;
            }
            if (!cache.has(propKey)) {
                cache.set(value, value.bind(target));
            }
            return cache.get(value);
        }
    }

    return new Proxy(target, handler);
}

var loggerProxy = selfish(new Logger());

try {
    const { printName,print } = loggerProxy;
    printName();
    print();
} catch (error) {
    console.log(error); // TypeError: Cannot read property 'print' of undefined 
}