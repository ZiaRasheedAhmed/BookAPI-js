const getbook = require('./book');

// 1. Given that I visit the site, when I first start, I expect my list to be empty.
test('', () => {
    expect(getbook()).toBe(0);
}); 