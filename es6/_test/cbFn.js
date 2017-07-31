function A() {
    var a = B();
    console.log(a);
}


function B() {
    function cb(data) {
        return data;
    }
    cb('hello world');
}



