// Ôn lại kiến thức cũ:
// Có 2 cách tạo object:
// c1: define 1 constructor function và dùng new để khởi tạo 1 object mới 
function Mouse(name) {
  this.name = name;
}
Mouse.prototype.run = function() {
  console.log (`${this.name} is running...`);
}
const mickey = new Mouse('Mickey');
mickey.run();

// c2: viết 1 object ra dưới dạng var a = {}, truyền vào các key value, property và các method cho nó, và cách khai báo thứ 2 này gọi là object literals 

//object literals
const jerry = {
  name: 'Jerry',
  run: function() {
    console.log( `${this.name} is running...`);
  }
}
jerry.run();

// Enhanced object literals: giúp bạn khai báo ngắn gọn hơn các thuộc tính, các method của 1 object 
// example:
const name = 'Tom';
const cat = {
  name,
  run() {
    console.log( `${this.name} is running...`);
  }
}
cat.run();