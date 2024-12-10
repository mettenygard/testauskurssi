import getTag from "../src/.internal/getTag";
import isBoolean from "../src/isBoolean";
import isObjectLike from "../src/isObjectLike";

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

    it('isObjectLike cases', () =>
        { 
            expect(isObjectLike(null)).toBe(false);
            expect(isObjectLike(undefined)).toBe(false);
            expect(isObjectLike([])).toBe(true);
            expect(isObjectLike({})).toBe(true);
        });
    it('getTag cases', () =>
        { 
            expect(getTag(null)).toBe('[object Null]');
            expect(getTag(undefined)).toBe('[object Undefined]');
            expect(getTag([])).toBe('[object Array]');
            expect(getTag({})).toBe('[object Object]');
        });
});
