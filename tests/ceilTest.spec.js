import ceil from "../src/ceil";

describe("ceil tests", () =>{
    it("round decimal to nearest integer", () =>{
        expect(ceil(10.045)).toBe(11);
        expect(ceil(10.545, 0)).toBe(11);     
    });

    it("round integer to integer returns same value", () =>{
        expect(ceil(9,0)).toBe(9);
        expect(ceil(8)).toBe(8);
    })

    it("round 3 number integer to precice 2 integer", () =>{
        expect(ceil(168,-1)).toBe(170);
    })

    it("round big integers to precice 2 integer", () =>{
        expect(ceil(6040005,-2)).toBe(6100000);
    })

    it("round decimal to nearest desimal", () => {
        expect(ceil(10.045,2)).toBe(10.05);
    })

    it("round 9.99 decimal to 10.00 decimal", () =>{
        expect(ceil(9.998,2)).toBe(10.00);
    })

    it("round decimal to 9.99 decimal", () =>{
        expect(ceil(9.9877,2)).toBe(9.99);
    })
});