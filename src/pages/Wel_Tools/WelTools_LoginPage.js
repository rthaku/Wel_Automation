const {expect} = require("@playwright/test");

exports.WelTools_LoginPage = class WelTools_LoginPage {

    constructor(page) {
        this.page = page;
        this.userName = page.locator('[placeholder="Username"]');
        this.passWord = page.locator('[placeholder="Password"]');
        this.signIn = page.locator('button:has-text("Sign in")');
        this.loggedUser = page.locator('text=Welcome')
    }

    async loginToWelTools({email, password}) {
        await this.userName.type(email);
        await this.passWord.type(password);
        await this.signIn.click();
        await expect(this.loggedUser).toContainText('Welcome');
    }

}