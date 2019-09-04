// Trình biên dịch của Javascript sẽ chuyển phần khai báo của biến và hàm lên trên top, 
// nó được gọi là Hoisting

// Hoisting là vấn đề liên quan đến cách khai báo biến trong Javascript. 
// Nó liên quan đến việc trong Javascript bạn có thể sử dụng một biến mà không cần phải định nghĩa trước, 
// vì vậy để chương trình chạy chuẩn thì bạn phải khai báo biến trước khi sử dụng 
// và đặt nó phía trên cùng phạm vi của biến (trong function, trong đoạn script, ...).



// 1.
// var x;
// console.log(x);
// => return undefined

// 2.
// console.log(x);
// => return err

// 3. 
// console.log(x);
// var x = 5;
// => return undefined bởi vì chương trình khi găp các khai báo var sẽ đưa lên đầu nhưng ko đưa giá trị => giống trường hợp 1 => undefined
// Bao giờ cũng nên khai báo các biến ở đầu hàm 
// 
// Hoisting là hành động mặc định của Javascript, 
// nó sẽ chuyển phần khai báo lên phía trên top Trong Javascript, 
// một biến (variable) có thể được khai báo sau khi được sử dụng