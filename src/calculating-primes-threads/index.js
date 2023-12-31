import { Worker, isMainThread, parentPort, workerData } from 'node:worker_threads';
import os from 'node:os';
import * as url from 'node:url';

const __filename = url.fileURLToPath(import.meta.url);
const numberOfAvailableCores = os.availableParallelism();

const min = 2;
let primes = [];

function generatePrimes(start, range) {
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

if (isMainThread) {
    const max = +process.argv[2] || 1e7;
    const threadsCount = +process.argv[3] || numberOfAvailableCores;
    const threads = new Set();

    console.log(`Generate prime numbers for the range from 1 to ${max}`);
    console.log(`Running with ${threadsCount} threads...`);

    const range = Math.ceil((max - min) / threadsCount);

    let start = 1;

    for (let i = 0; i < threadsCount - 1; i++) {
        const myStart = start;

        threads.add(new Worker(__filename, { workerData: { start: myStart, range }}));
        start += range;
    }

    threads.add(new Worker(__filename, { workerData: { start, range: range + ((max - min + 1) % threadsCount)}}));

    for (let worker of threads) {
        worker.on('error', (err) => {
            throw err;
        });

        worker.on('exit', () => {
            threads.delete(worker);

            console.log(`Threads exiting, ${threads.size} running...`);

            if (threads.size === 0) {
                console.log('All workers have completed their work.');
                console.log(`Found: ${primes.length} primes`);
            }
        });

        worker.on('message', (msg) => {
            primes = primes.concat(msg);
        });
    }
} else {
    generatePrimes(workerData.start, workerData.range);
    parentPort.postMessage(primes);
}
