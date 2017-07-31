/********************************************************
super 关键字

super这个关键字，既可以当作函数使用，也可以当作对象使用
********************************************************/

/*
super作为函数调用时，代表父类的构造函数。
- ES6 要求，子类的构造函数必须执行一次super函数
- super()只能用在子类的构造函数之中，用在其他地方就会报错

super虽然代表了父类A的构造函数，但是返回的是子类B的实例，即super内部的this指的是B，因此super()在这里相当于
A.prototype.constructor.call(this)
*/

class A {
    constructor() {
        console.log(new.target.name);
    }
}
class B extends A {
    constructor() {
        super();
    }
    //报错
    // m() {   
    //     super();
    // }
}
new A() // A
new B() // B


/*
super作为对象时，在普通方法中，指向父类的原型对象；在静态方法中，指向父类


ES6 规定，通过super调用父类的方法时，super会绑定子类的this
*/

class AObject {
    constructor() {
        this.name = 'Object';
    }

    p() {
        return 2;
    };

}

class BObject extends AObject {
    constructor() {
        super();
        console.log(super.p()); // 2
        console.log(super.name);  // undefined
        console.log(this.name); // Object
    }

}

var bObject = new BObject();

/*

如果super作为对象，用在静态方法之中，这时super将指向父类，而不是父类的原型对象

*/
class Parent {
    static myMethod(msg) {
        console.log('static', msg);
    }

    myMethod(msg) {
        console.log('instance', msg);
    }
}

class Child extends Parent {
    static myMethod(msg) {
        super.myMethod(msg);
    }

    myMethod(msg) {
        super.myMethod(msg);
    }
}

Child.myMethod(1); // static 1

var child = new Child();
child.myMethod(2); // instance 2