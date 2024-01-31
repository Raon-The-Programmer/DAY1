let obj1 = { name: "Person 1", age: 5 };
let obj2 = { age: 8, name: "Person 1" };

const isEquivalent = (a, b) => {
  const aProps = Object.getOwnPropertyNames(a);
  const bProps = Object.getOwnPropertyNames(b);

  if (aProps.length !== bProps.length) {
    return false;
  }

  for (let i = 0; i < aProps.length; i++) {
    const propName = aProps[i];
    if (a[propName] !== b[propName]) {
      return false;
    }
  }

  return true;
};

console.log(isEquivalent(obj1, obj2)); // true
