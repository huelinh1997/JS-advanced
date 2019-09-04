// arrow function expression (or fat arrow)
// Cách dùng "fat arrow" để thay thế function: (ko phải lúc nào cũng thay thế dc)

// 1. Dùng function bình thường
// function sum(a, b) {
//   return a + b;
// }
// sum(1, 2);

// var sum2 = function(a, b) {  // khai báo hàm kiểu khác: kb biến & gán gt cho nó là 1 hàm
//   return a + b;
// }
// sum2(1, 2);

// 2. Dùng arrow function expression (or fat arrow)
var sum = (a, b) => {
  return a + b;
}

// Hoặc có thể viết gọn hơn:
// var sum = (a, b) => a + b; // chỉ 1 dòng return nên có thể lược bỏ {}
sum(1, 2);

// Example 1
var square = (x) => x*x;
// Hoặc có thể viết ngắn hơn nữa:
// var square = x => x*x; // 1 biến x ở trong dấu ngoặc nên có thể bỏ {}
square(5);

// Example 2
var arr = [1, 2, 3]; 
// cach dung ham cu:
arr.map(function(x) {
  return x*x;
});
// dung fat arrow
// arr.map(x => x*x);
