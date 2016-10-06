function Animal() {
    this.name = "Animal";
    this.eat = function (food) {
        console.log(this.name + ' eat ' + food)
    }
}

function Cat() {
    this.name = "Cat";
}

var animal = new Animal();
var cat = new Cat();

//通过call或apply方法，将原本属于Animal对象的eat()方法交给对象cat来使用了。     
animal.eat.call(cat, "fish");
animal.eat.apply(cat, ['fish']);  