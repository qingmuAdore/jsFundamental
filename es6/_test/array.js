var arrLike = {
    0: 'pauly',
    1: 'adore',
    2: 'pzhang',
    length: 3
};

var result = Array.from(arrLike, (v, k) => k + '_' + v);
console.log(result);

result = Array.from(arrLike, function (v, k) {
    return this.id + '_' + k + '_' + v;
}, { id: 'cmpp' });

console.log(result);

// var ArrayOf = function () {
//     // return [].slice.call(arguments);
//     return [...arguments];
// }

var ArrayOf = (...args) => [...args];  // [].slice.call(args);

console.log(ArrayOf(3, 11, 8)) // [3,11,8]
console.log(ArrayOf(3)); // [3]


var arr = Array.of(1, 2, 3, 4).fill(5);
console.log(arr);

var arr = [1, 2, 3, 4, 5, 6];

for (let [index, element] of arr.entries()) {
    console.log(index, element);
}

console.log([1, 2, 3].includes(2));

console.log(['a', 'b', 'c', 'd'].fill(7, 1, 3))
