// toan tu rest trong js
// ...rest (phần còn lại)

// Example 1:
function show(a) {
  console.log(a);
}
// show(1);
// show(1, 2, 3, 4); // các tham số ở phía sau do ko đc định nghĩa trong hàm nên ko log ra. 2, 3, 4 ở đây chính là phần còn lại

// để lấy dc phần còn lại đó, mà bạn ko biết là nó sẽ truyền vào bao nhiêu tham số thì dùng rest trong trường hợp đó 
// Example 2:
function show1(a, ...numbers) {
  console.log(a);
  console.log(numbers); // có thể thấy rest là 1 arr 
  console.log(arguments);
}
// show1(1, 2, 3, 4);

// rest khác với arguments ở đâu???
// arguments chứa tất cả các biến mà các bạn truyền vào, và nó là 1 object, array-like object chứ ko phải array 

// Example 3:
function show2(...numbers) {
  console.log(numbers);  
  console.log(Array.from(arguments));
  console.log(arguments);
}
show2(1, 2, 3, 4);

// làm như example 3 ta được kết quả tương tự như Array.from(arguments), tức là trả về 1 arr các tham số truyền vào, cách này nhanh hơn vì bỏ qua bước Array.from();
