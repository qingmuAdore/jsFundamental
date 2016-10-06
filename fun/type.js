/**
 * type 
 */
function type(o) {
    if (o === null) return "Null";
    if (o === undefined) return "Undefined";
    //开始的索引值8到倒数第一位 [object Function] --->结果为 Function
    return Object.prototype.toString.call(o).slice(8, -1);
}

function Animal() {
    this.toString = function () {
        return 'Animal';
    }
}
var animal = new Animal();

console.log(type(animal)); //Object
console.log(type(Animal));// Function
console.log(type(1));// Number
console.log(type({ name: 'name' }));// Object
console.log(type(['info', 'name']));// Array
console.log(type('info')); //String
console.log(type(true));// Boolean
console.log(type(null));// NULL
console.log(type(undefined));// Undefined

console.log(typeof animal);//object
console.log(typeof Animal);// function
console.log(typeof 1);// number
console.log(typeof { name: 'name' });// object
console.log(typeof ['info', 'name']);// object
console.log(typeof 'info'); //string
console.log(typeof true);// boolean
console.log(typeof null);// object
console.log(typeof undefined);// undefined


console.log(animal instanceof Animal);//true
console.log(animal instanceof Object);//true
