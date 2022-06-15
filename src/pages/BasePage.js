const {expect} = require('@playwright/test');

exports.BasePage = class BasePage {

    constructor(page) {
        this.page = page;
        this.userName = page.locator("#username");
        this.password = page.locator("#password");
        this.logInButton = page.locator("[value='LOG IN']");
        this.goToCourse = page.locator('.btn-primary');
        this.eulabutton = page.locator('text=I Accept');
    }

    async openCourse({username, password}) {
        await this.userName.type(username);
        await this.password.type(password);
        await this.logInButton.click();
        await this.goToCourse.click();
        await this.eulabutton.click();
        await expect(this.page).toHaveURL(/.*dashboard/, {timeout: 15000});
    }

}