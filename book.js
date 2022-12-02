class Book{
    constructor(title,author,page,year){
        this.title = title;
        this.author = author;
        this.page = page;
        this.year = year;
    }
}
class ReadingList{
    constructor(book,dateread,rating){
        this.book = book;
        this.dateread = dateread;
        this.rating = rating;
    }
}

let arr = new Array();


function getbook(){
    return arr.length;
}
function addbook(b){
    arr.push(b);
}


module.exports = {
    getbook,
    Book,
    addbook,
    ReadingList
}

