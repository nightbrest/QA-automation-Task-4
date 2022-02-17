const { Given, When, Then } = require ('@wdio/cucumber-framework');
const interactionsPage = require('../pageobjects/interactionsPage');
const {expect} = require('chai');

Given(/^I am on "Interactions" module page with url "(.*)"$/, async (interUrl) => {
    await interactionsPage.open(interUrl);
    expect (await browser.getUrl()).to.equal(interUrl);
});

When(/^I click "Sortable" button$/, async () => {
    await interactionsPage.sortableBtn.scrollIntoView();
    await interactionsPage.sortableBtn.click();
});

Then(/^I should see "Sortable" submodule tabs with tab "List" as active$/, async () => {
    await interactionsPage.listTab.waitForDisplayed({ timeout: 10000 });
    expect(await (interactionsPage.listTab).getAttribute('aria-selected')).to.equal('true');
});

When(/^I drag the list item "One" and move it in the end of list$/, async () => {
    await interactionsPage.listItemOne.dragAndDrop({ x: 0, y: 260 }, {duration: 10});
});

Then(/^I should see the list item "One" took the place of list item "Six"$/, async () => {
    await browser.pause(1000);
    expect(await (interactionsPage.listItemSix).getText()).to.contain('One')
});

Then(/^I should see every other of list items moved one step to top, for example "Two" is on the top of the list$/, async () => {
    expect(await (interactionsPage.listItemOne).getText()).to.contain('Two')
});

When(/^I click "Grid" tab$/, async () => {
    await interactionsPage.gridTab.click();
});

Then(/^I should see that "Grid" tab became active$/, async () => {
    expect(await (interactionsPage.gridTab).getAttribute('aria-selected')).to.equal('true');
});

When(/^I drag the list item "One" and move it right to the end of list$/, async () => {
    await interactionsPage.gridItemOne.dragAndDrop({ x: 200, y: 0 }, {duration: 10});
});

Then(/^I should see element "One" is replaced by the element "Three"$/, async () => {
    expect(await (interactionsPage.gridItemOne).getText()).to.contain('Two')
});

Then(/^I should see "Two" and "Three" moved one step to left$/, async () => {
    expect(await (interactionsPage.gridItemThree).getText()).to.contain('One')
});

