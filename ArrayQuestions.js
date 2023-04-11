// Get nth element of array

// Write a function that takes an array (a) and a value (n) as argument. Return the nth element of 'a'
// Ans
function myFunction(a, n) {
    return a[n - 1];
 }
// ================================================================
// Remove first n elements of an array

// Write a function that takes an array (a) as argument. Remove the first 3 elements of 'a'. Return the result

// Ans
function myFunction(a) {
   return a.slice(3);
}
// ================================================================
// Get last n elements of an array

// Write a function that takes an array (a) as argument. Extract the last 3 elements of 'a'. Return the resulting array

// Ans
function myFunction(a) {
   return a.slice(-3);
}
// ================================================================
// Get first n elements of an array

// Write a function that takes an array (a) as argument. Extract the first 3 elements of a. Return the resulting array

// Ans

function myFunction(a) {
   return a.slice(0, 3);
}
// ================================================================
// Return last n array elements

// Write a function that takes an array (a) and a number (n) as arguments. It should return the last n elements of a.

// Ans

function myFunction(a, n) {
  return a.slice(-n);
}
// ================================================================
// Count number of elements in JavaScript array

// Write a function that takes an array (a) as argument. Return the number of elements in a.

// Ans

function myFunction(a) {
   return a.length;
}
// ================================================================
// Count number of negative values in array

// Write a function that takes an array of numbers as argument. Return the number of negative values in the array.

// Ans

function myFunction(a) {
   return a.filter((el) => el < 0).length;
}
// ================================================================
// Sort an array of strings alphabetically

// Write a function that takes an array of strings as argument. Sort the array elements alphabetically. Return the result.

// Ans

function myFunction( arr ) {
return arr.sort()
}
// ================================================================
// Sort an array of numbers in descending order

// Write a function that takes an array of numbers as argument. It should return an array with the numbers sorted in descending order.

// Ans

function myFunction( arr ) {
  return arr.sort((a, b) => b - a)
}
// ================================================================
// Calculate the sum of an array of numbers

// Write a function that takes an array of numbers as argument. It should return the sum of the numbers.

// Ans

function myFunction(a) {
   return a.reduce((acc, cur) => acc + cur, 0);
}
// ================================================================
// Return the average of an array of numbers

// Write a function that takes an array of numbers as argument. It should return the average of the numbers.

// Ans

function myFunction( arr ) {
return arr.reduce((acc, cur) => acc + cur, 0) / arr.length
}
// ================================================================
// Return the longest string from an array of strings

// Write a function that takes an array of strings as argument. Return the longest string.

// Ans

function myFunction( arr ) {
return arr.reduce((a, b) => a.length <= b.length ? b : a)
}

// ================================================================
// Check if all array elements are equal

// Write a function that takes an array as argument. It should return true if all elements in the array are equal. It should return false otherwise.

// Ans

function myFunction( arr ) {
  return new Set(arr).size === 1
}
// ================================================================
// Merge an arbitrary number of arrays

// Write a function that takes arguments an arbitrary number of arrays. It should return an array containing the values of all arrays.

// Ans

function myFunction( ...arrays ) {
return arrays.flat()
}
// ================================================================
// Sort array by object property

// Write a function that takes an array of objects as argument. Sort the array by property b in ascending order. Return the sorted array

// Ans

function myFunction(a, b) {
  return [...new Set([...a, ...b])].sort((x, y) => x - y);
}

// ================================================================
// Merge two arrays with duplicate values

// Write a function that takes two arrays as arguments. Merge both arrays and remove duplicate values. Sort the merge result in ascending order. Return the resulting array

// Ans


function myFunction(a, b) {
  return [...new Set([...a, ...b])].sort((x, y) => x - y);
}