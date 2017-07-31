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


// var promise1 = new Promise(function (resolve, reject) {
//     console.log('promise1');                        //promise1
//     resolve(generatePromiseInvokeResolve());
// }).then(function (value) {
//     console.log('promise1 First Then:', value);     //promise1 First Then: Done
//     return generatePromiseInvokeReject();
// }).then(function (value) {
//     console.log('promise1 Second Then:', value);
// }).catch(function (error) {
//     console.log('promise1 First Catch:', error);    //promise1 First Catch: Timeout
// });


// var promise2 = new Promise(function (resolve, reject) {
//     console.log('promise2');                        //promise2
//     resolve(generatePromiseInvokeReject());
// }).then(function (value) {
//     console.log('promise2 First Then:', value);
//     return generatePromiseInvokeResolve();
// }).then(function (value) {
//     console.log('promise2 Second Then:', value);
// }).catch(function (error) {
//     console.log('promise2 First Catch:', error);   //promise2 First Catch: Timeout
// });

var promise3 = new Promise(function (resolve, reject) {
    console.log('promise3');                        //promise3
    reject(generatePromiseInvokeResolve());
}).then(function (value) {
    console.log('promise3 First Then:', value);
    return generatePromiseInvokeReject();
}).then(function (value) {
    console.log('promise3 Second Then:', value);
}).catch(function (error) {
    console.log('promise3 First Catch:', error);   //promise3 First Catch: Promise { <pending> }
    return error;
}).then(function (value) {
    console.log('promise3 Three Then:', value);    //promise3 Three Then: Done
}).catch(function (error) {
    console.log('promise3 Second Catch:', error);  
});


