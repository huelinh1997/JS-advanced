// var let const
// 1. Declaration
// 2. hoisting
// 3. block scope (if, for, )
// 4. redeclaration (khai báo lại)

// 2. hosting
// khai bao var => undefined
function run() {
  console.log(a);
  var a;
}
run();

// neu thay "var" bang "let" or "const" => err, let & const deu ko co hosting
// Trong javasript: hosting tạo ra hiệu ứng mà chúng ta ko mong muốn, 
// vì vậy để tránh trường hợp đấy chúng ta dùng let or const (tùy vào chúng ta muốn thay đổi biến hay ko)