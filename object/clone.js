var isClass = function (o) {
    if (o === null) return "Null";
    if (o === undefined) return "Undefined";
    return Object.prototype.toString.call(o).slice(8, -1);
}

/**
 * deep clone 
 */
var clone = function (obj) {
    var result;
    switch (isClass(obj)) {
        case "Array": result = []; break;
        case "Object": result = {}; break;
        /** 如果是要过滤掉 Function 和 RegExp 的话 **/
        // case "RegExp":
        // case "Function": return null;
        /** 结束 **/
        default: return obj;
    }
    for (key in obj) {
        var copy = clone(obj[key]);
        if (copy != null) result[key] = copy;
    }
    return result;
}

var oPerson = {
    oName: "rookiebob",
    oAge: 18,
    oAddress: {
        province: "beijing"
    },
    ofavorite: [
        "swimming",
        { reading: "history book" }
    ],
    skill: function () {
        console.log("bob is coding");
    }
};

// console.log(oPerson);
// console.log('----------line---------');
// var oNew = clone(oPerson);
// console.log(oNew);
// oPerson.oAge = 19;
// console.log(oNew);


var oFun = function(){
    console.log('function');
}
console.log(oFun);
var oNew = clone(oFun);
console.log(oNew);
oNew();

// oNew.ofavorite[1].reading = "picture";
// console.log(oNew.ofavorite[1].reading);//picture
// console.log(oPerson.ofavorite[1].reading);//history book

// oNew.oAddress.province = "shanghai";
// console.log(oPerson.oAddress.province);//beijing
// console.log(oNew.oAddress.province);//shanghai
