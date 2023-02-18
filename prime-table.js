/**
 * TODOs
 * 1. Check if a number is or is not prime
 * 2. Generate a list (array) of prime numbers
 * 3. Create a multiplication table
 * 4. Display/print the table
 */

// Functionality

// Check if a number is/isn't prime
export const isPrime = (n) => {
  if (n < 2) {
    return false;
  }
  if (n === 2 || n === 3) {
    return true;
  }
  if (n % 2 === 0) {
    return false;
  }

  let m = n - 1;
  let k = 0;
  while (m % 2 === 0) {
    m /= 2;
    k++;
  }

  const numTests = Math.min(n - 2, 10);
  for (let i = 0; i < numTests; i++) {
    const a = Math.floor(Math.random() * (n - 3)) + 2;
    let x = modPow(a, m, n);
    if (x === 1 || x === n - 1) {
      continue;
    }
    for (let j = 0; j < k - 1; j++) {
      x = modPow(x, 2, n);
      if (x === n - 1) {
        break;
      }
      if (x === 1) {
        return false;
      }
    }
    if (x !== n - 1) {
      return false;
    }
  }

  // Probably prime
  return true;
};

// Computes (a^b) % m efficiently
export const modPow = (a, b, m) => {
  let result = 1;
  a %= m;
  while (b > 0) {
    if (b % 2 === 1) {
      result = (result * a) % m;
    }
    a = (a * a) % m;
    b = Math.floor(b / 2);
  }
  return result;
};

// Generate an array of prime numbers
export const generatePrimes = (n) => {
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
export const generateTable = (N) => {
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
export const printTable = (table) => {
  let output = '';
  table.forEach((row) => {
    row.forEach((cell) => {
      output += cell + '\t';
    });
    output += '\n';
  });
  console.log(output);
};
