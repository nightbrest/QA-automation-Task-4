const Page = require('./page');

const selectors = {
    tabsBtn: '//span[text() = "Tabs"]',
    whatTab: '#demo-tab-what',
    origiTab: '#demo-tab-origin',
    useTab: '#demo-tab-use',
    menuBtn: '//span[text() = "Menu"]',
    mainItem1: '//a[text() = "Main Item 1"]',
    mainItem2: '//a[text() = "Main Item 2"]',
    mainItem3: '//a[text() = "Main Item 3"]',
    subItem: '//a[text() = "Sub Item"]',
    subSubList: '//a[text() = "SUB SUB LIST »"]',
    subSubItem1: '//a[text() = "Sub Sub Item 1"]',
    subSubItem2: '//a[text() = "Sub Sub Item 2"]',
    textContainer: '#tabsContainer'
};

class WidgetsPage extends Page {
    get textContainer() { return $(selectors.textContainer) };

    get tabsBtn() { return $(selectors.tabsBtn) };

    get whatTab() { return $(selectors.whatTab) };

    get origiTab() { return $(selectors.origiTab) };

    get useTab() { return $(selectors.useTab) };
    
    get menuBtn() { return $(selectors.menuBtn) };

    get mainItem1() { return $(selectors.mainItem1) };

    get mainItem2() { return $(selectors.mainItem2) };

    get mainItem3() { return $(selectors.mainItem3) };
    
    get subItem() { return $(selectors.subItem) };

    get subSubList() { return $(selectors.subSubList) };
    
    get subSubItem1() { return $(selectors.subSubItem1) };

    get subSubItem2() { return $(selectors.subSubItem2) };
};

module.exports = new WidgetsPage();