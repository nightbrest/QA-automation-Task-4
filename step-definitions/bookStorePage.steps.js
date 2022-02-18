const { Given, When, Then } = require ('@wdio/cucumber-framework');
const bookStorePage = require('../pageobjects/bookStorePage');
const {expect, assert} = require('chai');

Given(/^I am on "Book Store Application" submodule page with url "(.*)"$/, async (booksUrl) => {
    await browser.maximizeWindow();
    await bookStorePage.open(booksUrl);
    expect (await browser.getUrl()).to.equal(booksUrl);
});

When(/^I click "Book Store" button$/, async () => {
    await bookStorePage.bookStoreBtn.scrollIntoView();
    await bookStorePage.bookStoreBtn.click();
});

Then(/^I should see book store with book items appeared$/, async () => {
    expect(await bookStorePage.booksList.isDisplayed()).to.equal(true);
});

When(/^I click "Git Pocket Guide" book's title$/, async () => {
    await bookStorePage.bookTitl.scrollIntoView();
    await bookStorePage.bookTitl.click();
});

Then(/^I should see "Git Pocket Guide" information page$/, async () => {
    expect(await bookStorePage.bookInfo.isDisplayed()).to.equal(true);
});

Then(/^I can check "Git Pocket Guide" ISBN matches pattern "(.*)" of ISBN standart$/, async (regExpPattern) => {
    const correctISBN = await bookStorePage.booksISBN.getText();
    expect((new RegExp(regExpPattern)).test(correctISBN)).to.equal(true);
});

When(/^I click "Back To Book Store" button$/, async () => {
    await bookStorePage.backToStoreBtn.scrollIntoView();
    await bookStorePage.backToStoreBtn.click();
});

When(/^I tape keyword "(.*)" in the search field$/, async (searchWord) => {
    await bookStorePage.searchBox.waitForDisplayed();
    await bookStorePage.searchBox.setValue(searchWord);
});

Then(/^I should see as a search result following books$/, async (table) => {
    const expected = [].concat(...table.rows());
    const actual = await bookStorePage.BooksTitlesRow();
    assert.sameMembers(expected, actual, `expected :\n${expected.sort()} actual :\n${actual.sort()}\n`);
});

When(/^I click (.*) link$/, async (bookTitle) => {
    await bookStorePage.changingBookTitle(bookTitle).scrollIntoView();
    await bookStorePage.changingBookTitle(bookTitle).click();
});

Then(/^I should see (.*) matches book's title$/, async (bookSubTitle) => {
    expect(await bookStorePage.changingBookSubTitle(bookSubTitle).isDisplayed()).is.equal(true);
});
