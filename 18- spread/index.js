// ...spread
const a = [1, 2, 3];
const b = [0, ...a, 4];
//console.log(b);
// rest: gom giá trị thành một array
// spread: trải giá trị trong 1 arr ra thành các phần tử 

// example 2:
function sum(...nums) {
    return nums.reduce((sum, num) => sum + num, 0);
}
console.log(sum(...a)); // = sum(1, 2, 3);