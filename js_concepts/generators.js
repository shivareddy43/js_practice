// syntax is function*
function* fetchElement() {
  console.log("I am inside the generator function");
  yield 1;
  yield 2;
  console.log("Somewhere is the middle");
  yield 3;
  return 10;
  yield 4; // this do not work if we keep return above it.
}

const iter = fetchElement(); // execution of a generator function does not start at the time of calling function
console.log(iter);
// console.log(iter.next());//{value:,done:}
// execution stops after function sees yield and resumes execution till it see next yield.
console.log(iter.next());
console.log(iter.next()); // resumes execution at every yield
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
