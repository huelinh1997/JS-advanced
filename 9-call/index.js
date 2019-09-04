// call
function greeting(name, age) {
  console.log(`Hi ${name}, I am ${age}`);
}
// greeting.call(null, 'Lan', 21);
// khi 1 hàm gọi call, tham số thứ nhất đại diện cho this nếu bên trong đó có this, từ tham số thứ 2 trở đi là tham số của hàm 

var cat = {
  name: 'Tom',
  age: 5
}

function greeting2() {
  console.log(`Hi ${this.name}, I am ${this.age}`);
}
greeting2.call(cat);