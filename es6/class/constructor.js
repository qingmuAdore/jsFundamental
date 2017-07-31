function Person() {

}

class Foo {
    constructor() {
        // return new Person() ;
    }
}

console.log(new Foo() instanceof Person);


var Point = class {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    toString() {
        return '(' + this.x + ', ' + this.y + ')';
    }
}

Point.prototype.show = function () {
    console.log('show');
}

var point = new Point(2, 3);
point.show();