//const Page = require('./page');

class LoginPage {
    //defisini lacator dari element
    get usernameInput() {
        return $('#user-name'); //locator field username
    }

    get passwordInput() {
        return $('#password'); //locator field password
    }

    get loginButton() {
        return $('#login-button'); // locator login
    }

    get errorMsg() {
        return $('//*[@data-test="error"]'); //locator error
    }

//definisi action dari element tersebut
async login(username, password) {
    await this.usernameInput.setValue(username);
    await this.passwordInput.setValue(password);
    await this.loginButton.click();
}

async assertErrorMessage(expectedErrorMessage) {
    await expect(this.errorMsg).toHaveTextContaining(expectedErrorMessage);
}

async getErrorMessage() {
    return this.errorMsg.getText();
}

}

module.exports = new LoginPage();