// garbage collector: check xem nhung bien nao ko dung nua se bo ra khoi bo nho

// closure
// function sum(a, b) {
//   const c = a + b;
//   console.log(c);
//   return c;
// }
// sum(1, 2);

// trong javascript ta co the tra ve 1 ham
function sum(a, b) {
    const c = a + b;
    return function() {
        console.log(c);
    };
}
sum(1, 2)();