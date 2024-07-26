const Page = require('../../pages/page')
const LoginPage = require('../../pages/login.page')
const InventoryPage = require('../../pages/inventory.page');
const LoginPage = require('../../pages/login.page');

//login
    describe('SauceDemo Login Succes with function', () => {
        beforeEach (async () => {
            //open browser
            Page.open('/')
        })


    it('should login with valid credential', async () => {
    // Panggil function
    await LoginPage.login('standard_user', 'secret_sauce')
    
    //inventory
    await InventoryPage.assertInventoryUrl();
    })

    //negatif username
    it('should login failed with invalid username', async () => {
        // Buka URL
        await LoginPage.login('invalid_user', 'secret_sauce')
        //assert error message
        await LoginPage.assertErrorMessage();
    
        })

    //negatif password
    it('should login failed with invalid password', async () => {
        // Buka URL
        await LoginPage.login('standard_user', 'invalid_sauce')
        //assert error message
        
        await LoginPage.assertErrorMessage();
        })
})