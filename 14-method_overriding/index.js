// method overriding:
// overriding được định nghĩa là ghi đè phương thức, 
// có nghĩa là khi một lớp con kế thừa trực tiếp từ một lớp cha thì lớp con đó 
// có thể định nghĩa lại một phương thức đã có trong lớp cha cho phù hợp với mục đích của nó.
class CoffeeMachine {
  makeCoffee() {
    console.log('making coffee...');
  }
}

class SpecialCofeeMachine extends CoffeeMachine {
  makeCoffee(callback) {
    console.log('making coffee and do some thing...');
    callback();
  }
}
function alarm() {
  console.log('Tit tit...');
}
const coffeeMachine = new SpecialCofeeMachine();
coffeeMachine.makeCoffee(alarm);