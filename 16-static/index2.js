// nếu viết bằng constructor:
function Foo() {

}

Foo.prototype.anotherMethod = function() {
  console.log('another method');
}

Foo.someMethod = function() {
  console.log('some method');
}

const foo = new Foo();
foo.anotherMethod();

Foo.someMethod();