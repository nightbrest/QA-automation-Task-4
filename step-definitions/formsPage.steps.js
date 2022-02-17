const { Given, When, Then } = require ('@wdio/cucumber-framework');
const formsPage = require('../pageobjects/formsPage');
const {expect} = require('chai');

Given(/^I am on Forms module page$/, async () => {
    await browser.maximizeWindow();
    await formsPage.open('https://demoqa.com/forms');
    expect (await browser.getUrl()).to.equal('https://demoqa.com/forms');
});

When(/^I click "Practice Form" button$/, async () => {
    await formsPage.practiceFormBtn.scrollIntoView();
    await formsPage.practiceFormBtn.click();
});

Then(/^I should see the "Student Registration form" with fields to fill in$/, async () => {
    expect(await (formsPage.regForm).isDisplayed()).to.equal(true);
});

When(/^I fill First name field with "(.*)"$/, async (stName) => {
    await formsPage.inputFirstName.setValue(stName);
});

Then(/^I should see "(.*)" appeared in First name field$/, async (stName) => {
    expect(await (formsPage.inputFirstName).getValue()).to.include(stName);
});

When(/^I fill Last name field with "(.*)"$/, async (lstName) => {
    await formsPage.inputLastName.setValue(lstName);
});

Then(/^I should see "(.*)" appeared in Last name field$/, async (lstName) => {
    expect(await (formsPage.inputLastName).getValue()).to.include(lstName);
});

When(/^I fill Email's field with "(.*)"$/, async (studEmail) => {
    await formsPage.inputEmail.setValue(studEmail);
});


Then(/^I should see "(.*)" appeared in Email field$/, async (studEmail) => {
    expect(await (formsPage.inputEmail).getValue()).to.include(studEmail);
});

When(/^I click "Male" radio button$/, async () => {
    await formsPage.radioBtnGender.scrollIntoView();
    await formsPage.radioBtnGender.click();
});

Then(/^I should see "Male" chechbox became active$/, async () => {
    expect(await formsPage.radioBtnGenderIsSelected.isSelected()).to.equal(true);
});

When(/^I fill Mobile field with "(.*)"$/, async (studMobile) => {
    await formsPage.inputMobile.scrollIntoView();
    await formsPage.inputMobile.setValue(studMobile);
});

Then(/^I should see "(.*)" appeared in Mobile field$/, async (studMobile) => {
    expect(await (formsPage.inputMobile).getValue()).to.include(studMobile);
});

When(/^I select the date 1st October 1982 in "Date of Birth"$/, async () => {
    await formsPage.inputBirth.scrollIntoView();
    await formsPage.inputBirth.click();
    await formsPage.monthSelect.selectByIndex(9);
    await formsPage.yearSelect.click();
    await formsPage.yearSelect.selectByAttribute("value", "1982");
    await formsPage.daySelect.click();
});

Then(/^I should see "(.*)" appeared in Date of Birth field$/, async (birthDate) => {
    expect(await (formsPage.inputBirth).getValue()).to.include(birthDate);
});

When(/^I fill Subject field with "(.*)"$/, async (studSubject) => {
    await formsPage.inputSubjects.scrollIntoView();
    await formsPage.inputSubjects.setValue(studSubject);
});

Then(/^I should see "(.*)" appeared in Subject field$/, async (studSubject) => {
    expect(await (formsPage.inputSubjects).getValue()).to.include(studSubject);
});

When(/^I click Sports Reading Music checkboxes$/, async () => {
    await formsPage.checkBoxHobbySports.scrollIntoView();
    await formsPage.checkBoxHobbySports.click();
    await formsPage.checkBoxHobbyReading.click();
    await formsPage.checkBoxHobbyMusic.click();
});

Then(/^I should see Sports Reading Music checkboxes became active$/, async () => {
    expect(await formsPage.checkBoxHobbySportsSel.isSelected()).to.equal(true);
    expect(await formsPage.checkBoxHobbyReadingSel.isSelected()).to.equal(true);
    expect(await formsPage.checkBoxHobbyMusicSel.isSelected()).to.equal(true);
});

When(/^I choose and upload local picture$/, async () => {
    await formsPage.uploadPictureBtn.scrollIntoView();
    const remoteFilePath = await browser.uploadFile("Untitled.png");
    await formsPage.uploadPictureBtn.setValue(remoteFilePath);
});

When(/^I fill students Current Address field with "(.*)"$/, async (curStudAdr) => {
    await formsPage.inputCurAdr.scrollIntoView();
    await formsPage.inputCurAdr.setValue(curStudAdr);
});

Then(/^I should see "(.*)" appeared in Current Address field$/, async (curStudAdr) => {
    expect(await (formsPage.inputCurAdr).getValue()).to.include(curStudAdr);
});

When(/^I choose "(.*)" from Select State dropbox$/, async (studState) => {
    await formsPage.stateSelect.scrollIntoView();
    await formsPage.stateSelect.setValue(studState);
    await browser.keys("Enter");
});

Then(/^I should see state "(.*)" as selected$/, async (studState) => {
    expect(await (formsPage.stateCheck).getText()).to.include(studState);
});

When(/^I choose "(.*)" from Select City dropbox$/, async (studCity) => {
    await formsPage.citySelect.scrollIntoView();
    await formsPage.citySelect.setValue(studCity);
    await browser.keys("Enter");
});

Then(/^I should see city "(.*)" as selected$/, async (studCity) => {
    expect(await (formsPage.cityCheck).getText()).to.include(studCity);
});

When(/^I click form's "Submit" button$/, async () => {
    await formsPage.formSubmitBtn.scrollIntoView();
    await formsPage.formSubmitBtn.click();
});

Then(/^I should see new window appeared with all information I've just filled in$/, async () => {
    expect(await (formsPage.formAppeared).isDisplayed()).to.equal(true);
});

Then(/^I should see in new the window "(.*)"$/, async (fieldValue) => {
    expect(await (formsPage.formAppeared).getText()).to.contain(fieldValue);
});

When(/^I click "Close" button$/, async () => {
    await formsPage.closeFormBtn.scrollIntoView();
    await formsPage.closeFormBtn.click();
});

Then(/^I should see the window disappeared$/, async () => {
    await formsPage.formAppeared.waitForDisplayed({ reverse: true })
    expect(await (formsPage.formAppeared).isDisplayed()).to.equal(false);
});


