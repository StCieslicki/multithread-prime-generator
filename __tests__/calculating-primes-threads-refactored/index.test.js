import { main } from '../../src/calculating-primes-threads-refactored';
import { ranges } from '../constants';

describe('main', () => {
    it('1-10 1 thread', async () => {
        const primesCount = await main(1, 10, 1);
        expect(primesCount).toEqual(ranges['1-1e1']);
    }, 1000);

    it('1-10 4 threads', async () => {
        const primesCount = await main(1, 10, 4);
        expect(primesCount).toEqual(ranges['1-1e1']);
    }, 1000);

    it('1-10 8 threads', async () => {
        const primesCount = await main(1, 10, 8);
        expect(primesCount).toEqual(ranges['1-1e1']);
    }, 1000);

    it('10-100 1 thread', async () => {
        const primesCount = await main(10, 100,1);
        expect(primesCount).toEqual(ranges['1e1-1e2']);
    }, 1000);

    it('10-100 4 threads', async () => {
        const primesCount = await main(10, 100,4);
        expect(primesCount).toEqual(ranges['1e1-1e2']);
    }, 1000);

    it('50-100 1 thread', async () => {
        const primesCount = await main(50, 100,1);
        expect(primesCount).toEqual(ranges['5e1-1e2']);
    }, 1000);

    it('50-100 4 threads', async () => {
        const primesCount = await main(50, 100,4);
        expect(primesCount).toEqual(ranges['5e1-1e2']);
    }, 1000);

    it('1-1e2 1 thread', async () => {
        const primesCount = await main(1, 1e2,1);
        expect(primesCount).toEqual(ranges['1-1e2']);
    }, 1000);

    it('1-1e2 4 threads', async () => {
        const primesCount = await main(1, 1e2,4);
        expect(primesCount).toEqual(ranges['1-1e2']);
    }, 1000);

    it('1-1e3 1 thread', async () => {
        const primesCount = await main(1, 1e3,1);
        expect(primesCount).toEqual(ranges['1-1e3']);
    }, 1000);

    it('1-1e3 4 threads', async () => {
        const primesCount = await main(1, 1e3,4);
        expect(primesCount).toEqual(ranges['1-1e3']);
    }, 1000);

    it('1-1e4 1 thread', async () => {
        const primesCount = await main(1, 1e4,1);
        expect(primesCount).toEqual(ranges['1-1e4']);
    }, 1000);

    it('1-1e4 4 threads', async () => {
        const primesCount = await main(1, 1e4,4);
        expect(primesCount).toEqual(ranges['1-1e4']);
    }, 1000);

    it('1-1e5 1 thread', async () => {
        const primesCount = await main(1, 1e5,1);
        expect(primesCount).toEqual(ranges['1-1e5']);
    }, 1000);

    it('1-1e5 4 threads', async () => {
        const primesCount = await main(1, 1e5,4);
        expect(primesCount).toEqual(ranges['1-1e5']);
    }, 1000);

    it('1-1e6 1 thread', async () => {
        const primesCount = await main(1, 1e6,1);
        expect(primesCount).toEqual(ranges['1-1e6']);
    }, 1000);

    it('1-1e6 4 threads', async () => {
        const primesCount = await main(1, 1e6,4);
        expect(primesCount).toEqual(ranges['1-1e6']);
    }, 1000);

    it('1-1e6 8 threads', async () => {
        const primesCount = await main(1, 1e6,8);
        expect(primesCount).toEqual(ranges['1-1e6']);
    }, 1000);

    it('1-1e6 16 threads', async () => {
        const primesCount = await main(1, 1e6,16);
        expect(primesCount).toEqual(ranges['1-1e6']);
    }, 1000);

    it('1-1e7 1 thread', async () => {
        const primesCount = await main(1, 1e7,1);
        expect(primesCount).toEqual(ranges['1-1e7']);
    }, 20000);

    it('1-1e7 4 threads', async () => {
        const primesCount = await main(1, 1e7,4);
        expect(primesCount).toEqual(ranges['1-1e7']);
    }, 10000);
});
