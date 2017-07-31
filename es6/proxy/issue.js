/**
 *  为何, this.print 输出时没有进入 proxy 代理 
 * 
 */
class Logger {
    // constructor(){
    //     this.printName = this.printName.bind(this);
    // }

    printName(name = 'there') {
        // console.log(this instanceof Logger);
        // console.log(this instanceof Proxy);
        this.print(`Hello ${name}`);
    }

    print(text) {
        console.log(text);
    }
}

let handler = {
    get: function (target, key, receiver) {
        console.log(`getting ${key}!`);
        return Reflect.get(target, key, receiver);
    },
    set: function (target, key, value, receiver) {
        console.log(`setting ${key}!`);
        return Reflect.set(target, key, value, receiver);
    }
}

const proxy = new Proxy(new Logger(), handler);
const { printName } = proxy;
try {
    printName.bind(proxy)();
} catch (e) {
    console.log(e);
}
