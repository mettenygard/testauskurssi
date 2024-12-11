import countBy from "../src/countBy";

describe("count by tests", () =>{

    it('update count', () =>
    { 
        const products  = [
            {'product': 'Phone', 'price': 800},
            {'product': 'Phone', 'price': 800},
            {'product': 'Phone', 'price': 800},
            {'product': 'Computer', 'price': 1800},
            {'product': 'Computer', 'price': 1800},
            {'product': 'Computer', 'price': 1800},
            {'product': 'Paper', 'price': 10},
            {'product': 'Mouse', 'price': 80},
            {'product': 'Keyboard', 'price': 100}
        ];

        expect(countBy(products, value => value.product))
            .toEqual({'Computer': 3, 'Keyboard': 1, 'Mouse': 1, 'Paper': 1, 'Phone': 3 })
    });
});