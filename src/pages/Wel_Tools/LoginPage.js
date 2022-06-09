const {expect} = require("@playwright/test");

class LoginPage {

    constructor(page) {
        this.page = page;
        this.userName = page.locator('[placeholder="Username"]');
        this.passWord = page.locator('[placeholder="Password"]');
        this.signIn = page.locator('button:has-text("Sign in")');
        this.loggedUser = page.locator('text=Welcome')
    }

    async navigate(email, password) {
        await page.goto('https://services-internal.non-prod.efficientlearning.com/wel-tools/login');
        await this.userName.type(email);
        await this.passWord.type(password);
        await this.signIn.click();
        await expect(this.loggedUser).toContainText('Welcome');
    }

}

module.exports = {LoginPage};
