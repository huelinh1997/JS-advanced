// var let const
// 1. Declaration
// 2. hoisting
// 3. block scope (if, for, )
// 4. redeclaration (khai báo lại)

// 1.
var a = 1;
let b = 2;
const c = 3;
console.log(a, b, c);

var a = 4; // có thể khai báo lại 
// console.log(a);

// let b = 5; => lỗi vì ko thể khai báo lại

// const c = 6; => lỗi vì ko thể khai báo lại
// 

var a;
let b;
const c; // báo lỗi, vì khi khai báo const thì phải gán giá trị cho nó 
