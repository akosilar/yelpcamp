class Pet {
    constructor(name,age) {
        this.name = name;
        this.age = age;
        console.log('in pet constructor');
    }
    eat() {
        return `${this.name} is eating.`
    }
}

class Cat extends Pet {
    constructor(name,livestLeft =9) {
        console.log('in cat constructor');
        super(name,age);
        this.livestLeft = livestLeft;
    }
    meow() {
        return 'meow';
    }
}

class Dog extends Pet{
  
    bark() {
        return 'bark';
    }
}