// global context
// function context
// bind
var mouse = {
  name: 'Mickey',
  sayHi: function() {
    console.log('Hi, my name is',this.name);
  }
}

var cat = {
  name: 'Tom';
}

// mouse.sayHi(); // context của sayHi là mouse, và biến this ở trong sayHi thì trỏ đến mouse 
// var say = mouse.sayHi;
// dòng trên đồng nghĩa với việc khai báo say = function() {console.log(...)}

// say(); // function này được gọi mà ko có object nào ở trước, 
      //  có thể hiểu là ko có context hoặc context của nó là 1 global context 
      // lúc này, khi gọi say(), this ở đây là 1 global context, 
      // vì vậy sẽ trả về undefined 

// nếu muốn thay đổi context của 1 function thì mình sẽ dùng hàm bind 
// (tất cả các function đều có 1 method mà mình có thể dùng dc, 1 trong số đó là bind)
var say = mouse.sayHi.bind(mouse);
// var say = mouse.sayHi.bind(cat);
say();