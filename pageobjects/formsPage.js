const Page = require('./page');

const selectors = {
    practiceFormBtn: '//span[text()="Practice Form"]',
    regForm: '//h5[text() = "Student Registration Form"]',
    inputFirstName: '//input[@placeholder="First Name"]',
    inputLastName: '//input[@placeholder="Last Name"]',
    inputEmail: '//input[@placeholder="name@example.com"]',
    radioBtnGender: '//label[@for="gender-radio-1"]',
    radioBtnGenderIsSelected: '//input[@id="gender-radio-1"]',
    inputMobile: '//input[@placeholder="Mobile Number"]',  
    inputBirth: '//input[@id="dateOfBirthInput"]',  
    monthSelect: '//select[@class="react-datepicker__month-select"]',
    yearSelect: '//select[@class="react-datepicker__year-select"]',
    daySelect: '//div[@aria-label="Choose Thursday, October 7th, 1982"]',
    inputSubjects: '//input[@id="subjectsInput"]', 
    checkBoxHobbySports: '//label[@for="hobbies-checkbox-1"]',
    checkBoxHobbyReading: '//label[@for="hobbies-checkbox-2"]',
    checkBoxHobbyMusic: '//label[@for="hobbies-checkbox-3"]',
    checkBoxHobbySportsSel: '//input[@id="hobbies-checkbox-1"]',
    checkBoxHobbyReadingSel: '//input[@id="hobbies-checkbox-2"]',
    checkBoxHobbyMusicSel: '//input[@id="hobbies-checkbox-3"]',
    uploadPictureBtn: '//input[@id="uploadPicture"]',
    inputCurAdr: '//textarea[@id="currentAddress"]',
    stateSelect: '//input[@id="react-select-3-input"]', 
    stateCheck: '//div[@id="state"]//div[contains(@class, "singleValue")]',
    citySelect: '//input[@id="react-select-4-input"]', 
    cityCheck:'//div[@id="city"]//div[contains(@class, "singleValue")]',
    formSubmitBtn: '//button[@id="submit"]',
    formAppeared: '/html/body/div[4]/div/div/div[2]/div/table',
    closeFormBtn: '//button[@id="closeLargeModal"]'
};

class FormsPage extends Page {
    get regForm() { return $(selectors.regForm) };

    get practiceFormBtn() { return $(selectors.practiceFormBtn) };

    get inputFirstName() { return $(selectors.inputFirstName) };

    get inputLastName() { return $(selectors.inputLastName) };
    
    get inputEmail() { return $(selectors.inputEmail) };

    get radioBtnGender() { return $(selectors.radioBtnGender) };

    get radioBtnGenderIsSelected() { return $(selectors.radioBtnGenderIsSelected) };

    get inputMobile() { return $(selectors.inputMobile) };

    get inputBirth() { return $(selectors.inputBirth) };
    
    get monthSelect() { return $(selectors.monthSelect) };

    get yearSelect() { return $(selectors.yearSelect) };

    get daySelect() { return $(selectors.daySelect) };

    get inputSubjects() { return $(selectors.inputSubjects) };

    get checkBoxHobbySports() { return $(selectors.checkBoxHobbySports) };

    get checkBoxHobbyMusic() { return $(selectors.checkBoxHobbyMusic) };

    get checkBoxHobbyReading() { return $(selectors.checkBoxHobbyReading) };

    get checkBoxHobbySportsSel() { return $(selectors.checkBoxHobbySportsSel) };

    get checkBoxHobbyMusicSel() { return $(selectors.checkBoxHobbyMusicSel) };

    get checkBoxHobbyReadingSel() { return $(selectors.checkBoxHobbyReadingSel) };

    get uploadPictureBtn() { return $(selectors.uploadPictureBtn) };

    get inputCurAdr() { return $(selectors.inputCurAdr) };

    get stateSelect() { return $(selectors.stateSelect) };

    get citySelect() { return $(selectors.citySelect) };

    get stateCheck() { return $(selectors.stateCheck) };

    get cityCheck() { return $(selectors.cityCheck) };

    get formSubmitBtn() { return $(selectors.formSubmitBtn) };

    get formAppeared() { return $(selectors.formAppeared) };

    get closeFormBtn() { return $(selectors.closeFormBtn) };
};

module.exports = new FormsPage();

