const {Book, ReadingList, getbook, addbook} = require('./book');


// 1. Given that I visit the site, when I first start, I expect my list to be empty.

test('Empty List', () => {
    expect(getbook()).toBe(0);
}); 

// 2. Given that I have an empty list, when I add the first book to my list then I expect numberRead to return 1.

test('add first book and return 1', () => {
    //Act
    var b = new Book("The Hobbit","J.R.R. Tolkein",320,1937);
    var a = new ReadingList(b, "January 26, 2022", 5);
    addbook(b);
    //Assert
    expect(getbook()).toBe(1);
});


// 3. Given that I have an empty list, when I add additional books to the list I expect the numberRead to return the total number of books in my list.
test('add additional book and return 2', () => {
    //Act
    var b = new Book("The Hobbit","J.R.R. Tolkein",320,1937);
    var a = new ReadingList(b, "January 26, 2022", 5);
    var c = new Book("Alices Adventures in Wonderland","Lewis Carroll",544,1865);
    var d = new ReadingList(c, "May 22, 1992", 4);
    addbook(b);
    //Assert
    expect(getbook()).toBe(2);
});

// 4. Given that I have a book in my list, when I call removeBook("<title>") with "title" representing the title of my book that I want to delete, then when I call getBooks() the book I deleted should no longer be there.
// test('remove book whith title'), () => {
//     //Act
    

//     //Assert
// }