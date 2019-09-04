// inheritance: thừa kế
// Truong hop dung: class
class Animal {
  constructor(name) {
    this.name = name;
  }
  eat() {
    console.log(`${this.name} eating...`);
  }
}

// class Bird thừa kế class animal, nó sẽ có các method của animal 
class Bird extends Animal {
  fly() {
    console.log(`${this.name} flying...`);
  }
}
const bird = new Bird('Thong');
bird.eat();
bird.fly();

class Parrot extends Bird {
  speak() {
    console.log(`${this.name} speaking...`);
  }
}
const parrot = new Parrot('vet');
parrot.eat();
parrot.fly();
parrot.speak();