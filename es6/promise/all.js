function generatePromiseInvokeResolve() {
    return new Promise(function (resolve, reject) {
        setTimeout(resolve, 100, 'Done');
    });
}

function generatePromiseInvokeReject() {
    return new Promise(function (resolve, reject) {
        setTimeout(reject, 100, 'Timeout');
    });
}

function generatePromiseWrap() {
    return new Promise(function (resolve, reject) {
        resolve(generatePromiseInvokeReject());
    });
}


Promise.all([generatePromiseInvokeResolve(), generatePromiseWrap()]).then(function (res) {
    console.log(res);
}).catch(function (reason) {
    console.log(reason);
});


Promise.all([1, 2, 3, 4, 5]).then(function (res) {
    console.log(res);
}).catch(function (reason) {
    console.log(reason);
});