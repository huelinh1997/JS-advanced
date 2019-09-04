
// ứng dụng rest:
//example 1:
// function sum(...nums) {
//   return nums.reduce((a, b) => a + b);
// }
// sum(1, 2, 3, 4, 5);

// example 2:
function concat(separator, ...strings) {
  return strings.join(separator);
}
concat('.', 'a', 'b', 'c', 'd'); 
// có thể truyền bao nhiêu chuỗi đằng sau cũng dc
// KQ trả về mong muốn: 'a.b.c.d' 

// rest dùng trong trường hợp ko biết số lượng tham số đầu vào như thế nào 