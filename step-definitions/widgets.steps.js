const { Given, When, Then } = require ('@wdio/cucumber-framework');
const widgetsPage = require('../pageobjects/widgetsPage');
const {expect} = require('chai');


Given(/^I am on "Widgets" module page with url "(.*)"$/, async (widgUrl) => {
    await browser.maximizeWindow();
    await widgetsPage.open('https://demoqa.com/widgets');
    expect (await browser.getUrl()).to.equal(widgUrl);
});

When(/^I click "Tabs" button$/, async () => {
    await widgetsPage.tabsBtn.scrollIntoView();
    await widgetsPage.tabsBtn.click();
});

Then(/^I should see Tabs page with url "(.*)"$/, async (tabsUrl) => {
    expect (await browser.getUrl()).to.equal(tabsUrl);
});
 
When(/^I click "What" tab$/, async () => {
    await widgetsPage.whatTab.click();
});

Then(/^I should see What-tab text starting with "(.*)"$/, async (whatText) => {
    await browser.pause(1000);
    expect(await (widgetsPage.textContainer).getText()).to.contain(whatText);
});

When(/^I click "Origin" tab$/, async () => {
    await widgetsPage.origiTab.click();
});

Then(/^I should see Origin-tab text starting with "(.*)"$/, async (originText) => {
    await browser.pause(1000);
    expect(await (widgetsPage.textContainer).getText()).to.contain(originText);
});

When(/^I click "Use" tab$/, async () => {
    await widgetsPage.useTab.click();
});

Then(/^I should see Use-tab text starting with "(.*)"$/, async (useText) => {
    await browser.pause(1000);
    expect(await (widgetsPage.textContainer).getText()).to.contain(useText);
});

When(/^I click "Menu" button$/, async () => {
    await widgetsPage.menuBtn.scrollIntoView();
    await widgetsPage.menuBtn.click();
});

Then(/^I should see Menu page with url "(.*)"$/, async (menuUrl) => {
    expect (await browser.getUrl()).to.equal(menuUrl);
});
 
When(/^I click "Main Item 1" menu unit$/, async () => {
    await widgetsPage.mainItem1.click();
});

Then(/^I should see page with url "(.*)"$/, async (mainItem1Url) => {
    expect (await browser.getUrl()).to.equal(mainItem1Url);
});

When(/^I hover "Main Item 2" menu unit$/, async () => {
    await widgetsPage.mainItem2.moveTo();
});

Then(/^I should see sub items appearing$/, async () => {
    expect(await (widgetsPage.subItem).isDisplayed()).to.equal(true);
});

When(/^I click top "sub item"$/, async () => {
    await widgetsPage.subItem.click();
});

Then(/^I should see the page with url "(.*)"$/, async (subMenuUrl) => {
    expect (await browser.getUrl()).to.equal(subMenuUrl);
});

When(/^I hover "SUB SUB LIST »"$/, async () => {
    await widgetsPage.subSubList.moveTo();
});

Then(/^I should see sub sub items appearing$/, async () => {
    expect(await (widgetsPage.subSubItem1).isDisplayed()).to.equal(true);
    expect(await (widgetsPage.subSubItem2).isDisplayed()).to.equal(true);
});

When(/^I click "Sub Sub Item 1"$/, async () => {
    await widgetsPage.subSubItem1.click();
});

Then(/^I should see "(.*)" page$/, async (subSubMenuUrl) => {
    expect (await browser.getUrl()).to.equal(subSubMenuUrl);
});

When(/^I click "Sub Sub Item 2"$/, async () => {
    await widgetsPage.subSubItem2.click();
});

Then(/^I should see the same page "(.*)"$/, async (subSubMenuUrl) => {
    expect (await browser.getUrl()).to.equal(subSubMenuUrl);
});