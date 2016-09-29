/**
 * 极简主义法 minimalist approach
 * 
 * 方法不使用this和prototype，代码部署起来非常简单，这大概也是它被叫做"极简主义法"的原因
 * 
 */

//1 封装
/**
 * 首先，它也是用一个对象模拟"类"。在这个类里面，定义一个构造函数createNew()，用来生成实例。
 * 然后，在createNew()里面，定义一个实例对象，把这个实例对象作为返回值。
 * 使用的时候，调用createNew()方法，就可以得到实例对象。
 */

var Cat = {
    createNew: function () {
        var cat = {};
        cat.name = 'cat';
        cat.sound = function () {
            console.log(this.name + ' miao');
        }
        return cat;
    }
}

var cat = Cat.createNew();
cat.sound();

//2 继承
var Animal = {
    createNew: function () {
        var animal = {};
        animal.sleep = function () {
            console.log('animal sleep');
        }
        return animal;
    }
}

var Dog = {
    createNew: function () {
        var dog = Animal.createNew();
        dog.name = 'dog';
        dog.sound = function () {
            console.log(this.name + ' wanwan');
        }
        return dog;
    }
}

var dog = Dog.createNew();
dog.sound();

//3 私有属性 方法
/**
 * 在createNew()方法中，只要不是定义在monkey对象上的方法和属性，都是私有的。
 * 
 * 外部无法访问 sound变量
 */
var Monkey = {
    createNew: function () {
        var monkey = {};
        var sound = "yayyy";
        monkey.makeSound = function () { console.log(sound) };
        return monkey;
    }
};
var monkey = Monkey.createNew();
console.log(monkey.sound);

//4 数据共享
/**
 * 有时候，我们需要所有实例对象，能够读写同一项内部数据。这个时候，只要把这个内部数据，封装在类对象的里面、createNew()方法的外面即可。
 */

var Fish = {
    sound: 'shusou',
    createNew: function () {
        var fish = {};
        fish.makeSound = function () {
            console.log(this.sound);
        }.bind(this);
        return fish;
    }
}

var fish1 = Fish.createNew();
fish1.makeSound();