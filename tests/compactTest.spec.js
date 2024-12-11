import compact from "../src/compact";

describe("compact tests", () =>{
    it('return all', () => {
        const array = [1,2,3,4];
        //const array = [0, 1, false, 2, '', 3];
        const result = compact(array)
        expect(result).toEqual([1,2,3,4]);
    });

    it('remove 0', () => {
        const array = [0,1,2,3,4];
        const result = compact(array)
        expect(result).toEqual([1,2,3,4]);
    });

    it('remove ""', () => {
        const array = ["",1,2,3,4];
        const result = compact(array)
        expect(result).toEqual([1,2,3,4]);
    });

    it('remove null', () => {
        const array = [null,1,2,3,4];
        const result = compact(array)
        expect(result).toEqual([1,2,3,4]);
    });

    it('remove undefined', () => {
        const array = [undefined,1,2,3,4];
        const result = compact(array)
        expect(result).toEqual([1,2,3,4]);
    });

    it('remove NaN', () => {
        const array = [NaN,1,2,3,4];
        const result = compact(array)
        expect(result).toEqual([1,2,3,4]);
    });

    it('remove false', () => {
        const array = [false,1,2,3,4];
        const result = compact(array)
        expect(result).toEqual([1,2,3,4]);
    });

    it('not remove true', () => {
        const array = [true,1,2,3,4];
        const result = compact(array)
        expect(result).toEqual([true,1,2,3,4]);
    });

    it('remove all and return empty list', () => {
        const array = [NaN,0,null,undefined,"", false];
        const result = compact(array)
        expect(result).toEqual([1,2,3,4]);
    });
});