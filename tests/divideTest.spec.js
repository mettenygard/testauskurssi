import divide from "../src/divide";

describe("divide tests", () =>{
    it('Divide even numbers', () =>{

        expect(divide(10,5)).toBe(2);
        expect(divide(100,1)).toBe(100);
        expect(divide(4,4)).toBe(1);
        expect(divide(10000,500)).toBe(20);
    });
    it('Divide number were result is not even', () =>{
        expect(divide(6,4)).toBe(1.5);
    });
});