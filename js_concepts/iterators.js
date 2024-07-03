function fetchElement(array) {
  let idx = 0;
  function next() {
    if (idx === array.length) {
      return undefined;
    }
    const nxtEle = array[idx];
    idx++;
    return nxtEle;
  }
  return { next };
}

const automaticFetcher = fetchElement([3, 4, 2, 3, 3, 4, 5]);
console.log(automaticFetcher.next());
console.log(automaticFetcher.next());
console.log(automaticFetcher.next());
console.log(automaticFetcher.next());
// iterator has 2 properties 1) value 2) done and 3) next function return {value:,done:}
arr = [1, 2, 4, 56, 7, 8, 3, 2, 45];

iterator = arr[Symbol.iterator]();
console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next()); // { value: 2, done: false }
// done tells whether we hve iterated all the values on array.
