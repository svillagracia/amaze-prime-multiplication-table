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
  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false;
  }
  return true;
};

// Tests

// Test for checking if a number is/isn't prime (isPrime)

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
