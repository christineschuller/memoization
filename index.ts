const add = (a: number, b: number) => {
  console.log('calc happened');
  return a + b;
};

const isEqual = (a: any[], b: any[]) => {
  if (a.length != b.length) {
    return false;
  }

  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      return false;
    }
  }

  return true;
};

const getMemoizedFunction = (f) => {
  let lastArgs;
  let lastResult;

  return (...args) => {
    if (
      lastArgs != undefined &&
      lastArgs.filter((item, i) => item === args[i]).length === args.length
    ) {
      return lastResult;
    }

    lastArgs = args;
    lastResult = f(...args);
    return lastResult;
  };
};

const memoizedAdd = getMemoizedFunction(add);

console.log(memoizedAdd(1, 2));
console.log(memoizedAdd(1, 3));
console.log(memoizedAdd(1, 3));

// In a pure function, passing the same parameters (key) will aleays print the same result (value).

/*





const add = (a: number, b: number) => {
  if (lastResult != undefined && lastA === a && lastB === b) {
    return lastResult;
  }

  console.log('calculation happened called');
  lastResult = a + b;
  lastA = a;
  lastB = b;
  return lastResult;
};



*/
