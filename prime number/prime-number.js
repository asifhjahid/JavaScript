function isPrimeNumber(n) {
  for (let i = 2; i < n; i++) {
    if (n % i == 0) {
      return "This is not a prime number";
    }
  }

  return "This is a prime number";
}

let result = isPrimeNumber(110);
console.log(result);
