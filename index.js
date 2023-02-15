const assert = require('assert');

/**
 * TODOs
 * 1. Check if a number is or is not prime
 * 2. Generate a list (array) of prime numbers
 * 3. Create a multiplication table
 * 4. Display/print the table
 */

// Functionality

// Check if a number is/isn't prime
const isPrime = (n) => {
  if (n <= 1) return false;
  if (n <= 3) return true;
  if (n % 2 === 0 || n % 3 === 0) return false;
  for (let i = 5; i * i <= n; i += 6) {
    if (n % i === 0 || n % (i + 2) === 0) return false;
  }
  return true;
};

// Generate an array of prime numbers
const generatePrimes = (n) => {
  const primes = [];
  let num = 2;
  while (primes.length < n) {
    if (isPrime(num)) {
      primes.push(num);
    }
    num++;
  }
  return primes;
};

// Generate the multiplication table
const generateTable = (N) => {
  const primes = generatePrimes(N);
  const table = [];
  table.push([' '].concat(primes));
  primes.forEach((prime) => {
    const row = [prime];
    primes.forEach((p) => {
      row.push(prime * p);
    });
    table.push(row);
  });
  return table;
};

// Print the multiplication table
const printTable = (table) => {
  let output = '';
  table.forEach((row) => {
    row.forEach((cell) => {
      output += cell + '\t';
    });
    output += '\n';
  });
  console.log(output);
};

// Tests

/**
 *
 * Test for checking if a number is/isn't prime (isPrime)
 *
 */
// basic level checks
assert.strictEqual(isPrime(2), true);
assert.strictEqual(isPrime(3), true);

// Checks for even numbers larger than 2
assert.strictEqual(isPrime(4), false);
assert.strictEqual(isPrime(10), false);
assert.strictEqual(isPrime(100), false);

// Testing for other odd Primes
assert.strictEqual(isPrime(5), true);
assert.strictEqual(isPrime(7), true);
assert.strictEqual(isPrime(11), true);
assert.strictEqual(isPrime(13), true);
assert.strictEqual(isPrime(17), true);
assert.strictEqual(isPrime(19), true);
assert.strictEqual(isPrime(23), true);

// Odd composite numbers
assert.strictEqual(isPrime(9), false);
assert.strictEqual(isPrime(15), false);
assert.strictEqual(isPrime(21), false);
assert.strictEqual(isPrime(25), false);
assert.strictEqual(isPrime(27), false);
assert.strictEqual(isPrime(33), false);
assert.strictEqual(isPrime(35), false);

// Large primes
assert.strictEqual(isPrime(7879), true);
assert.strictEqual(isPrime(15485867), true);
assert.strictEqual(isPrime(32452843), true);

/**
 * Tests for generating a list of prime numbers (generatePrimes)
 */
// assert.strictEqual(generatePrimes(3), [2, 3, 5]);
assert.deepStrictEqual(generatePrimes(5), [2, 3, 5, 7, 11]);
assert.deepStrictEqual(
  generatePrimes(10),
  [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]
);
assert.deepStrictEqual(
  generatePrimes(100),
  [
    2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71,
    73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151,
    157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233,
    239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317,
    331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419,
    421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503,
    509, 521, 523, 541,
  ]
);

/**
 * Test for generating the table.
 */
assert.deepStrictEqual(generateTable(3), [
  [' ', 2, 3, 5],
  [2, 4, 6, 10],
  [3, 6, 9, 15],
  [5, 10, 15, 25],
]);

/**
 * Test of printing the table
 */
const capturedLog = [];
const consoleLog = console.log;
console.log = (...args) => {
  capturedLog.push(...args);
};

printTable(generateTable(3));
assert.strictEqual(
  capturedLog.join('\n'),
  ' \t2\t3\t5\t\n2\t4\t6\t10\t\n3\t6\t9\t15\t\n5\t10\t15\t25\t\n'
);

console.log = consoleLog;
