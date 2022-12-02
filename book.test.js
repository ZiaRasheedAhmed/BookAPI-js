const O = require('./book');
const Book = new O.Book();


// 1. Given that I visit the site, when I first start, I expect my list to be empty.

test('Empty List', () => {
    expect(O.getbook()).toBe(0);
}); 

// 2. Given that I have an empty list, when I add the first book to my list then I expect numberRead to return 1.

    test('add first book and return 1', () => {
        //Act
        var b = new O.Book("The Hobbit","J.R.R. Tolkein",320,1937);
        O.addbook(b);
        //Assert
        expect(O.getbook()).toBe(1);
    });