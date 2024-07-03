function* fetchnextElemnt() {
  console.log("inside gnerator");
  const x = 10;
  yield 11;
  console.log("Entering after a yield");
  const y = x + (yield 30);
  console.log("Value of y : ", y);
}

console.log("start");
const iter = fetchnextElemnt();
console.log("first ", iter.next());
console.log("first ", iter.next());
console.log("first ", iter.next(10)); // the passed value will replace yield 30 and y becomes x+10, if nothing is passed yield 30 is rreplaced by undefined and y becomes Nan
console.log("first ", iter.next());
