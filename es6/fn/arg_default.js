
/**
 *  缺省参数
 * 
ES6 允许为函数的参数设置默认值，即直接写在参数定义的后面。
 
 */
function log(x, y = 'World') {
    console.log(x, y);
}

log('Hello') // Hello World
log('Hello', 'China') // Hello China
log('Hello', '') // Hello


