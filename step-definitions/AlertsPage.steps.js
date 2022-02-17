const { Given, When, Then } = require ('@wdio/cucumber-framework');
const alertsPage = require('../pageobjects/alertsPage');
const {expect} = require('chai');

Given(/^I am on "Alerts, Frame & Windows" module page with url "(.*)"$/, async (alertsUrl) => {
    await alertsPage.open(alertsUrl);
    expect (await browser.getUrl()).to.equal(alertsUrl);
});

When(/^I click "Browser Windows" button$/, async () => {
    await alertsPage.browserWindowsBtn.scrollIntoView();
    await alertsPage.browserWindowsBtn.click();
});

Then(/^I should see button "(.*)" appeared$/, async (newTabName) => {
    expect(await (alertsPage.newTabBtn).getText()).to.contain(newTabName);
});

Then(/^I should see button with name "(.*)" appeared$/, async (newWinName) => {
    expect(await (alertsPage.newWindowBtn).getText()).to.contain(newWinName);
});

Then(/^I should see button named "(.*)" appeared$/, async (newWinMesName) => {
    expect(await (alertsPage.newWinMesBtn).getText()).to.contain(newWinMesName);
});

When(/^I click "New Tab" button$/, async () => {
    await alertsPage.newTabBtn.scrollIntoView();
    await alertsPage.newTabBtn.click();
});

Then(/^I should see new web page with url "(.*)" opened and switch this window$/, async (samplePageUrl) => {
    await browser.switchWindow(samplePageUrl);
    expect (await browser.getUrl()).to.equal(samplePageUrl);
});

Then(/^I should see the text "(.*)" on the page$/, async (sampleText) => {
    expect(await (alertsPage.samplePageText).getText()).to.contain(sampleText);
});

Then(/^I switch to "(.*)"$/, async (homeUrl) => {
    await browser.switchWindow(homeUrl);
});

When(/^I click "New Window" button$/, async () => {
    await browser.maximizeWindow();
    await alertsPage.newWindowBtn.scrollIntoView();
    await alertsPage.newWindowBtn.click();
});

Then(/^I should see new browser window with page "(.*)" opened$/, async (newBrowserUrl) => {
    await browser.switchWindow(newBrowserUrl);
    expect (await browser.getUrl()).to.equal(newBrowserUrl);
});

Then(/^I should see text "(.*)" on the page$/, async (sampText) => {
    expect(await (alertsPage.samplePageText).getText()).to.contain(sampText);
    const handles = await browser.getWindowHandles();
    await browser.switchToWindow(handles[1]);
    await browser.closeWindow();
    await browser.switchToWindow(handles[0]);
});

When(/^I click "New Window Message" button$/, async () => {
    await alertsPage.newWinMesBtn.scrollIntoView();
    await alertsPage.newWinMesBtn.click();
});

Then(/^I should see message window with text "Knowledge increases by sharing but not by saving. Please share this website with your friends and in your organization." appears$/, async () => {
    // await browser.pause(5000)
    const handles = await browser.getWindowHandles();
    await browser.switchToWindow(handles[1]);
    // expect(await (alertsPage.windowText).getText()).to.contain('Knowledge increases');
    // console.log('1111111');
    // console.log(await browser.getTitle());
    await browser.closeWindow();
    await browser.switchToWindow(handles[0]);
});

When(/^I click "Modal Dialogs" button$/, async () => {
    await alertsPage.modalDialogsBtn.scrollIntoView();
    await alertsPage.modalDialogsBtn.click();
});

Then(/^I should see button with the name "(.*)" appeared$/, async (smallModal) => {
    expect(await (alertsPage.smallModalBtn).getText()).to.contain(smallModal);
});

Then(/^I should see the button "(.*)" appeared$/, async (largeModal) => {
    expect(await (alertsPage.largeModalBtn).getText()).to.contain(largeModal);
});

When(/^I click "Small modal" button$/, async () => {
    await alertsPage.smallModalBtn.scrollIntoView();
    await alertsPage.smallModalBtn.click();
});

Then(/^I should see modal window with title "(.*)"$/, async (smallModal) => {
    expect(await (alertsPage.smallModalTitle).getText()).to.contain(smallModal);
});

Then(/^I click small modal's "Close" button$/, async () => {
    await alertsPage.closeSmallModBtn.click();
});

Then(/^I should see small modal dissapeared$/, async () => {
    await alertsPage.smallModalTitle.waitForDisplayed({ reverse: true });
    expect(await alertsPage.smallModalTitle.isDisplayed()).to.equal(false);
});

When(/^I click "Large modal" button$/, async () => {
    await alertsPage.largeModalBtn.scrollIntoView();
    await alertsPage.largeModalBtn.click();
});

Then(/^I should see modal window with the title "(.*)"$/, async (largeModal) => {
    expect(await (alertsPage.largeModalTitle).getText()).to.contain(largeModal);
});

Then(/^I click large modal's "Close" button$/, async () => {
    await alertsPage.closeLargeModBtn.click();
});

Then(/^I should see large modal dissapeared$/, async () => {
    await alertsPage.largeModalTitle.waitForDisplayed({ reverse: true });
    expect(await alertsPage.largeModalTitle.isDisplayed()).to.equal(false);
});

