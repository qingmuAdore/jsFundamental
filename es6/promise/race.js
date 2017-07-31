Promise.race([1, 2, 3, 4, 5]).then(function (res) {
    console.log(res);
}).catch(function (reason) {
    console.log(reason);
});