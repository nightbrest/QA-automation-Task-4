const Page = require('./page');

const selectors = {
    trainingBanner: '//img[@alt="Selenium Online Training"]',
    elementsButton: '//h5[text() = "Elements"]',
    formsButton: '//h5[text() = "Forms"]',
    alertsFrameWindowsButton:'//h5[text() = "Alerts, Frame & Windows"]',
    widgetsButton:'//h5[text() = "Widgets"]',
    interactionsButton:'//h5[text() = "Interactions"]',
    bookStoreApplicationButton:'//h5[text() = "Book Store Application"]',
    toolsQaLabel:'//img[@src="/images/Toolsqa.jpg"]',
    guyLogo: '//img[@alt="Certified Guy"]',
};

class StartPage extends Page {
    get trainingBanner() { return $(selectors.trainingBanner) };

    get elementsButton() { return $(selectors.elementsButton) };
    
    get formsButton() { return $(selectors.formsButton) };

    get alertsFrameWindowsButton() { return $(selectors.alertsFrameWindowsButton) };

    get widgetsButton() { return $(selectors.widgetsButton) };

    get interactionsButton() { return $(selectors.interactionsButton) };
    
    get bookStoreApplicationButton() { return $(selectors.bookStoreApplicationButton) };

    get toolsQaLabel() { return $(selectors.toolsQaLabel) };

    get guyLogo() { return $(selectors.guyLogo) };

};

module.exports = new StartPage();

