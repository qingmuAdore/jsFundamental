var promise3 = new Promise(function (resolve, reject) {
    console.log('promise');
    resolve('Resolved');
}).then().then(function (resolve) {
    console.log(resolve);
    throw 'err';
}).catch(function (reason) {
    console.log(reason);
});
