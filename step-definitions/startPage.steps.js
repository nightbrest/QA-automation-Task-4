const { Given, When, Then } = require ('@wdio/cucumber-framework');
const startPage = require('../pageobjects/startPage');
const {expect} = require('chai');

Given(/^I am on start page$/, async () => {
    await browser.maximizeWindow();
    await startPage.open('https://demoqa.com/');
    await (startPage.toolsQaLabel).waitForDisplayed({ timeout: 10000 });
});

When(/^I click "Selenium Certification Training" banner$/, async () => {
    await startPage.trainingBanner.scrollIntoView();
    await startPage.trainingBanner.click();
});

Then(/^I should see the "Selenium Certification Training" page opened$/, async () => {
    await browser.switchWindow('www.toolsqa.com');
    expect (await startPage.guyLogo.waitForDisplayed({ timeout: 10000 })).to.equal(true);
    await browser.switchWindow('demoqa.com');
});

When(/^I click "Elements" button$/, async () => {
    await startPage.elementsButton.scrollIntoView();
    await startPage.elementsButton.click();
});

Then(/^I should see the "Elements" page opened$/, async () => {
    expect (await browser.getUrl()).to.equal('https://demoqa.com/elements');
    await startPage.open('https://demoqa.com/');
});

When(/^I click "Forms" button$/, async () => {
    await startPage.formsButton.scrollIntoView();
    await startPage.formsButton.click();
});

Then(/^I should see the "Forms" page opened$/, async () => {
    expect (await browser.getUrl()).to.equal('https://demoqa.com/forms');
    await startPage.open('https://demoqa.com/');
});

When(/^I click "Alerts, Frame & Windows" button$/, async () => {
    await startPage.alertsFrameWindowsButton.scrollIntoView();
    await startPage.alertsFrameWindowsButton.click();
});

Then(/^I should see the "Alerts, Frame & Windows" page opened$/, async () => {
    expect (await browser.getUrl()).to.equal('https://demoqa.com/alertsWindows');
    await startPage.open('https://demoqa.com/');
});

When(/^I click "Widgets" button$/, async () => {
    await startPage.widgetsButton.scrollIntoView();
    await startPage.widgetsButton.click();
});

Then(/^I should see the "Widgets" page opened$/, async () => {
    expect (await browser.getUrl()).to.equal('https://demoqa.com/widgets');
    await startPage.open('https://demoqa.com/');
});

When(/^I click "Interactions" button$/, async () => {
    await startPage.interactionsButton.scrollIntoView();
    await startPage.interactionsButton.click();
});

Then(/^I should see the "Interactions" page opened$/, async () => {
    expect (await browser.getUrl()).to.equal('https://demoqa.com/interaction');
    await startPage.open('https://demoqa.com/');
});

When(/^I click "Book Store Application" button$/, async () => {
    await startPage.bookStoreApplicationButton.scrollIntoView();
    await startPage.bookStoreApplicationButton.click();
});

Then(/^I should see the "Book Store Application" page opened$/, async () => {
    expect (await browser.getUrl()).to.equal('https://demoqa.com/books');
    await startPage.open('https://demoqa.com/');
});

When(/^I click "TOOLS QA" label$/, async () => {
    await startPage.toolsQaLabel.click();
});

Then(/^I should see the start page reloded$/, async () => {
    expect (await browser.getUrl()).to.equal('https://demoqa.com/');
    await startPage.open('https://demoqa.com/');
});