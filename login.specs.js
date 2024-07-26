const assert = require('assert');

    describe('SauceDemo Login Succes', () => {
    it('should login with valid credential', async () => {
    // Buka URL
    await browser.url('/')

    //masukan username (css locator)
    await $('#user-name').setValue('standard_user');
    //masukin password (css locator)
    await $('#password').setValue('secret_sauce');

    //klik login
    await $('#login-button').click();
    //inventory
    await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
    })

    //negatif username
    it('should login failed with invalid username', async () => {
        // Buka URL
        await browser.url('/')
    
        //masukan username (css locator)
        await $('#user-name').setValue('invalid_user');
        //masukin password (css locator)
        await $('#password').setValue('secret_sauce');
    
        //klik login
        await $('#login-button').click();
        //assert error message
        const errorMessage = await $('//*[@data-test="error"]')
        await expect(errorMessage).toHaveTextContaining('Epic sadface: Username and password do not match any user in this service')
        })

    //negatif password
    it('should login failed with invalid password', async () => {
        // Buka URL
        await browser.url('/')
    
        //masukan username (css locator)
        await $('#user-name').setValue('standard_user');
        //masukin password (css locator)
        await $('#password').setValue('invalid_sauce');
    
        //klik login
        await $('#login-button').click();
        //assert error message
        const errorMessage = await $('//*[@data-test="error"]')
        await expect(errorMessage).toHaveTextContaining('Epic sadface: Username and password do not match any user in this service')
        })
})