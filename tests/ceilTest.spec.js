import ceil from "../src/ceil";

describe("ceil tests", () =>{
    it("round to nearest integer", () =>{
        expect(ceil(10.045)).toBe(11);
        expect(ceil(10.545, 0)).toBe(11);
        expect(ceil(9,0)).toBe(9);
        expect(ceil(8)).toBe(8);
        expect(ceil(168,-1)).toBe(170);
        expect(ceil(604009,-2)).toBe(610000);
    });

    it("round to nearest desimal", () => {
        expect(ceil(10.045,2)).toBe(10.05);
        expect(ceil(9.998,2)).toBe(10.00);
        expect(ceil(9.9877,2)).toBe(9,99);
    })
});