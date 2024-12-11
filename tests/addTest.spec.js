import add from '../src/add.js';

describe("add tests", () =>{
    it('Basic cases', () =>
    {
        // positive integers
        expect(add(1,1)).toBe(2);
        expect(add(2,5)).toBe(7);
        // negative integers
        expect(add(-1,-1)).toBe(-2);
        expect(add(-2,-5)).toBe(-7);
        // positive and negative integers
        expect(add(-1,1)).toBe(0);
        expect(add(7,-5)).toBe(2);
        // zeros
        expect(add(0,0)).toBe(0);
        expect(add(0,7)).toBe(7);
        expect(add(6,0)).toBe(6);
        expect(add(-6,0)).toBe(-6); 
        expect(add(0,-6)).toBe(-6); 
        // floats
        expect(add(2.5,5.5)).toBe(8);
        expect(add(-2.5,5.5)).toBe(3);
        expect(add(-2.5,0)).toBe(-2.5);
        expect(add(0,5.5)).toBe(5.5);
    });

    it('Not a Number cases', () =>
    {
        expect(add(NaN,1)).toBe(NaN);
        expect(add(undefined,1)).toBe(1);
        expect(add( null,1)).toBe(1);
    });
});