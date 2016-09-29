var Person = function(){
    this.name = 'name';
    this.show = function(){
        console.log(this.name);
    }
}

Person.prototype.info = function(){
    console.log('info');
}


var person = new Person();
person.show();
person.info();