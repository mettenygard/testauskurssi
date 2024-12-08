import filter from "../src/filter";

describe("filter tests", () =>{
    const products = [
        {'category': 'Fruit', 'price': 10, 'productContent': 'Apple', 'producer': 'Farmer'},
        {'category': 'Fruit', 'price': 7, 'productContent': 'Orange', 'producer': 'Farmer'},
        {'category': 'Fruit', 'price': 5, 'productContent': 'Banana', 'producer': 'Laboratory'},
        {'category': 'Clothing', 'price': 100, 'productContent': 'Shirt', 'producer': 'Prisma'},
        {'category': 'Clothing', 'price': 10, 'productContent': 'Sock', 'producer': 'Prisma'},
        {'category': 'Clothing', 'price': 200, 'productContent': 'Jacket', 'producer': 'Prisma'},
        {'category': 'Electronic', 'price': 1000, 'productContent': 'Computer', 'producer': 'Apple'},
        {'category': 'Electronit', 'price': 500, 'productContent': 'Phone', 'producer': 'Apple'},
    ];

    it('filter smaller numbers', () =>
    { 
        const numbers = [1,2,3,4,5];
        expect(filter(numbers, (num) => num <= 4))
            .toEqual([1,2,3,4]);
    });

    it('filter bigger numbers', () =>
    { 
        const numbers = [1,2,3,4,5];
        expect(filter(numbers, (num) => num >= 3))
            .toEqual([3,4,5]);
    });

    it('filter by category', () =>
    { 
        const result = filter(products, ({category}) => category === 'Fruit');
        expect(result.length).toBe(3);
        expect(result).toEqual([{'category': 'Fruit', 'price': 10, 'productContent': 'Apple', 'producer': 'Farmer'},
            {'category': 'Fruit', 'price': 7, 'productContent': 'Orange', 'producer': 'Farmer'},
            {'category': 'Fruit', 'price': 5, 'productContent': 'Banana', 'producer': 'Laboratory'}])      
    });

    it('filter by product content', () =>
    { 
        const result = filter(products, ({productContent}) => productContent === 'Apple');
        expect(result.length).toBe(1);
        expect(result).toEqual([{'category': 'Fruit', 'price': 10, 'productContent': 'Apple', 'producer': 'Farmer'}])      
    });

    it('filter by product producer', () =>
    { 
        const result = filter(products, ({producer}) => producer === 'Apple');
        expect(result.length).toBe(2);
        expect(result).toEqual([
            {'category': 'Electronic', 'price': 1000, 'productContent': 'Computer', 'producer': 'Apple'},
            {'category': 'Electronit', 'price': 500, 'productContent': 'Phone', 'producer': 'Apple'}])      
    });

    it('filter by high price', () =>
    { 
        const result = filter(products, ({price}) => price <= 100);
        expect(result.length).toBe(5);
        expect(result).toEqual([
            {'category': 'Fruit', 'price': 10, 'productContent': 'Apple', 'producer': 'Farmer'},
        {'category': 'Fruit', 'price': 7, 'productContent': 'Orange', 'producer': 'Farmer'},
        {'category': 'Fruit', 'price': 5, 'productContent': 'Banana', 'producer': 'Laboratory'},
        {'category': 'Clothing', 'price': 100, 'productContent': 'Shirt', 'producer': 'Prisma'},
        {'category': 'Clothing', 'price': 10, 'productContent': 'Sock', 'producer': 'Prisma'}])      
    });

    it('filter by low price', () =>
    { 
        const result = filter(products, ({price}) => price >= 100);
        expect(result.length).toBe(4);
        expect(result).toEqual([
        {'category': 'Clothing', 'price': 100, 'productContent': 'Shirt', 'producer': 'Prisma'},
        {'category': 'Clothing', 'price': 200, 'productContent': 'Jacket', 'producer': 'Prisma'},
        {'category': 'Electronic', 'price': 1000, 'productContent': 'Computer', 'producer': 'Apple'},
        {'category': 'Electronit', 'price': 500, 'productContent': 'Phone', 'producer': 'Apple'}])      
    });

    it('filter by category and high price', () =>
    { 
        const result = filter(products, ({price, category}) => price < 10 && category === 'Fruit');
        expect(result.length).toBe(2);
        expect(result).toEqual([
            {'category': 'Fruit', 'price': 7, 'productContent': 'Orange', 'producer': 'Farmer'},
            {'category': 'Fruit', 'price': 5, 'productContent': 'Banana', 'producer': 'Laboratory'}])      
    });

    it('filter by category and high price, no results ', () =>
    { 
        const result = filter(products, ({price, category}) => price < 100 && category === 'Electornic');
        expect(result).toEqual([[]]);      
    });

    it('filter by all conditions', () =>
        { 
            const result = filter(products, ({price, category, productContent, producer}) =>
                 price < 10 && category === 'Fruit' && productContent === 'Orange' && producer === 'Farmer');
            expect(result.length).toBe(1);
            expect(result).toEqual([
                {'category': 'Fruit', 'price': 7, 'productContent': 'Orange', 'producer': 'Farmer'}])      
        });
});