// Template String
// In ra 1 string binh thuong
function greeting(name) {
  return 'Hi, ' + name + '!' ;
}

// Dung template String
function greeting2(name) {
  return `Hi, ${name}!`;
}
function greeting3(name) {
  return `Hi,

${name} ${1+2}!`; // có thể viết xuống dòng được, có thể thêm các biểu thức khác 
}


var result = greeting3('Linh');
console.log(result);

// ngoai ra ben trong ${}, các bạn có thể viết các biểu thức javascript(+, -, *, /,...) 
// hoặc có thể gọi cả hàm bên trong, bất cứ những gì liên quan đến javascript đều có thể viết vào được 