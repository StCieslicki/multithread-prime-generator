export function primesGenerator(start, range) {
    const min = 2;
    let primes = [];

    let end = start + range;

    // because 1 is not prime number
    if (start === 1) {
        start++;
    }

    for (let i = start; i < end; i++) {
        let isPrime = true;

        for (let j = min; j < Math.sqrt(end); j++) {
            if (i !== j && i % j === 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime) {
            primes.push(i);
        }
    }

    return primes;
}
