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
// TODO: This is brute force. Fix it.
const isPrime = (n) => {
  if (n <= 1) return false;
  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false;
  }
  return true;
};

// Generate an array of prime numbers
const generatePrimes = (n) => {};

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
assert.strictEqual(generatePrimes(3), [2, 3, 5]);
assert.strictEqual(generatePrimes(5), [2, 3, 5, 7, 11]);
assert.strictEqual(generatePrimes(10), [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]);
assert.strictEqual(
  generatePrimes(100),
  [
    2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71,
    73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151,
    157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233,
    239, 241, 251, 257, 263, 269, 271, 277, 281, 293, 307, 311, 313, 317, 331,
    337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421,
    431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509,
    521, 523, 541,
  ]
);
