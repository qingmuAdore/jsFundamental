
var o = {
    age: 10,
    fn: function () {
        console.log('fn', this.age);
    }
}

var obj = new Proxy(o, {
    get: function (target, key, receiver) {
        console.log(`getting ${key}!`);
        return Reflect.get(target, key, receiver);
    },
    set: function (target, key, value, receiver) {
        console.log(`setting ${key}!`);
        return Reflect.set(target, key, value, receiver);
    }
});

let { fn } = obj;
fn();