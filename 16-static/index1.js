// static
class Foo {
  static someMethod() {
    console.log('some method');
  }

  anotherMethod() {
    console.log('another method');
  }
}

Foo.someMethod();
// Foo.anotherMethod(); // => err. muốn gọi another method phải khai báo 1 instance
const foo = new Foo(); // instance: là 1 object tạo ra từ 1 class nào đấy, người ta bảo object đấy là instance của class đó 
foo.anotherMethod();
// ngược lại ko thể gọi someMethod từ innstance vì static -> thuộc về class, chỉ có class mới gọi dc nó 
// 
// 
// 
//  Static method này được dùng khi các bạn ko đòi hỏi tạo 1 object mới để có thể dùng dc func đấy 
//  Có thể dùng static để tạo ra các biến static của class mà chỉ có thể truy cập từ class 
//  mà ko dc truy cập từ các instance tạo ra từ class đấy 