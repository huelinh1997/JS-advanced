// Array like object & arguments
// Giới thiệu 1 biến nằm trong tất cả các hàm(trừ arrow function ra), gọi là argument, 
// đây là 1 object và có dạng array-like (tức là giống như array)

//array-like object:

// example: 1 arrray name
// const names = ['Thư', 'Trang', 'Lan'];
// for(let i = 0; i < names.length; i++) {
//   console.log(names[i]);
// }

// Đây được gọi là array-like object, tức là 1 object mà giống như arr, 
// khác arr ở điểm không có các method của arr
// 1 array-like object phải đảm bảo điều kiện là: 
// + phải có thuộc tính length
// + phải có các index(key value) như arr 
const obj = {
  0: 'Thư',
  1: 'Trang',
  2: 'Lan',
  length: 3
}
for(let i = 0; i < obj.length; i++) {
  console.log(obj[i]);
}
