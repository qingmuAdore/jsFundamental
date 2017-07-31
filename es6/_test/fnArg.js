function fn(...args) {
    console.log(args);
    console.log(arguments);
}

fn(1, 2, 3);

function push(array, ...items) {
    items.forEach(function (item) {
        array.push(item);
        console.log(item);
    });
}

var a = [];
push(a, 1, 2, 3)

console.log(a);


console.log((function(){}).name);