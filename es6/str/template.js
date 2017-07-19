/**
    模板字符串（template string）是增强版的字符串，用反引号（`）标识。
    它可以当作普通字符串使用，也可以用来定义多行字符串，或者在字符串中嵌入变量。
 */

// 普通字符串
var singleLine = `In JavaScript '\n' is a line-feed.`

// 多行字符串
var multiLine = `In JavaScript this is
 not legal.`;

console.log(`string text line 1
string text line 2`);

// 字符串中嵌入变量
var name = "Bob", time = "today";
var  embedVar =  `Hello ${name}, how are you ${time}?`;
console.log(embedVar);

