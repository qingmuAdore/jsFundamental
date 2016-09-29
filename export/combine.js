var say = function () {
    console.log("say");
};

var hello = function () {
    console.log("say hello");
}

/**
 * 导出整个模块
 */
module.exports  = say;
//导出 hello
module.exports.hello = hello;


/** 或者以下方式 */
// module.exports  = exports  = say;
// exports.hello = hello;