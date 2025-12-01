const someIterator = function () {
  let i = 0;
  const myIterator = {
    next() {
      return { value: i++, done: i > 5 };
    },
    [Symbol.iterator]() {
      return this;
    }
  };
  return myIterator
};
