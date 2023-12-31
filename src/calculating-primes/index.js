const min = 1;
const max = +process.argv[2] || 1e7;
const primes = [];

function generatePrimes(start, range) {
    let min = 2;
    let isPrime = true;
    let end = start + range;

    // because 1 is not prime number
    if (start === 1) {
        start++;
    }

    for (let i = start; i < end; i++) {
        for (let j = min; j < Math.sqrt(end); j++) {
            if (i !== j && i % j === 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime) {
            primes.push(i);
        }

        isPrime = true;
    }
}

console.log(`Generate prime numbers for the range from 1 to ${max}`);
generatePrimes(min, max);
console.log(`Found: ${primes.length} primes`);
