import "./styles.css";
// 1. Iterative implementation
function fibs(n) {
  if (n <= 0) return [];
  if (n === 1) return [0];

  const result = [0, 1];

  for (let i = 2; i < n; i++) {
    result.push(result[i - 1] + result[i - 2]);
  }

  return result;
}

// 2. Recursive implementation
function fibsRec(n) {

  if (n <= 0) return [];
  if (n === 1) return [0];
  if (n === 2) return [0, 1];

  const arr = fibsRec(n - 1);
  arr.push(arr[arr.length - 1] + arr[arr.length - 2]);

  return arr;
}

// 3. Testing both functions
console.log("--- Testing fibs (Iterative) ---");
console.log(fibs(0)); // []
console.log(fibs(1)); // [0]
console.log(fibs(2)); // [0, 1]
console.log(fibs(8)); // [0, 1, 1, 2, 3, 5, 8, 13]

console.log("\n--- Testing fibsRec (Recursive) ---");
console.log(fibsRec(0)); // []
console.log(fibsRec(1)); // [0]
console.log(fibsRec(2)); // [0, 1]
console.log(fibsRec(8)); // [0, 1, 1, 2, 3, 5, 8, 13]