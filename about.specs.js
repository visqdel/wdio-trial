const assert = require('assert');

class AboutPage {
    // Disini didefinisikan locator dari element
    get AboutButton() {
        return $("react-burger-menu-btn"); //button category
    }

    // Disini didefinisikan action yang akan dilakukan kepada element
    async click() {
        await this.AboutButton.waitForExist({ timeout: 15000 }); // nunggu page loading sebentar
        await this.AboutButton.click();
        await this.assertAboutURL(); // assert setelah klik tombol
    }

    // assert pada URL setelah klik tombol
    async assertAboutURL() {
        const expectedURL = 'https://saucelabs.com/'; // URL yang diharapkan

        await browser.waitUntil(async () => {
            const currentURL = await browser.getUrl(); // Mendapatkan URL saat ini
            return currentURL === expectedURL; // Kembali true jika URL saat ini sesuai dengan yang diharapkan
        }, { timeout: 5000, timeoutMsg: 'URL tidak sesuai setelah mengklik tombol kategori' }); // Tunggu hingga 5 detik, jika tidak, berikan pesan timeout
    }
}

module.exports = new AboutPage();
