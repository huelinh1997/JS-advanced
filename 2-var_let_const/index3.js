// var let const
// 1. Declaration
// 2. hoisting
// 3. block scope (if, for, )
// 4. redeclaration (khai báo lại)

// 3. Block scope
// let & const: có block scope, var thì ko có block scope mà chỉ có function scope thôi 
if(true) {
  var x = 5;
}
console.log(x); // return 5, vì var ko tuân thủ block scope, tức là nếu bạn khai báo bên trong block scope của if thì biến vẫn được tạo bên ngoài 

// nếu dùng let & const thì sẽ err 
// nếu dùng let or const thì có thể gói gọn biến x ở bên trong block scope của if 

// hoặc chỉ cần dùng {} cũng là block scope, tuy nhiên cái này ít dùng 
{
  let a = 6;
  //console.log(a); => return 6 
}
// console.log(a); // => err

console.log('-----------------------------------');
// block scope for
for(let i = 0; i < 5; i++) {
  console.log(i);
}
// console.log(i); // => return err vi nam ngoai block scope
// neu dung var thi return 5, vi var ko tuan thu block scope

// NOTE: ko dung "const" khi dung vong lap for. vi const chi dc goi 1 lan thoi, no ko the thay doi gia tri