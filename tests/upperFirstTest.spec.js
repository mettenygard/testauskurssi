import castSlice from "../src/.internal/castSlice";
import hasUnicode from "../src/.internal/hasUnicode";
import stringToArray from "../src/.internal/stringToArray";
import upperFirst from "../src/upperFirst";

describe("upperFirst tests", () =>{
    it("upperFirst cases", () =>{
        expect(upperFirst('maija')).toBe('Maija');
        expect(upperFirst('MAIJA')).toBe('MAIJA');
        expect(upperFirst('MaijA')).toBe('MaijA');
        expect(upperFirst('123maija')).toBe('123maija');
        expect(upperFirst('a')).toBe('A');
        expect(upperFirst('B')).toBe('B');
        expect(upperFirst('')).toBe('');
        expect(upperFirst(null)).toBe('');
        expect(upperFirst(undefined)).toBe('');
        expect(upperFirst(' maija')).toBe(' maija');
        expect(upperFirst('#maija')).toBe('#maija');
    });

    it("castSlice cases", () =>{
        expect(castSlice([1,3,5,7,9], 0, 3)).toEqual([1,3,5]);
        expect(castSlice([1,3,5,7,9], 2)).toEqual([5,7,9]);
        expect(castSlice([1,3,5,7,9], 5)).toEqual([]);
        expect(castSlice([], 0, 2)).toEqual([]);
    });

    it("stringToArray cases", () =>{
        expect(stringToArray('maija')).toEqual(['m', 'a', 'i', 'j', 'a']);
        expect(stringToArray('mai123')).toEqual(['m', 'a', 'i', '1', '2', '3']);
        expect(stringToArray('')).toEqual([]);
    });

    it("hasUnicode cases", () =>{
        expect(hasUnicode('maija')).toEqual(false);
        expect(hasUnicode('@£$€&"')).toEqual(false);
        expect(hasUnicode('')).toEqual(false);
        expect(hasUnicode('😀')).toEqual(true);
    });
});