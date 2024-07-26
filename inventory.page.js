//const Page = require('./page');

class InventoryPage extends Page() {
    get InventoryPageUrl(){
        return 'https://www.saucedemo.com/inventory.html';
    } 
    
    async assertInventoryUrl() {
        await expect(browser).toHaveUrl(this.InventoryPageUrl)
    }
}

module.exports = new InventoryPage();

