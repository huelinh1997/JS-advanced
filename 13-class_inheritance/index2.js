// inheritance: thừa kế
// Truong hop dung: constructor
function Animal(name) {
  this.name = name;
}

Animal.prototype.eat = function() {
  console.log(`${this.name} eating`);
}
//var a = new Animal('xx');
//a.eat();

function Bird(name) {
  Animal.apply(this, arguments);
  // Animal.call(this, name);
}
Bird.prototype = new Animal();
const bird = new Bird('Thong');
bird.eat();