const Page = require('./page');

const selectors = {
    sortableBtn: '//span[text() = "Sortable"]',
    listTab: '#demo-tab-list',
    listItemOne: '//div[@id="demo-tabpane-list"]/div/div[1]',
    listItemSix: '//div[@id="demo-tabpane-list"]/div/div[6]',
    gridTab: '#demo-tab-grid',
    gridItemOne: '//div[@id="demo-tabpane-grid"]/div/div/div[1]',
    gridItemThree: '//div[@id="demo-tabpane-grid"]/div/div/div[3]',
    tabl: '//div[@class="vertical-list-container mt-4"]'
};

class InteractionsPage extends Page {
    get tabl() { return $(selectors.tabl) };

    get sortableBtn() { return $(selectors.sortableBtn) };

    get listTab() { return $(selectors.listTab) };

    get listItemOne() { return $(selectors.listItemOne) };

    get listItemSix() { return $(selectors.listItemSix) };
    
    get gridTab() { return $(selectors.gridTab) };

    get gridItemOne() { return $(selectors.gridItemOne) };

    get gridItemThree() { return $(selectors.gridItemThree) };
};

module.exports = new InteractionsPage();

