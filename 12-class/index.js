// constructor function
// function Mouse(name) {
//   this.name = name;
// }
// Mouse.prototype.run = function() {
//   console.log (`${this.name} is running...`);
// }
// const mouse = new Mouse('Mickey');
// mouse.run();

// class: được sinh ra để chúng ta viết constructor function được ngắn gọn hơn và giống với ngôn ngữ OOP hơn
 class Mouse {
   constructor(name) {
     this.name = name;
   }
   run() {
     console.log (`${this.name} is running...`);
   }
 }
const mouse = new Mouse('Mickey');
mouse.run();
