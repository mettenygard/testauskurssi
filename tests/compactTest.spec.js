import compact from "../src/compact";

describe("compact tests", () =>{
    it('return all', () => {
        const array = [1,2,3,4];
        //const array = [0, 1, false, 2, '', 3];
        const result = compact(array)
        //expect(result.length).toBe(4);
        expect(result).toEqual([2,3,4]);
    });
});