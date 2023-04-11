// Accessing object properties one

// Write a function that takes an object with two properties as argument. It should return the value of the property with key country.
// Ans
function myFunction(obj) {
  return obj.country;
}

// =======================================================
// Accessing object properties two

// Write a function that takes an object with two properties as argument. It should return the value of the property with key 'prop-2'. Tipp: you might want to use the square brackets property accessor

// Ans
function myFunction(obj) {
  return obj['prop-2']
}
// =======================================================
// Accessing object properties three

// Write a function that takes an object with two properties and a string as arguments. It should return the value of the property with key equal to the value of the string


// Ans
function myFunction(obj, key) {
  return obj[key]
}
// =======================================================
// Check if property exists in object

// Write a function that takes an object (a) and a string (b) as argument. Return true if the object has a property with key 'b'. Return false otherwise. Tipp: test case 3 is a bit tricky because the value of property 'z' is undefined. But the property itself exists.

// Ans 
function myFunction(a, b) {
   return b in a;
}
// ===================================================
// Check if property exists in object and is truthy

// Write a function that takes an object (a) and a string (b) as argument. Return true if the object has a property with key 'b', but only if it has a truthy value. In other words, it should not be null or undefined or false. Return false otherwis

// Ans
function myFunction(a, b) {
   return Boolean(a[b]);
}

// ======================================================
// Creating Javascript objects one


// Write a function that takes a string as argument. Create an object that has a property with key 'key' and a value equal to the string. Return the object.

// Ans 1
function myFunction(a) {
  const obj = {
    key: a
  };
  return obj;
}

// Ans 2

function myFunction(a) {
   return { key: a };
}
// ======================================================
// Creating Javascript objects two

// Write a function that takes two strings (a and b) as arguments. Create an object that has a property with key 'a' and a value of 'b'. Return the object.

// Ans1
function myFunction(a, b) {
  const obj = {
    [a]: b
  };
  return obj;
}

// Ans 2

function myFunction(a, b) {
   return { [a]: b };
}
// ======================================================
// Creating Javascript objects three

// Write a function that takes two arrays (a and b) as arguments. Create an object that has properties with keys 'a' and corresponding values 'b'. Return the object.

// Ans 1
function myFunction(a, b) {
  const obj = {};
  for (let i = 0; i < a.length; i++) {
    obj[a[i]] = b[i];
  }
  return obj;
}

// Ans2
function myFunction(a, b) {
   return a.reduce((acc, cur, i) => ({ ...acc, [cur]: b[i] }), {});
}

// ======================================================
// Extract keys from Javascript object

// Write a function that takes an object (a) as argument. Return an array with all object keys.

// Ans
function myFunction(a) {
   return Object.keys(a);
}
// ======================================================
// Return nested object property

// Write a function that takes an object as argument. In some cases the object contains other objects with some deeply nested properties. Return the property 'b' of object 'a' inside the original object if it exists. If not, return undefined

// Ans 1
function myFunction(obj) {
  if (obj && obj.a && obj.a.b) {
    return obj.a.b;
  } else {
    return undefined;
  }
}


// Ans 2

function myFunction(obj) {
   return obj?.a?.b;
}

// ======================================================
// Sum object values

// Write a function that takes an object (a) as argument. Return the sum of all object values.

// Ans 1
function myFunction(a) {
  let sum = 0;
  for (let key in a) {
    if (typeof a[key] === 'number') {
      sum += a[key];
    }
  }
  return sum;
}

// Ans 2

function myFunction(a) {
   return Object.values(a).reduce((sum, cur) => sum + cur, 0);
}
// ======================================================
// Remove a property from an object

// Write a function that takes an object as argument. It should return an object with all original object properties. except for the property with key 'b'

// Ans1
function myFunction(obj) {
  let result = {};
  for (let key in obj) {
    if (key !== 'b') {
      result[key] = obj[key];
    }
  }
  return result;
}


// Ans2

function myFunction(obj) {
  const { b, ...rest } = obj;
  return rest;
}


// ======================================================
// Merge two objects with matching keys

// Write a function that takes two objects as arguments. Unfortunately, the property 'b' in the second object has the wrong key. It should be named 'd' instead. Merge both objects and correct the wrong property name. Return the resulting object. It should have the properties 'a', 'b', 'c', 'd', and 'e'

// Ans1
function myFunction(x, y) {
  let result = {};
  for (let key in x) {
    result[key] = x[key];
  }
  for (let key in y) {
    if (key === 'b') {
      result['d'] = y[key];
    } else {
      result[key] = y[key];
    }
  }
  return result;
}


// Ans2

function myFunction(x, y) {
  const { b, ...rest } = y;
  return { ...x, ...rest, d: b };
}
// ======================================================
// Multiply all object values by x

// Write a function that takes an object (a) and a number (b) as arguments. Multiply all values of 'a' by 'b'. Return the resulting object.

// Ans1
function myFunction(a, b) {
  let result = {};
  for (let key in a) {
    if (typeof a[key] === 'number') {
      result[key] = a[key] * b;
    } else {
      result[key] = a[key];
    }
  }
  return result;
}


// Ans2
function myFunction(a, b) {
   return Object.entries(a).reduce((acc, [key, val]) => {
   	return { ...acc, [key]: val * b };
   }, {});
}

