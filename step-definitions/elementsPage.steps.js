const { Given, When, Then } = require ('@wdio/cucumber-framework');
const elementsPage = require('../pageobjects/elementsPage');
const {expect} = require('chai');

Given(/^I am on Element’s module page$/, async () => {
    await browser.maximizeWindow();
    await elementsPage.open('https://demoqa.com/elements');
    expect (await browser.getUrl()).to.equal('https://demoqa.com/elements');
});
// 1111
When(/^I click "Text Box" button$/, async () => {
    await elementsPage.textBoxButton.scrollIntoView();
    await elementsPage.textBoxButton.click();
});

Then(/^I should see the registration form with fields to fill in$/, async () => {
    expect(await (elementsPage.inputName).getAttribute('placeholder')).to.include('Full Name');
    expect(await (elementsPage.inputEmail).getAttribute('placeholder')).to.include('name@example.com');
    expect(await (elementsPage.inputCurAdr).getAttribute('placeholder')).to.include('Current Address');
    expect(await (elementsPage.inputPerAdr).getAttribute('id')).to.include('permanentAddress');
});

When(/^I fill Full Name field with "(.*)"$/, async (studentName) => {
    await elementsPage.inputName.setValue(studentName);
});

When(/^I fill Email field with "(.*)"$/, async (studentEmail) => {
    await elementsPage.inputEmail.setValue(studentEmail);
});

When(/^I fill Current Address field with "(.*)"$/, async (curAddr) => {
    await elementsPage.inputCurAdr.setValue(curAddr);
});

When(/^I fill Permanent Address field with "(.*)"$/, async (permAddr) => {
    await elementsPage.inputPerAdr.setValue(permAddr);
});

When(/^I click "Submit" button$/, async () => {
    await elementsPage.submitBtn.scrollIntoView();
    await elementsPage.submitBtn.click();
});

Then(/^I should see under registration form "(.*)":"(.*)"$/, async (fieldName, fieldValue) => {
    expect(await (elementsPage.outputForm).getText()).to.contain(fieldValue);
});

When(/^I fill Email field with incorrect value "(.*)"$/, async (incorrValue) => {
    await elementsPage.inputEmail.setValue(incorrValue);
    await elementsPage.submitBtn.scrollIntoView();
    await elementsPage.submitBtn.click();
});

Then(/^I should see the "Email" field frame became red coloured$/, async () => {
    expect(await elementsPage.errorEmail.getAttribute('class')).to.contain('error');
});

When(/^I double-click "Double Click Me" button$/, async () => {
    await elementsPage.ButtonBtn.scrollIntoView();
    await elementsPage.ButtonBtn.doubleClick();
    await elementsPage.doubleClickBtn.scrollIntoView();
    await elementsPage.doubleClickBtn.doubleClick();
});

Then(/^I should see message "You have done a double click"$/, async () => {
    expect(await elementsPage.doubleClcMessage.isDisplayed()).to.equal(true);
});

When(/^I right-click "Right Click Me" button$/, async () => {
    await elementsPage.rightClickBtn.scrollIntoView();
    await elementsPage.rightClickBtn.click({ button: 'right' });
});

Then(/^I should see message "You have done a right click"$/, async () => {
    expect(await elementsPage.rightClcMessage.isDisplayed()).to.equal(true);
});

When(/^I click "Click Me" button$/, async () => {
    await elementsPage.clickMeBtn.scrollIntoView();
    await elementsPage.clickMeBtn.click();
});

Then(/^I should see message "You have done a dynamic click"$/, async () => {
    expect(await elementsPage.clickMessage.isDisplayed()).to.equal(true);
});