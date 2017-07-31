var p = Promise.reject('出错了');
// 等同于
// var p = new Promise((resolve, reject) => reject('出错了'))

p.then(null, function (s) {
    console.log(s)
});

const thenable = {
    then(resolve, reject) {
        reject('出错了');
    }
};

Promise.reject(thenable)
    .catch(e => {
        console.log(e === thenable)
    })
// true