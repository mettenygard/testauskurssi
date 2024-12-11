import eq from "../src/eq";

describe("eq tests", () =>{
    it('validate objects', () =>
    {
        const first = {'number':1};
        const second = {'number':5};
        expect(eq(first,first)).toBe(true);
        expect(eq(first,second)).toBe(false);

        const firstString = {'string': 'test'};
        const secondString = {'string': 'false'};
        expect(eq(firstString,firstString)).toBe(true);
        expect(eq(firstString,secondString)).toBe(false);
    });

    it('validate strings', () =>
    {
        expect(eq('first', 'first')).toBe(true);
        expect(eq('first', 'second')).toBe(false);

        expect(eq('a', 'a')).toBe(true);
        expect(eq('a', 'b')).toBe(false);
    });

    it('validate numbers', () =>
    {
        expect(eq(5, 5)).toBe(true);
        expect(eq(5, 6)).toBe(false);
    });

    it('validate null', () =>
    {
        expect(eq(null, null)).toBe(true);
        expect(eq(undefined, undefined)).toBe(true);
        // this should be true as in loose equality (==), null and undefined are considered equal to each other
        expect(eq(null, undefined)).toBe(true);
    });

    it('validate booleans', () =>
    {
        expect(eq(true, true)).toBe(true);
        expect(eq(false, false)).toBe(true);
        expect(eq(true, false)).toBe(false);
    });

    it('validate NaN', () =>
    {
        expect(eq(NaN, NaN)).toBe(true);
        expect(eq(NaN, false)).toBe(false);
        expect(eq(NaN, true)).toBe(false);
        expect(eq(NaN, undefined)).toBe(false);
        expect(eq(NaN, null)).toBe(false);
        expect(eq(NaN, 0)).toBe(false);
    });

    it('validate list', () => {
        const list = [1,2,3];
        const list2 = [2,3,4];

        expect(eq(list,list)).toBe(true);
        expect(eq(list,list2)).toBe(false);
    })

    it('validate object and list retun false', () =>{
        const list = [100];
        const object = Object(100);

        expect(eq(object, list)).toBe(false);

    });

    it('validate string and number retun false', () =>{
        const string = '100';
        const number = 100;

        expect(eq(string, number)).toBe(false);
    });

    it('validate string and list retun false', () =>{
        const string = '100';
        const list = [100];

        expect(eq(string, list)).toBe(false);
    });

    it('validate string and object retun false', () =>{
        const string = '100';
        const object = Object(100);

        expect(eq(string, object)).toBe(false);
    });

    it('validate list and number retun false', () =>{
        const number = 100;
        const list = [100];

        expect(eq(list, number)).toBe(false);
    });

    it('validate object and number retun false', () =>{
        const number = 100;
        const object = Object(100);

        expect(eq(object, number)).toBe(false);
    });

});