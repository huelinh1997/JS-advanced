// apply
// call : func.call(this, param1, param2,...);
// apply: func.apply(this, [param1, param2, ...]);

// var cat = {
//   name: 'Tom',
//   age: 5
// }

// function greeting() {
//   console.log(`Hi, ${this.name}, I am ${this.age}`);
// }
// greeting.apply(cat);

// Dung apply trong truong hop nao???
// hàm tính tổng nhận vào tùy ý giá trị đầu vào, dùng arguments đã học 
function sum() {
  const numbers = Array.from(arguments);
  return numbers.reduce((sum, num) => sum + num, 0);
}

function average() {
  //sum
  const x = sum.apply(null, arguments); 
  // sum / arguments.length
  return x / arguments.length;
}
average(1, 2, 3, 4, 5);