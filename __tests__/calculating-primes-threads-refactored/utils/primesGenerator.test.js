import { primesGenerator } from '../../../src/calculating-primes-threads-refactored/utils/primesGenerator';
import { ranges } from '../../constants';

describe('primeGenerator', () => {
    it('1-10', () => {
        const primes = primesGenerator(1, 10);
        expect(primes.length).toEqual(ranges['1-1e1']);
    });

    it('10-100', () => {
        const primes = primesGenerator(10, 90);
        expect(primes.length).toEqual(ranges['1e1-1e2']);
    });

    it('50-100', () => {
        const primes = primesGenerator(50, 50);
        expect(primes.length).toEqual(ranges['5e1-1e2']);
    });

    it('1-1e2', () => {
        const primes = primesGenerator(1, 1e2);
        expect(primes.length).toEqual(ranges['1-1e2']);
    });

    it('1-1e3', () => {
        const primes = primesGenerator(1, 1e3);
        expect(primes.length).toEqual(ranges['1-1e3']);
    });

    it('1-1e4', () => {
        const primes = primesGenerator(1, 1e4);
        expect(primes.length).toEqual(ranges['1-1e4']);
    });

    it('1-1e5', () => {
        const primes = primesGenerator(1, 1e5);
        expect(primes.length).toEqual(ranges['1-1e5']);
    });

    it('1-1e6', () => {
        const primes = primesGenerator(1, 1e6);
        expect(primes.length).toEqual(ranges['1-1e6']);
    });

    xit('1-1e7', () => {
        const primes = primesGenerator(1, 1e7);
        expect(primes.length).toEqual(ranges['1-1e7']);
    });
});
