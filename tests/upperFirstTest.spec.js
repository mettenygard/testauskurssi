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
});