import { getRange, getRangeRemainder } from '../../../src/calculating-primes-threads-refactored/utils/utils.js';

describe('getRange', () => {
    it('getRange', () => {
        let range;

        range = getRange(1, 10, 1);
        expect(range).toEqual(10);

        range = getRange(1, 10, 2);
        expect(range).toEqual(5);

        range = getRange(1, 10, 3);
        expect(range).toEqual(3);

        range = getRange(1, 10, 4);
        expect(range).toEqual(2);

        range = getRange(1, 10, 5);
        expect(range).toEqual(2);

        range = getRange(1, 10, 6);
        expect(range).toEqual(1);

        range = getRange(1, 10, 7);
        expect(range).toEqual(1);

        range = getRange(1, 10, 8);
        expect(range).toEqual(1);

        range = getRange(1, 10, 9);
        expect(range).toEqual(1);

        range = getRange(1, 10, 10);
        expect(range).toEqual(1);
    })

    it('getRangeRemainder', () => {
        let range;

        range = getRangeRemainder(1, 10, 1);
        expect(range).toEqual(0);

        range = getRangeRemainder(1, 10, 2);
        expect(range).toEqual(0);

        range = getRangeRemainder(1, 10, 3);
        expect(range).toEqual(1);

        range = getRangeRemainder(1, 10, 4);
        expect(range).toEqual(2);

        range = getRangeRemainder(1, 10, 5);
        expect(range).toEqual(0);

        range = getRangeRemainder(1, 10, 6);
        expect(range).toEqual(4);

        range = getRangeRemainder(1, 10, 7);
        expect(range).toEqual(3);

        range = getRangeRemainder(1, 10, 8);
        expect(range).toEqual(2);

        range = getRangeRemainder(1, 10, 9);
        expect(range).toEqual(1);

        range = getRangeRemainder(1, 10, 10);
        expect(range).toEqual(0);
    });

    it('getRange + getRangeRemainder', () => {
        let range, remainder;

        range = getRange(1,10,1);
        remainder = getRangeRemainder(1,10,1);

        expect(range + remainder).toEqual(10);

        range = getRange(1,10,2);
        remainder = getRangeRemainder(1,10,2);

        expect(range * 2 + remainder).toEqual(10);

        range = getRange(1,10,3);
        remainder = getRangeRemainder(1,10,3);

        expect(range * 3 + remainder).toEqual(10);

        range = getRange(1,10,4);
        remainder = getRangeRemainder(1,10,4);

        expect(range * 4 + remainder).toEqual(10);

        range = getRange(1,10,5);
        remainder = getRangeRemainder(1,10,5);

        expect(range * 5 + remainder).toEqual(10);

        range = getRange(1,10,6);
        remainder = getRangeRemainder(1,10,6);

        expect(range * 6 + remainder).toEqual(10);

        range = getRange(1,10,7);
        remainder = getRangeRemainder(1,10,7);

        expect(range * 7 + remainder).toEqual(10);

        range = getRange(1,10,8);
        remainder = getRangeRemainder(1,10,8);

        expect(range * 8 + remainder).toEqual(10);

        range = getRange(1,10,9);
        remainder = getRangeRemainder(1,10,9);

        expect(range * 9 + remainder).toEqual(10);

        range = getRange(1,10,10);
        remainder = getRangeRemainder(1,10,10);

        expect(range * 10 + remainder).toEqual(10);
    });
});
