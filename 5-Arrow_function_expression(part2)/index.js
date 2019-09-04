// Sự khác nhau giữa arrow function expression (or fat arrow) và function bình thường:
// dùng function binh thuong:
// var mouse = {
//   name: 'Jerry',
//   run: function() {
//     // console.log(this.name, 'running...');
//     var run2 = function() {
//       console.log(this.name, 'running...');
//     }.bind(this);
//     run2();// lúc này return undefined vì this ko trỏ mouse nữa, this lúc này là global scope, để khắc phục có thể dùng bind or var that = this....that.name ....
//   }
// }
// mouse.run();

// Dung arrow fat:
// var cat = {
//   name: 'Tom',
//   run: function() {
//     var run2 = () => {
//       console.log(this.name, 'running...');
//     };
//     run2();
//   }
// }
// cat.run(); // Vi arrow fat này ko có context, nên this ở đây chính là this của hàm mà nó nằm trong  

// Other example:
var a = {
  foo: 'bar',
  run: function() {
    setTimeout(function() {
      console.log(this.foo); // this ở đây chính là context của function lúc mình gọi setTimeout 
      // hàm bên trong ko thừa kế this của hàm bên ngoài 
    },2000);
  }
}
a.run(); // return undefined sau 2s

// để khắc phục, có nhiều cách
// ** c1: dùng bind(this) or bind(a)
// var a = {
//   foo: 'bar',
//   run: function() {
//     setTimeout(function() {
//       console.log(this.foo);  
//     }.bind(this),2000);
//   }
// }
// a.run();

// ** c2: khai bao that thay the 
// var a = {
//   foo: 'bar',
//   run: function() {
//     var that = this;
//     setTimeout(function() {
//       console.log(that.foo);
//     },2000);
//   }
// }
// a.run();

// ** c3: dung fat arrow 
// var a = {
//   foo: 'bar',
//   run: function() {
//     setTimeout(() => {
//       console.log(this.foo); 
//     },2000);
//   }
// }
// a.run();