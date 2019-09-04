// Array like object & arguments
// Giới thiệu 1 biến nằm trong tất cả các hàm(trừ arrow function ra), gọi là argument, đây là 1 object và có dạng array-like (tức là giống như array)
//arguments:

// BT: Viết 1 hàm nhận vào n tham số rồi tính tổng 

// có thể dùng arr:
// function sum(arr) {
//   return arr.reduce((a, b)=> a + b);
// }
// sum([1, 2, 3, 4]);

// Ngoài ra có thể dùng argument: là 1 biến tồn tại bên trong scope của 1 hàm(trừ fat arrow)
// đây là 1 array-like object , arguments tuy ko dc khai báo nhưng luôn tồn tại trong scope của hàm đấy

function sum1() {
  //console.log(arguments);
  //console.log(arguments.length);
  let result = 0;
  for(let i = 0; i < arguments.length; i++) {
    result += arguments[i];
  }
  return result;
}
//sum1(1, 2, 3, 4);

// hoặc biến đổi arguments thành 1 arr rồi dùng các method của arr
function sum2() {
  const numbers = Array.from(arguments); // chuyen arguments thanh 1 arr
  return numbers.reduce((a, b) => a + b);
}
sum2(1, 2, 3, 4);
