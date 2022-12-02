const getbook = require('./book');

// 1. Given that I visit the site, when I first start, I expect my list to be empty.
test('Empty List', () => {
    expect(getbook()).toBe(0);
}); 

// // 2. Given that I have an empty list, when I add the first book to my list then I expect numberRead to return 1.
// test()