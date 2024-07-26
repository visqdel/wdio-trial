const assert = require('assert');

//menggunakan function
async function login(username, password){
    // Buka URL
    await browser.url('/')

    //masukan username (css locator)
    await $('#user-name').setValue(username);
    //masukin password (css locator)
    await $('#password').setValue(password);

    //klik login
    await $('#login-button').click();
}
//login
    describe('SauceDemo Login Succes with function', () => {
    it('should login with valid credential', async () => {
    // Panggil function
    await login('standard_user', 'secret_sauce')
    
    //inventory
    await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
    })

    //negatif username
    it('should login failed with invalid username', async () => {
        // Buka URL
        await login('invalid_user', 'secret_sauce')
        //assert error message
        const errorMessage = await $('//*[@data-test="error"]')
        await expect(errorMessage).toHaveTextContaining('Epic sadface: Username and password do not match any user in this service')
        })

    //negatif password
    it('should login failed with invalid password', async () => {
        // Buka URL
        await login('standard_user', 'invalid_sauce')
        //assert error message
        const errorMessage = await $('//*[@data-test="error"]')
        await expect(errorMessage).toHaveTextContaining('Epic sadface: Username and password do not match any user in this service')
        })
})