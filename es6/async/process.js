var fs = require('fs');

var readFile = function (fileName) {
    return new Promise(function (resolve, reject) {
        fs.readFile(fileName, function (error, data) {
            if (error) return reject(error);
            resolve(data);
        });
    });
};

var asyncReadFile = async function () {
    var f1 = await readFile(__dirname + '/./data/1.txt');
    var f2 = await readFile(__dirname + '/./data/2.txt');
    console.log(f1.toString());
    console.log(f2.toString());
};

asyncReadFile();