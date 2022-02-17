const Page = require('./page');

const selectors = {
    textBoxButton: '//li[@id="item-0"][1]',
    inputName: '//input[@placeholder="Full Name"]',
    inputEmail: '//input[@placeholder="name@example.com"]',
    inputCurAdr: '//textarea[@placeholder="Current Address"]',
    inputPerAdr: '//textarea[@id="permanentAddress"]',
    submitBtn: '//button[@id="submit"]',
    errorEmail: '//input[@class="mr-sm-2 field-error form-control"]',
    ButtonBtn: '//li[@id="item-4"][1]',
    doubleClickBtn: '//button[@id="doubleClickBtn"]',
    rightClickBtn:'//button[@id="rightClickBtn"]',
    clickMeBtn: '//button[text() = "Click Me"]',
    doubleClcMessage: '//p[@id="doubleClickMessage"]',
    rightClcMessage: '//p[@id="rightClickMessage"]',
    clickMessage: '//p[@id="dynamicClickMessage"]',
    outputForm: '//div[@id="output"]'
};

class ElementsPage extends Page {
    get textBoxButton() { return $(selectors.textBoxButton) };

    get inputName() { return $(selectors.inputName) };
    
    get inputEmail() { return $(selectors.inputEmail) };

    get inputCurAdr() { return $(selectors.inputCurAdr) };

    get inputPerAdr() { return $(selectors.inputPerAdr) };

    get submitBtn() { return $(selectors.submitBtn) };
    
    get errorEmail() { return $(selectors.errorEmail) };

    get ButtonBtn() { return $(selectors.ButtonBtn) };

    get doubleClickBtn() { return $(selectors.doubleClickBtn) };

    get rightClickBtn() { return $(selectors.rightClickBtn) };

    get clickMeBtn() { return $(selectors.clickMeBtn) };

    get doubleClcMessage() { return $(selectors.doubleClcMessage) };

    get rightClcMessage() { return $(selectors.rightClcMessage) };

    get clickMessage() { return $(selectors.clickMessage) };

    get outputForm() { return $(selectors.outputForm) };
};

module.exports = new ElementsPage();

