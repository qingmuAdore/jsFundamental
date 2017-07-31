/*
for...of循环可以自动遍历 Generator 函数时生成的Iterator对象，且此时不再需要调用next方法

利用for...of循环，可以写出遍历任意对象（object）的方法。原生的 JavaScript 对象没有遍历接口，无法使用for...of循环，
通过 Generator 函数为它加上这个接口，就可以用了
*/

function* objectEnteries(obj) {
    var propKeys = Object.keys(obj);
    for (let propKey of propKeys) {
        yield [propKey, obj[propKey]];
    }
}


var person = { name: 'pauly', age: 29, work: 'engeneer' };


//对象person原生不具备 Iterator 接口，无法用for...of遍历。
// 这时，我们通过 Generator 函数objectEntries为它加上遍历器接口，就可以用for...of遍历了
var gen = objectEnteries(person);
for (let [k, v] of gen) {
    console.log(k, v);
}

//将 Generator 函数加到对象的Symbol.iterator属性上面。
function* joinEnteries() {
    var propKeys = Object.keys(this);
    for (let propKey of propKeys) {
        yield [propKey, this[propKey]];
    }
}

person[Symbol.iterator] = joinEnteries;
for (let [k, v] of person[Symbol.iterator]()) {
    console.log(k, v);
}
