import divide from "../src/divide";

describe("divide tests", () =>{
    it('Divide even numbers', () =>{

        expect(divide(10,5)).toBe(2);
        expect(divide(10,-5)).toBe(-2);
        expect(divide(-10,-5)).toBe(2);
        expect(divide(100,1)).toBe(100);
        expect(divide(4,4)).toBe(1);
        expect(divide(10000,500)).toBe(20);
        expect(divide(0,5)).toBe(0);
        // toBeCloseTo tackles JavaScrits negative 0
        expect(divide(0,-5)).toBeCloseTo(0);
    });

    it('Divide number were result is not even', () =>{
        expect(divide(6,4)).toBe(1.5);
        expect(divide(1,3)).toBe(0.3333333333333333);
    });

    it('Divide with zero', () =>{
        expect(divide(6,0)).toBe(Infinity);
        expect(divide(-6,0)).toBe(-Infinity);
        expect(divide(0,0)).toBe(NaN);
    });

    it('Non numeric', () =>{
        expect(divide('a',0)).toBe(NaN);
        expect(divide(2,'a')).toBe(NaN);
        expect(divide(null,0)).toBe(NaN);
        expect(divide(undefined,0)).toBe(0);
    });
});