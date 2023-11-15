function curry(fn) {
  // Your code here:
  const args = [];
  const argsNum = fn.length;

  return function curried(arg) {
    args.push(arg);

    if (args.length === argsNum) return fn(...args);
    return curried;
  };
}

const calcAllFour = (var1, var2, var3, var4) => {
  return var1 + var2 - var3 * var4;
};

console.log(calcAllFour(1, 3, 5, 8));

let curriedDoSomething = curry(calcAllFour);
console.log(curriedDoSomething);

const firstReturn = curriedDoSomething(1);
const secondReturn = firstReturn(2);
const thirdReturn = secondReturn(3);
const fourthReturn = thirdReturn(4);

console.log(firstReturn);
console.log(secondReturn);
console.log(thirdReturn);
console.log(fourthReturn);

module.exports = curry;
