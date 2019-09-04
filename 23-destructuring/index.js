// destructuring (gỡ bỏ cấu trúc), có thể áp dụng được cho array và object
// const arr = [10, 20, 30, 40, 50];
// // dưới đây là 1 destructuring trong 1 array
// // const [a, b, c, d, e] = arr;
// // const [a, d] = arr;
// const [a, , , d, e] = arr;
// console.log(a, d);

console.log('--------------------------------');
// destruncturing object
const obj = {
    a: 1,
    b: 2,
    c: 3
};

// const {a, b, c} = obj;
// console.log(a, b, c);

const {a, ...c} = obj;
console.log(a, c);