import difference from "../src/difference";

describe("difference tests", () =>{
    it('Identical array', () =>{
        const array = [1,2,3];
        const array2 = [1,2,3];

        expect(difference(array,array2)).toEqual([]);
    });

    it('All first ones values are on the second', () =>{
        const array = [1,2,3];
        const array2 = [1,2,3,4];

        expect(difference(array,array2)).toEqual([]);
    });

    it('first one has one more value than the second one', () =>{
        const array = [1,2,3,4,5];
        const array2 = [1,2,3,4];

        expect(difference(array,array2)).toEqual([5]);
    });

    it('All values all different between arrays', () =>{
        const array = [1,2,3];
        const array2 = [4,5,6];

        expect(difference(array,array2)).toEqual([1,2,3]);
    });

    it('Multiple same values, different array', () =>{
        const array = [1,1,2];
        const array2 = [1,2,3];

        expect(difference(array,array2)).toEqual([]);
    });

    it('Identical string array values', () =>{
        const array = ['one','two','three'];
        const array2 = ['one','two','three'];

        expect(difference(array,array2)).toEqual([]);
    });

    it('Differ string array values', () =>{
        const array = ['one','two', 'four'];
        const array2 = ['one','two','three'];

        expect(difference(array,array2)).toEqual(['four']);
    });

    it('Identical boolean array values', () =>{
        const array = [true,true,false];
        const array2 = [true,true,false];

        expect(difference(array,array2)).toEqual([]);
    });

    it('Differ boolean array values', () =>{
        const array = [true, false];
        const array2 = [true, true];

        expect(difference(array,array2)).toEqual([false]);
    });
    // These should not equal as they are not same refence, althought they are same valua
    it('Identical object array values', () =>{
        const array = [{'name':'Matti', 'age': 15},{'name':'Maija', 'age': 14}];
        const array2 = [{'name':'Matti', 'age': 15},{'name':'Maija', 'age': 14}];

        expect(difference(array,array2)).not.toEqual([]);
    });

    it('Differ object array values', () =>{
        const array = [{'name':'Matti', 'age': 15},{'name':'Maija', 'age': 14}];
        const array2 = [{'name':'Matti', 'age': 18},{'name':'Maija', 'age': 80}];

        expect(difference(array,array2)).toEqual([{'name':'Matti', 'age': 15},{'name':'Maija', 'age': 14}]);
    });

    it('Identical null array values', () =>{
        const array = [null, undefined];
        const array2 = [null, undefined];

        expect(difference(array,array2)).toEqual([]);
    });

    it('Differ null array values', () =>{
        const array = [null, 0, undefined];
        const array2 = [null, null, undefined];

        expect(difference(array,array2)).toEqual([0]);
    });

    it('Different data types, different array values', () =>{
        const array = [null, 0, undefined, 'string'];
        const array2 = [false,2,3,'testi'];

        expect(difference(array,array2)).toEqual([null, 0, undefined, 'string']);
    });

    it('data is not array', () =>{

        expect(difference('string','string')).toEqual([]);
        expect(difference('string','notstring')).toEqual([]);
    });

});