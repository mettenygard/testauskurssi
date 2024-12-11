import isBoolean from "../src/isBoolean";

describe("isBoolean tests", () =>{
    it('isBoolean cases', () =>
    { 
        expect(isBoolean(true)).toBe(true);
        expect(isBoolean(false)).toBe(true);
        expect(isBoolean(null)).toBe(false);
        expect(isBoolean(10)).toBe(false);
        expect(isBoolean(undefined)).toBe(false);
        expect(isBoolean('ASD')).toBe(false);
    });
});
