import add from '../src/add.js';

describe("add tests", () =>{
    it('should add two positive numbers', () =>
    { 
        expect(add(1,1)).toBe(2);
        expect(add(2,5)).toBe(7);
        expect(add(3,6)).toBe(9); 
    });
    it('should add two negative numbers', () =>
    { 
        expect(add(-1,-1)).toBe(-2);
        expect(add(-2,-5)).toBe(-7);
        expect(add(-3,-6)).toBe(-9); 
    });
    it('should add negative and positive number', () =>
    { 
        expect(add(-1,1)).toBe(0);
        expect(add(7,-5)).toBe(2);
        expect(add(-3,6)).toBe(3); 
    });
    it('should add zero', () =>
    { 
        expect(add(0,0)).toBe(0);
        expect(add(0,7)).toBe(7);
        expect(add(6,0)).toBe(6);
        expect(add(-6,0)).toBe(-6); 
        expect(add(0,-6)).toBe(-6);  
    });
});