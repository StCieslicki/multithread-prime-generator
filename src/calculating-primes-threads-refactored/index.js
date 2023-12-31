import { getProcessorCores } from './utils/utils.js';
import { createPromisses, createThreads } from './worker.js';

const min = 1;
const max = +process.argv[2] || 1e7;
const threadCount = +process.argv[3] || getProcessorCores();

export async function main(min, max, threadCount) {
    let primes = [];

    console.log(`Generate prime numbers for the range from 1 to ${max}`);
    console.log(`Running with ${threadCount} threads...`);

    const threads = createThreads(min, max, threadCount);

    const promises = createPromisses(threads);

    let partialPrimes = [];

    try {
        partialPrimes = await Promise.all(promises);
    } catch (error) {
        throw new Error(error);
    }

    primes = partialPrimes.flat(1);

    return primes.length;
}

console.log(`Found: ${await main(min, max, threadCount)} primes.`);
