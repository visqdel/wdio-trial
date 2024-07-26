class AboutPage extends Page() {
    get AboutPageUrl(){
        return 'https://www.saucedemo.com/inventory.html';
    } 
    
    async assertAboutUrl() {
        await expect(browser).toHaveUrl(this.AboutPageUrl)
    }
}

module.exports = new AboutPage();