function timeout(ms) {
    return new Promise((resolve, reject) => {
        // setTimeout(resolve, ms, ['done','complete']);
        setTimeout(resolve, ms, 'done');
    });
}

timeout(100).then((value) => {
    console.log(value);
});


let promise = new Promise(function (resolve, reject) {
    console.log('Promise');
    resolve();
});


var p1 = new Promise(function (resolve, reject) {
    setTimeout(() => reject(new Error('fail')), 3000);
})

var p2 = new Promise(function (resolve, reject) {
    setTimeout(() => reject(p1), 1000);
})

p2
    .then(result => console.log(result))
    .catch(error => console.log(error))