// Using iteration, write a function fibs which takes a number and returns an array containing that many numbers from the fibonacci sequence. Using an example input of 8, this method should return the array [0, 1, 1, 2, 3, 5, 8, 13].

function fibs(fn) {
  const array = [0, 1];
  if (fn <= 0) return "Please enter a positive integer.";
  if (fn === 1) return [0];
  if (fn === 2) return [0, 1];
  for (let i = 0; i < fn - 2; i++) array.push(array.at(-1) + array.at(-2)); // or array[i] + array[i + 1]
  return array;
}

console.log(fibs(-2)); // Please enter a positive integer.
console.log(fibs(1)); // returns [0]
console.log(fibs(2)); // returns [0, 1]
console.log(fibs(8)); // returns [0, 1, 1, 2, 3, 5, 8, 13]
