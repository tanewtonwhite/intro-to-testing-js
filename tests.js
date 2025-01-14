// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function () {
        expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function () {
        expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function () {
        expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function () {
        expect(helloWorld()).not.toBe(undefined);
    });
});


describe ('sayHello', function () {
    it('should be a defined function', function () {
        expect(typeof sayHello).toBe('function');
    });
    it('should return a string when called', function () {
        expect(typeof sayHello()).toBe('string');
    });
    it('should return "Hello, Jane!"', function () {
        expect(typeof sayHello()).toBe('string');
    });
    it('should return "Hello, Alex!"', function () {
        expect(sayHello("Alex")).toBe("Hello, Alex!");
    });
    it('should return "Hello, Pat!"', function () {
        expect(sayHello("Pat")).toBe("Hello, Pat!");
    });
});
    describe('isFive', function() {
        it('should be a defined function', function () {
            expect(typeof isFive).toBe('function');
        });
        it('should return a boolean no matter what the input' , function() {
            expect(typeof isFive).toBe('boolean');
        });
        it ('should return true when passed 5' , function() {
            expect(typeof isFive).toBe('number');

        });
    });





