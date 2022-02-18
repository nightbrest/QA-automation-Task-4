const Page = require('./page');

const selectors = {
    browserWindowsBtn: '//span[text() = "Browser Windows"]',
    samplePageText: '#sampleHeading',
    newTabBtn: '#tabButton',
    newWindowBtn: '#windowButton',
    newWinMesBtn: '#messageWindowButton',
    modalDialogsBtn: '//span[text() = "Modal Dialogs"]',
    smallModalBtn: '#showSmallModal',
    largeModalBtn: '#showLargeModal',
    smallModalTitle: '#example-modal-sizes-title-sm',
    largeModalTitle: '#example-modal-sizes-title-lg',
    closeSmallModBtn: '#closeSmallModal',
    closeLargeModBtn: '#closeLargeModal',
    windowText: '//*[contains(text(),"Knowledge")]'

};

class AlertstsPage extends Page {
    get browserWindowsBtn() { return $(selectors.browserWindowsBtn) };

    get windowText() { return $(selectors.windowText) };

    get newTabBtn() { return $(selectors.newTabBtn) };

    get samplePageText() { return $(selectors.samplePageText) };
    
    get newWindowBtn() { return $(selectors.newWindowBtn) };

    get newWinMesBtn() { return $(selectors.newWinMesBtn) };

    get modalDialogsBtn() { return $(selectors.modalDialogsBtn) };

    get smallModalBtn() { return $(selectors.smallModalBtn) };
    
    get largeModalBtn() { return $(selectors.largeModalBtn) };

    get smallModalTitle() { return $(selectors.smallModalTitle) };
    
    get largeModalTitle() { return $(selectors.largeModalTitle) };

    get closeSmallModBtn() { return $(selectors.closeSmallModBtn) };

    get closeLargeModBtn() { return $(selectors.closeLargeModBtn) };
  
};

module.exports = new AlertstsPage();

