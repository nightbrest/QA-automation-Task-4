const Page = require('./page');

const selectors = {
    bookStoreBtn: '//span[text() = "Book Store"]',
    booksList: '//div[@role="grid"]',
    bookTitle: '//a[text() = "Git Pocket Guide"]',
    bookItem: '//span[contains(@id,"see-book")]',
    bookInfo: '//div[@class="books-wrapper"]',
    booksISBN: '//div[@id="ISBN-wrapper"]/div[2]',
    backToStoreBtn: '#addNewRecordButton',
    searchBox: '#searchBox',
      
    changingBookTitle: (title) => `//span[contains(@id,"see-book-${title}")]`,
    changingBookSubTitle: (subTitle) => `//label[@class="form-label" and .//text()="${subTitle}"]`,    
    
};

class bookStorePage extends Page {
    get bookTitle() { return $(selectors.bookTitle) };

    get bookStoreBtn() { return $(selectors.bookStoreBtn) };

    get booksList() { return $(selectors.booksList) };

    get bookItem() { return $$(selectors.bookItem) };
    
    get bookInfo() { return $(selectors.bookInfo) };
    
    get booksISBN() { return $(selectors.booksISBN) };

    get backToStoreBtn() { return $(selectors.backToStoreBtn) };

    get searchBox() { return $(selectors.searchBox) };

    booksTitlesRow() {
        const booksTitlesArray = this.bookItem.map(qq => qq.getText());
        return booksTitlesArray;
    };
    
    changingBookTitle(title) { 
        return $(selectors.changingBookTitle(title));
    };
    
    changingBookSubTitle(subTitle){ 
        return $(selectors.changingBookSubTitle(subTitle));
    };
};

module.exports = new bookStorePage();

