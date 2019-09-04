// value types vs reference type

// value types: cac kieu con lai: number, boolean, string, indefined, NaN...
let a1 = 1;
let a2 = 1;
console.log(a1 === a2);


// reference type: object, array, function la cac kieu reference type
let obj1 = {a: 1};
let obj2 = {a: 1};
console.log(obj1 === obj2);
// kiểu object phức tạp, nên khi tạo nó ra trong bộ nhớ thì biến: (obj1, obj2) sẽ lưu giá trị tham chiếu đến giá trị thực tế  của obj đấy

let a3 = a2;
console.log(a3 === a2); //true
a3 = 2;
console.log(a2); // gia tri a2 van bang 1, a3 thay doi gt ko lien quan den a2
console.log(a3 === a2); //false

let obj3 = obj2;
console.log(obj3 === obj2); // true
obj3.a = 2;
console.log(obj2); // gia tri a cua obj2 thay doi theo
console.log(obj3 === obj2); // true

function show(x) {
    x.b = 5;
}
show(obj1);
console.log(obj1); // khi tham so truyen vao la object, object se bi thay doi vi vay khi viet ham can tranh thay doi dau vao cua ham do

