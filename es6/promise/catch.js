// var promise = new Promise(function (resolve, reject) {
//     throw new Error('test');
// }).then(function (value) {
//     console.log(value)
// }).then(function (value) {
//     console.log(value)
// }).catch(function (error) {
//     console.log(error)
// });



var promise = new Promise(function (resolve, reject) {
    throw new Error('test');
}).then(function (value) {
    console.log(value);
}, function (error) {
    console.log(error); //执行
}).catch(function (error) {
    console.log(error);
});

