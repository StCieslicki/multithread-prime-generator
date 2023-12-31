import url from 'node:url';
import { isMainThread, parentPort, Worker, workerData } from 'node:worker_threads';
import { primesGenerator } from './utils/primesGenerator.js';
import { getRange, getRangeRemainder } from './utils/utils.js';

export function getWorkerPath() {
    return url.fileURLToPath(import.meta.url);
}

export function createThreads(min, max, threadCount) {
    const threads = new Set();

    let start = min;
    let range = getRange(min, max, threadCount);

    for (let i = 0; i < threadCount - 1; i++) {
        threads.add(new Worker(getWorkerPath(), { workerData: { start, range } }));

        start += range;
    }

    let lastRange = getRange(min, max, threadCount) + getRangeRemainder(min, max, threadCount);

    threads.add(new Worker(getWorkerPath(), { workerData: { start, range: lastRange } }))

    return threads;
}

export function createPromisses(threads) {
    let promises = [];

    for (let worker of threads) {
        promises.push(
            new Promise((resolve, reject) => {
                let partPrimes = [];

                worker.on('error', (error) => {
                    reject(error);
                });

                worker.on('exit', () => {
                    threads.delete(worker);

                    console.log(`Threads exiting, but still ${threads.size} threads running...`);

                    resolve(partPrimes);
                });

                worker.on('message', (message) => {
                    partPrimes = message;
                });
            })
        );
    }

    return promises;
}

if (!isMainThread) {
    parentPort.postMessage(
        primesGenerator(workerData.start, workerData.range)
    );
}
