var o = {
    toString() {
        return 'clsO';
    }
}

var obj = {
    [o]: 'valueO'
}

console.log(obj);


var numAssign = Object.assign(2);
console.log(numAssign);


var o = Object.create({ x: 1, y: 2 });
o.z = 3;

let { x, y, z } = o;
console.log(x, y, z);


function arg([x, y]) {
    console.log(x, y);
}

arg([10,12]);