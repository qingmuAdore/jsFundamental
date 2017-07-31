/********************************************************
私有方法 

- 在命名上加以区别
- 将私有方法移出模块，因为模块内部的所有方法都是对外可见的。
- 利用Symbol值的唯一性，将私有方法的名字命名为一个Symbol值。
********************************************************/

//在命名上加以区别 , _表示私有变量
//这种命名是不保险的，在类的外部，还是可以调用到这个方法
class Widget {

    // 公有方法
    foo(baz) {
        this._bar(baz);
    }

    // 私有方法
    _bar(baz) {
        return this.snaf = baz;
    }

    // ...
}

//将私有方法移出模块，因为模块内部的所有方法都是对外可见的。
class Wrap {
    foo(baz) {
        bar.call(this, baz);
    }
}

function bar(baz) {
    return this.snaf = baz;
}

//利用Symbol值的唯一性，将私有方法的名字命名为一个Symbol值。
const barSymbol = Symbol('bar');
const snafSymbol = Symbol('snaf');
class SymbolPack {

    // 公有方法
    foo(baz) {
        this[barSymbol](baz);
    }

    // 私有方法
    [barSymbol](baz) {
        return this[snafSymbol] = baz;
    }

    // ...
};