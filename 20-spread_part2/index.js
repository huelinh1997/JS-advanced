//cloning: copy 1 obj sang 1 obj khac:
//  - shallow-cloning: chi clone 1 level
//  - deep-cloning: clone tat ca object ay

// spread an array
const a = [1, 2, 3];
const b = [0, ...a, 4];
console.log(b);

// spread an object
let obj1 = {
    a: 2,
    b: 4,
    c: 6,
    d: {e: 10}
}

let obj2 = obj1;
console.log(obj2); // neu lam nhu the nay thi khi thay doi gia tri obj2, obj1 cung se bi thay doi theo

// vi vay ta co the lam nhu sau:
// shallow-cloning
let obj3 = {};
for(key in obj1) {
    obj3[key] = obj1[key];
}
obj3.c = 5;
obj3.d.e = 11; // luc nay obj1 cung bi thay doi vi cung tham chieu den {e: 10}, de giai quyet ta dung deep cloning ( tu tim hieu deep clone)

// Ta co the dung spread de shallow-cloning:
let obj4 = {
    ...obj1,
    z: 1000
};

obj4.a = 1;
console.log({obj1, obj3}); // obj1 ko bi anh huong
console.log({obj1, obj4});


